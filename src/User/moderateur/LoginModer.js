import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from "react-router-dom";
import axios from 'axios'; 
import {lenghtObjet, ValidationDataMo } from './ValidationDataMo';
import Footer2 from './../../Footer/F2/Footer2';
import Navbar from '../../Navbar/Navbar'
import Swal from 'sweetalert2'
function LoginModer(){
    const[submit,setSubmit]=useState(false);
    const [nom,setNom]=useState('');
    const [prenom,setPrenom]=useState('');
    const [email,setEmail]=useState('');
    const [pwd,setPwd]=useState('');
    const [pwdc,setPwdc]=useState('');
    const [sexe,setSexe]=useState('');
    const [nomducentre,setNomducentre]=useState('');
    const [errMsg,setErrMsg]=useState(false);
    const [repo,setRepo]=useState('');
    const [validError,setValidError]=useState({});
    const[success,setSuccess]=useState(false);
    const [email1,setEmail1]=useState('');
    useEffect(()=>{
      if(lenghtObjet(validError)!==1){
        setErrMsg(true)
      }else{
         setErrMsg(false)
      }
    },
    [nom,prenom,email,pwd,pwdc,sexe,nomducentre,validError,errMsg])
   const  handleSubmit= async (e)=>{
       e.preventDefault();
      setValidError(ValidationDataMo({nom,prenom,pwd,pwdc}))
      if(validError.v===0){
      let formData=new FormData();
      formData.append('nom',nom);
      formData.append('prenom',prenom);
      formData.append('email',email);
      formData.append('pwd',pwd);
      formData.append('pwdc',pwdc);
      formData.append('sexe',sexe);
      formData.append('nomducentre',nomducentre);
      formData.append('valid',submit);
      axios({
        // Endpoint to send files
        url: "http://localhost:80/my-pfe/my-scsc/back-end/db/moderateur.php",
        method: "POST",
        headers: {
          // Add any auth token here
          authorization: "your token comes here",
        },
        // Attaching the form data
        data: formData,
      })
        // Handle the response from backend here
        .then((res) => {if(res.data!=='succes'){setRepo(res.data)}else{
          setEmail1(email);
         setPwd('');
         setNom('');
         setPrenom('');
         setPwdc('');
         setEmail('');
         setSexe('');
         setNomducentre('');
         setRepo('');
         setErrMsg('');
         setSubmit(false);
         Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Vous êtes connecté avec succès',
          showConfirmButton: true,
          confirmButtonText: 'OK',
        }).then((result) => {
            if (result.isConfirmed) {
          setSuccess(true);
        }}) 
    
        }})
        // Catch errors if any
        .catch((err)=>console.log(err));
       // console.log(repo)
 }}
 useEffect(()=>{
  if(success){
    window.location.replace('/profil')
  window.localStorage.setItem('login' ,true)
  window.localStorage.rol='moderateur';
  window.localStorage.email=email1;
  }
},[success,email1])
     return ( <> <Navbar/>
      <div className='client-form'>
      <h1 className='text-center'>S'inscrire</h1>
    <h2 className='text-center'>Bienvenue sur notre site cher Modérateur</h2>
      <> {
        success ?(<></>
        ):(
        <div className='container'>
         
            <form className='card shadow-sm border-0 px-3 rounded-2 mb-4 py-2 mx-auto mt-4 bg-light col-md-7' onSubmit={handleSubmit}>
            <div className="card-header bg-transparent border-0 text-center text-uppercase"></div>
            <div className="row">
            <div className="mb-0 form-group col-md-6">
                <label htmlFor="Nom" className="form-label">Nom  <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="Nom"  required
                name='nom' value={nom} onChange={(e)=>{setNom(e.target.value)}}/>
              <p className="alert1 alert-danger" role="alert">{validError.nom}</p>
            </div>
            <div className="mb-0 form-group col-md-6">
                <label htmlFor="Prenom" className="form-label">Prenom  <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="Prenom"  required
                 name='prenom' value={prenom} onChange={(e)=>{setPrenom(e.target.value)}}/>
                  <p className="alert1 alert-danger" role="alert">{validError.prenom}</p>
            </div></div>
            <div className="mb-2 form-group">
                <label htmlFor="exampleInputEmail1" className="form-label">Email  <span className="text-danger">*</span></label>
                <input type="email" className="form-control" id="exampleInputEmail1" required
                 name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

            </div>
            <div className="row">
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe  <span className="text-danger">*</span></label>
                <input type="password" className="form-control" id="exampleInputPassword1" required
                 name='pwd' value={pwd} onChange={(e)=>{setPwd(e.target.value)}}/>
                 <p className="alert1 alert-danger" role="alert">{validError.pwd}</p>
            </div>
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="exampleInputPassword2" className="form-label">Confirmer Mot de passe  <span className="text-danger">*</span></label>
                <input type="password" className="form-control" id="exampleInputPassword2" required
                 name='pwdc' value={pwdc} onChange={(e)=>{setPwdc(e.target.value)}}/>
                 <p className="alert1 alert-danger" role="alert">{validError.pwdc}</p>
            </div> </div>
            <div className='form-group '>  <span >Sexe <span className="text-danger">*</span></span><br />
            <div className='form-group col-6 d-grid gap-0  mx-auto'>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="inlineRadio1" required
                 name='sexe' value={sexe} onChange={()=>{setSexe('femme')}}/>
                <label className="form-check-label" htmlFor="inlineRadio1">Femme</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="inlineRadio2"  required
                 name='sexe' value={sexe} onChange={()=>{setSexe('homme')}}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Homme</label>
                </div></div>
                <div className="mb-2 form-group">
                <label htmlFor="Nomducentre" className="form-label">Nom du  centre  <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="Nom du centre" required
                 name='nomducentre' value={nomducentre} onChange={(e)=>{setNomducentre(e.target.value)}}/>
                </div>
            </div>
            <p className="alert1 alert-danger" role="alert">{repo}</p>
            <br/>
          <div className="d-grid gap-2 d-md-block">
            <button type="submit" className="btn btn-primary" name='valid'onClick={()=>{setSubmit('valid')}}>S'inscrire</button>
         
            </div>
            </form>
        </div> )}</>
        <Footer2/>
        </div></>
      );
   }

export default LoginModer;