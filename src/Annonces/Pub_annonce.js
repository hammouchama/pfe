import React,{useEffect,useState} from 'react';
import { Navigate } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Calendar from 'react-calendar';
import { valids } from './ValidatationAno';
import axios from 'axios';
import Swal from 'sweetalert2'
import {getItem} from '../component/LocalStor';
import Navbar from '../Navbar/Navbar';
function Annonce(){
    const[submit,setSubmit]=useState('valid');
    const [categorie,setCategorie]=useState('');
    const [titre,setTitre]=useState('');
    const [description,setDescription]=useState('');
    const [tarif,setTarif]=useState(0);
    const [numdetelephone,setNumdetelephone]=useState('');
    const [datededebut,setDatededebut]=useState(new  Date().toISOString().substr(0,10));
    const [datedefin,setDatedefin]=useState('');
    const [localisation,setLocalisation]=useState('');
    const [capacite,setCapacite]=useState('');
    const [errMsg,setErrMsg]=useState("");
    const [repo,setRepo]=useState("");
    const[succes,setSucces]=useState(false);
    const [img,setImg]=useState('');
    const [reserv,setReserv]=useState(0);
    const [reserv_method,setReserv_method]=useState(0);
    const [vv,setVv]=useState(0)
    const [date,setDate]=useState(new  Date())
    useEffect(()=>{
     
      {if(reserv !=1){
         document.getElementById("method").style.cssText="display: none"}
        else{
          document.getElementById("method").style.cssText="display: grid"
        }}
    },
    [categorie,titre,description,tarif,numdetelephone,datededebut,datedefin,localisation,capacite,img,reserv,errMsg,vv])
   const  handleSubmit=async (e)=>{
    setErrMsg(valids({datededebut,datedefin,numdetelephone,vv})); 
       e.preventDefault();
       
       if(errMsg.vv===0){      
     let formData=new FormData();
     formData.append('capacite',capacite);
     formData.append('localisation',localisation);
     formData.append('datedefin',datedefin);
     formData.append('datededebut',datededebut);
     formData.append('numdetelephone',numdetelephone);
     formData.append('tarif',tarif);
     formData.append('description',description);
     formData.append('titre',titre);
     formData.append('categorie',categorie);
     formData.append('valid',submit);
     formData.append('img',img);
     formData.append('reserver',reserv);
     formData.append('reserver_method',reserv_method);
     axios({
       // Endpoint to send files
       url: `http://localhost:80/my-pfe/my-scsc/back-end/db/annonce.php?email=${getItem('email')}`,
       method: "POST",
       headers: {
         // Add any auth token here
         authorization: "your token comes here",
       },
       // Attaching the form data
       data: formData,
     })
       // Handle the response from backend here
       .then((res) => {if(res.data!=='good'){setRepo(res.data)}else{
        setCategorie('');
        setTitre('');
        setDescription('');
        setTarif('');
        setNumdetelephone('');
        setDatededebut('');
        setDatedefin('');
        setLocalisation('');
        setCapacite('');
        setRepo('');
        setImg('');
        setSubmit(false);
        Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Efféctue avec succès',
         showConfirmButton: true,
         confirmButtonText: 'OK',
       }).then((result) => {
           if (result.isConfirmed) {
             setSucces(true);
       }else{
        setSucces(true);
       }}) 
        
       }})
       // Catch errors if any
       .catch((err)=>console.log(err));
      // console.log(repo)
       }
 }
 console.log(errMsg.vv)
       return ( <>
       <Navbar/>
       {succes ?(
         <>
         {window.location.replace('/profil')}
        <Navigate to="/profil"></Navigate>
         </>
        ):(
        <div className='container'>
            <form className='card shadow-sm border-0 px-3 rounded-2 mb-4 py-2 mx-auto mt-4 bg-light col-md-8' >
            <div className="input-group mb-3">
            <img src={`./images/${img.name}`} alt="" style={img=='' ?{display:"none"}:{display:"flex",maxHeight:"300px",maxWidth:"400px"}}/>

                    <input type="file" className="form-control" id="inputGroupFile02"
                     name="img" required
                     onChange={(e)=>{setImg(e.target.files[0])}}/>
                    <label className="input-group-text" htmlFor="inputGroupFile02">Logo</label>
                </div>
            <div className="row">
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="Titre" className="form-label">Titre d'Annonce <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="Titre"  required
                 name='titre' value={titre} onChange={(e)=>{setTitre(e.target.value)}}/>
            </div>
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="Categorie" className="form-label">Categorie <span className="text-danger">*</span></label>
                <select className="form-select form-select-lg mb-2"
                name="categorie" onChange={(e)=>{setCategorie(e.target.value)}}
                aria-label=".form-select-lg example" id='Categorie'>
                <option value="">Categorie</option>
                <option value="Conférence">Conférence</option>
                <option value="Sport">Sport</option>
                <option value="Activité artistique">Activité artistique</option>
                <option value="Activité culturelle">Activité culturelle</option>
                <option value="Activité educative">Activité Educative</option>
                <option value="Autres">Autres</option>
                  </select>
            </div>
            </div>
            <div className="row">
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="tarif" className="form-label">Tarif <span className="text-danger">*</span></label>
                <input type="number" className="form-control" id="tarif" required min={0}
                 name="tarif" value={tarif} onChange={(e)=>{setTarif(e.target.value)}}/>
            </div> 
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="telephone" className="form-label">N° de Telephone <span className="text-danger">*</span></label>
                <input type="tel" className="form-control" id="Telephone"  required max={0}
                 name="numdetelephone" value={numdetelephone}  onChange={(e)=>{setNumdetelephone(e.target.value)}}/>
                  <p className="alert1 alert-danger" role="alert">{errMsg.numdetelephone}</p>
            </div></div>
            <div className="row"> 
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="date de debut" className="form-label">Date de debut <span className="text-danger">*</span></label>
                <input type="date" className="form-control" id="Date de debut"  required min={new  Date().toISOString().substr(0,10)}
                 name="datededebut" value={datededebut} onChange={(e)=>{setDatededebut(e.target.value)}}/>
                 <p className="alert1 alert-danger" role="alert">{errMsg.datededebut}</p>
            </div>
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="date de fin" className="form-label">Date de fin <span className="text-danger">*</span></label>
                <input type="date" className="form-control" id="Date de fin"  required min={datededebut}
                 name="datedefin" value={datedefin} onChange={(e)=>{setDatedefin(e.target.value)}}/>
                 <p className="alert1 alert-danger" role="alert">{errMsg.datedefin}</p>
            </div></div>
            <div className="row">
                <div className="mb-2 form-group col-md-6">
                <label htmlFor="Localisation" className="form-label">localisation <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="Localisation" required min={10}
                 name="localisation" value={localisation} onChange={(e)=>{setLocalisation(e.target.value)}}/>
                </div>
                 
                <div className="mb-2 form-group col-md-6">
                <label htmlFor="Capacite" className="form-label">Capacite <span className="text-danger">*</span></label>
                <input type="number" className="form-control" id="Capacite" required
                 name="capacite" value={capacite} onChange={(e)=>{setCapacite(e.target.value)}}/>
                </div></div>
                <div className="mb-2 form-group">
                <label htmlFor="Description" className="form-label">Description <span className="text-danger">*</span></label>
                <textarea type="text" className="form-control " id="Description"  required
                 name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            </div>
            <div className="row">
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="reserv" className="form-label">possibilité de réservation <span className="text-danger">*</span></label>
                <select  id="reserv" className="form-select form-select-lg mb-1" required name="reserver"
                onChange={(e)=>{setReserv(e.target.value)}}>
                    <option value="" selected> </option>
                    <option value="1">Oui</option>
                    <option value="0">Non</option>
                  </select>
            </div>
            <div className="mb-2 form-group col-md-6" id='method'>
                <label htmlFor="reserve-form" className="form-label">réservation pour?<span className="text-danger">*</span></label>
                  <select  id="reserve-form" className="form-select form-select-lg mb-1" required name="reserver_method"
                   onChange={(e)=>{setReserv_method(e.target.value)}}>
                    <option value="" selected> </option>
                    <option value="1">un jour</option>
                    <option value="0">une période</option>
                  </select>
            </div></div>
            <br />
            <p className="alert1 alert-danger" role="alert">{repo}</p>
            <br />
            <button type="submit" className="btn btn-info col-md-2" name='valid'onClick={handleSubmit}>Publier</button>
            
            </form>

        </div>)}</>
        
      );
   }

export default Annonce;
