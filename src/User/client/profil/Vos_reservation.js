import React,{useEffect,useState} from "react";
import axios from "axios";
import {getItem} from '../../../component/LocalStor';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye,faPenToSquare,faTrash,faPlus} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
function Vos_reservation({id}){
    const [idc,setIdc]=useState(id)
    const [info1,setInfo1]=useState([]);
    const [loding,setLoding]=useState(false);
    useEffect(()=>{
        const fetcheInfo=async ()=>{
          setLoding(true)
          const res =await axios.get(`http://localhost/my-pfe/my-scsc/back-end/db/afficher/vos_resrvation.php?id=${id}`)
         setInfo1(res.data)
         setLoding(false)
        }
        fetcheInfo()
        
    },[])

    if(loding && info1.length===0){
        return <div><i className="pas_de_coment"></i>
        <span className="">Pas de réservation </span></div>
    }
        const sup_annonce=async(ida)=>{
            //e.preventDefault();
            console.log(ida)
            let formData=new FormData();
            axios({
              url: `http://localhost:80/my-pfe/my-scsc/back-end/db/reservation/supp_reservation.php?id=${ida}`,
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
          <th scope="col">N° des place</th>
          <th scope="col">Annuler</th>
        </tr>
      </thead>
      {info1.map((res,index)=>(
          
    <>
      <tbody>
        <tr>
          <th scope="row">{index+1}</th>
          <td>{res.titre}</td>
          <td><button type="button" className="btn" 
          onClick={()=>{window.sessionStorage.id_pub=res.id_pub}}>
            <Link exact to="/annonce/d"><FontAwesomeIcon icon={faEye}/></Link></button></td>
          <td>{res.n_place}</td>
          <td>{ Math.floor(((new Date(res.date_debut).getTime())- (new Date().getTime()))/ (24 * 60 * 60 * 1000))>=1 ? ( 
          <button type="button" className="btn btn-danger"
          onClick={(e)=>{
            Swal.fire({
              title: 'Etes-vous sûr de vouloir annuler votre réservation?',
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
          </button>
          ):(
            'Trop tard'
          ) }</td>
          
        </tr>
       
      </tbody>
    
      </>
      ))}
    </table>
        
        </div>)
    }
    
export default Vos_reservation;