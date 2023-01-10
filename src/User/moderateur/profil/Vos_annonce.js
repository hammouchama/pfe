import React,{useEffect,useState} from "react";
import axios from "axios";
import {getItem} from '../../../component/LocalStor';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye,faPenToSquare,faTrash,faPlus} from '@fortawesome/free-solid-svg-icons'
import './v_annonc.css';
import Swal from 'sweetalert2'
function Vos_annoncee({id}){
    const [info1,setInfo1]=useState([]);
    const [loding,setLoding]=useState(false);
    useEffect(()=>{
        const fetcheInfo=async ()=>{
          setLoding(true)
          const res =await axios.get(`http://localhost/my-pfe/my-scsc/back-end/db/afficher/vos_annonce.php?email=${getItem('email')}`)
         setInfo1(res.data)
         setLoding(false)
        }
        fetcheInfo()
    },[])
    if(loding && info1.length===0){
        return <div><i className="pas_de_coment"></i>
        <span className="">Pas d'annonce</span></div>
    }
    const sup_annonce=async(ida)=>{
        //e.preventDefault();
        console.log(ida)
        let formData=new FormData();
        axios({
          url: `http://localhost:80/my-pfe/my-scsc/back-end/db/annonce/supp_annonce.php?id=${ida}`,
          method: "POST",
          headers: {authorization: "your token comes here",},
          data: formData,
        }).then((res) =>{if(res.data==='good'){
         
        }else{
          console.log(res.data)
        }}).catch((err)=>(console.log(err)));
        }
      
    return(<div className="table-info table-responsive" >
        
      <table className="table table-bordered">
     
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Titre</th>
      <th scope="col">Voir</th>
      <th scope="col">Statut</th>
      <th scope="col">liste des réservations</th>
      <th scope="col">Modifier</th>
      <th scope="col">Supprimer</th>
    </tr>
  </thead>
  {info1.map((res,index)=>(
      
<>
  <tbody>
    <tr>
      <th scope="row">{index+1}</th>
      <td>{res.titre}</td>
      <td><button type="button" className="btn" 
      onClick={()=>{window.sessionStorage.id_pub=res.id}}>
        <Link exact to="/annonce/d"><FontAwesomeIcon icon={faEye} /></Link></button></td>
        <td>{res.statut==1 ? 'Accepter' :res.statut==0 ? 'En cours' :'Refuser'}</td>
      <td><button type="button" className="btn btn-info"  
      onClick={()=>{window.sessionStorage.anno_r=res.id}}>
      <Link exact to="/profil/list"><FontAwesomeIcon icon={faEye} /></Link> </button></td>
      <td><button type="button" className="btn btn-info"
      onClick={()=>{window.sessionStorage.id_pub=res.id}}>
         <Link exact to="/modifier"><FontAwesomeIcon icon={faPenToSquare}/></Link> </button></td>
      <td><button type="button" className="btn btn-danger"
      onClick={(e)=>{
        Swal.fire({
          title: 'Etes-vous sûr de vouloir supprimer votre annonce?',
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: 'Oui',
          denyButtonText: `Non`,
        }).then((result) => {
          if (result.isConfirmed) {
            sup_annonce(res.id)
            let timerInterval
            Swal.fire({
              title: 'Auto close alert!',
              html: 'Je fermerai dans  <b></b> millisecondes.',
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft()
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                window.history.go()
              }
            })
           
          } else if (result.isDenied) {
            Swal.fire('Annuler', '', 'info')
          }
        })
        }}
      ><FontAwesomeIcon icon={faTrash} />
      </button></td>
      
    </tr>
   
  </tbody>

  </>
  ))}
</table>
    <Link exact to="/profil/ajouter" className="btn btn-info add-anno" type="buttoun"><FontAwesomeIcon icon={ faPlus}/></Link>
    
    </div>)
}
export default Vos_annoncee;