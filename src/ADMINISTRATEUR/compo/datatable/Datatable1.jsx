import "./datatable.css";
import { Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import axios from "axios";
import Swal from 'sweetalert2'
export const User=()=>{
  const [info1,setInfo1]=useState([]);
const [loding,setLoding]=useState(false);
useEffect(()=>{
      const fetcheInfo=async ()=>{
        setLoding(true)
        const res =await axios.get(`http://localhost/my-pfe/my-scsc/back-end/db/admin/users.php?cat=client`)
       setInfo1(res.data)
       setLoding(false)
      }
      fetcheInfo()
      
  },[])
  const handSupp=async(idu)=>{
    let formData=new FormData();
    axios({
      url: `http://localhost:80/my-pfe/my-scsc/back-end/db/admin/supp_user.php?id=${idu}&cat=client`,
      method: "POST",
      headers: {authorization: "your token comes here",},
      data: formData,
    }).then((res) =>{if(res.data==='good'){
     
    }else{
      console.log(res.data)
    }}).catch((err)=>(console.log(err)));

    }
  
  return <div className="container" style={{marginTop:'-40%'}}>
  <table className="table caption-top">
  <caption>LISTES DES CLIENTS</caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">IMAG</th>
      <th scope="col">NOM</th>
      <th scope="col">EMAIL</th>
      <th scope="col">STATUT</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  {info1.map((res,index)=>(
  <tbody key={res.id}>
    <tr>
      <th scope="row">{res.id}</th>
      <td><img src={`../../images/profil/${res.image}`} alt="" className="cellImg" /></td>
      <td>{res.nom}  {res.prenom}</td>
      <td>{res.email}</td>
      <td>{res.statut}</td>
      <td><div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Voir</div>
            </Link>
            <div
              className="deleteButton"
              onClick={(e)=>{
                Swal.fire({
                  title: 'Etes-vous sûr de vouloir supprimer votre annonce?',
                  showDenyButton: true,
                  showCancelButton: false,
                  confirmButtonText: 'Oui',
                  denyButtonText: `Non`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    handSupp(res.id)
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
            >
              Supprimer
            </div>
          </div></td>
    </tr>
   
  </tbody>))}
</table>
    </div>
}