import {useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from '../../../Navbar/Navbar';
import Header from '../profil/Header'
function PDF(){
  const [annonce,setAnnonce]=useState([]);
  const [loding,setLoding]=useState(false);
  const [id_pub,setId_pub]=useState(window.sessionStorage.getItem('anno_r'));
  useEffect(()=>{
    setId_pub(window.sessionStorage.getItem('anno_r'));
      const fetcheInfo=async ()=>{
        setLoding(true)
        const res =await axios.get(`http://localhost:80/my-pfe/my-scsc/back-end/db/afficher/list_reservation.php?id=${id_pub}`)
        setAnnonce(res.data);
        setLoding(false)
      }
      fetcheInfo()
  },[annonce,id_pub])
  if(loding && annonce.length===0){
    return <div><Navbar/><i className="pas_de_coment"></i>
    <span className="">Pas de réservation</span></div>
}
   return(
    <>
    <Navbar/>
    <Header/>
     <div className='container table-responsive' style={{marginTop: "1%"}}>
        <h3 className='text-center' style={{fontSize:'20px',marginButom:'20px'}}>Liste des réservations </h3>
          <table className="table table-borderless">
     <thead className='table-success'>
       <tr>
         <th scope="col">#</th>
         <th scope="col">Nom</th>
         <th scope="col">Prénom</th>
         <th scope="col">Email</th>
         <th scope="col">N° de téléphone</th>
         <th scope="col">N° de place</th>
         <th scope="col">Date </th>
       </tr>
     </thead>
     {annonce.map((res,index)=>(
     <tbody>
       <tr>
         <th scope="row">{index+1}</th>
         <th scope="row">{res.nom}</th>
         <th scope="row">{res.prenom}</th>
         <th scope="row">{res.email}</th>
         <th scope="row">0{res.n_phone}</th>
         <th scope="row">{res.n_place}</th>
         <th scope="row">{res.date_r}</th>

        </tr>
     </tbody>
     ))}
     
     </table>
    
     </div></>
  );
}
export default PDF