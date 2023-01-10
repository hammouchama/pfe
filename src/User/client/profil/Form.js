import './form.css'
import {useEffect,useState,useCallback} from 'react';
import { ValidationDataMo } from '../../moderateur/ValidationDataMo';
import axios from 'axios';
import {getItem} from '../../../component/LocalStor';
import Swal from 'sweetalert2'

function Form({data}){
        const [errMsg,setErrMsg]=useState(false);
        const [nom ,setNom]=useState()
        const [prenom ,setPrenom]=useState()
        const [email ,setEmail]=useState()
        const [password ,setPassword]=useState()
        const [pwd ,setPwd]=useState()
        const [pwdc ,setPwdc]=useState()
        const [sexe,setSexe]=useState()
        const [address,setAddress]=useState()
        const [fonc,setFonc]=useState()
        const [condition,setCondition]=useState(true)
        const[success,setSuccess]=useState(false);
        const [repo,setRepo]=useState('');
        const [age,setAge]=useState('2020-10-12');
      useEffect(() => {
        if(condition){
                insr()
            }
          const x=document.querySelectorAll("input[type='radio']");
           x.forEach(e => {
                   if(e.name==='sexe'){
                           if(e.value===data[0].sexe){
                                   e.checked=true;
                                   setSexe(data[0].sexe)
                           }else{
                                e.checked=false;
                           }
                   }else{
                        if(e.value===data[0].statut){
                                e.checked=true;
                                setFonc(data[0].statut)
                        }else{
                                e.checked=false;
                           }
                   }
           });
           
      }, [condition]);
     
    const insr=useCallback(()=>{
        data.map(e=>{
            setNom(e.nom)
            setPrenom(e.prenom)
            setEmail(e.email)
            setPassword(e.mot_passe)
            setSexe(e.sexe)
            setAddress(e.adresse)
            setFonc(e.statut)
        })
        setCondition(false)
       
    })
    const hnadChange=(e)=>{
        e.preventDefault();
        if(e.target.name=='nom'){
            setNom(e.target.value)
        }if(e.target.name=='prenom'){
            setPrenom(e.target.value)
        }if(e.target.name=='sexe'){
            setSexe(e.target.value)
        }if(e.target.name=='email'){
            setEmail(e.target.value)
        }if(e.target.name=='password'){
            setPassword(e.target.value)
        }if(e.target.name=='npwd'){
            setPwd(e.target.value)
        }if(e.target.name=='c_npwd'){
            setPwdc(e.target.value)
        }if(e.target.name=='address'){
                setAddress(e.target.value)
        }if(e.target.name=='statut'){
                setFonc(e.target.value)
        }
    }
    const  handleSubmit= async (e)=>{
        e.preventDefault();
        setErrMsg(ValidationDataMo({nom,prenom,pwd,pwdc}))
       if(errMsg.v===0){
       let formData=new FormData();
       formData.append('nom',nom);
       formData.append('prenom',prenom);
       formData.append('email',email);
       formData.append('pwd',password);
       formData.append('npwd',pwd);
       formData.append('sexe',sexe);
       formData.append('address',address);
       formData.append('fonc',fonc);
       axios({
         // Endpoint to send files
         url: `http://localhost:80/my-pfe/my-scsc/back-end/db/modifier/client.php?email=${getItem('email')}`,
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
          Swal.fire({
           position: 'center',
           icon: 'success',
           title: 'Modifier avec sucècs',
           showConfirmButton: true,
           confirmButtonText: 'OK',
         }).then((result) => {
             if (result.isConfirmed) {
           setSuccess(true);
         }}) 
     
         }})
         .catch((err)=>console.log(err));
  }}
  useEffect(()=>{
    if(success){
        window.location.replace('/profil')
    window.localStorage.email=email;
    }
},[success,repo,email])
   
    return(<>
    <div className="form-1">
      
                
        <form className='mdif' onChange={hnadChange} onSubmit={handleSubmit}>
        <p className="alert1 alert-danger" role="alert">{repo}</p>
        {data.map((res)=>(<>
            <div className="group">      
                    <input type="text" required defaultValue={nom}  name="nom"/>
                    <span className="highlight"></span>
                    <p className="alert1 alert-danger" role="alert">{errMsg.nom}</p>
                    <span className="bar"></span>
                    <label>Nom</label>
              </div>
            <div className="group">      
                    <input type="text" required defaultValue={prenom}  name="prenom"/>
                    <span className="highlight"></span>
                    <p className="alert1 alert-danger" role="alert">{errMsg.prenom}</p>
                    <span className="bar"></span>
                    <label>Prénom</label>
            </div>
            <div className="group">      
                <input type="email" required defaultValue={email}  name="email"/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Email</label>
            </div>
            <div className="group">      
                    <input type="password" required name="password"/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Mot de passe</label>
            </div>
            <div className="group">      
                    <input type="password" required name="npwd"/>
                    <span className="highlight"></span>
                    <p className="alert1 alert-danger" role="alert">{errMsg.pwd}</p>
                    <span className="bar"></span>
                    <label>Nouveau mot de passe</label>
            </div>
            <div className="group">      
                    <input type="password" required name="c_npwd"/>
                    <span className="highlight"></span>
                    <p className="alert1 alert-danger" role="alert">{errMsg.pwdc}</p>
                    <span className="bar"></span>
                    <label>Confirmer Mot de passe</label>
            </div>
            <div className="group">      
                    <input type="text" required defaultValue={address} name="address" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Addresse</label>
            </div>
            <div className='form-group group'><label>Sexe</label><br />
            <div className="form-check form-check-inline px-5">
                    <input className="form-check-input" type="radio" 
                     name="sexe" id="inlineRadio1" value="homme"/>
                    <span  className="form-check-label" htmlFor="inlineRadio1">H</span>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sexe" id="inlineRadio2" value="femme"/>
                    <span className="form-check-label" htmlFor="inlineRadio2">F</span>
             </div>
            </div>
            <div className='form-group group'><label>Statut</label><br />
            <div className="col-6 d-grid gap-0">
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="exampleRadios1"  required
                 name='statut' value="etudiant"/>
                <span className="form-check-label" htmlFor="exampleRadios1">
                    Etudiant
                </span>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="exampleRadios2" required value="fonctionnaire"
                name='statut'/>
                <span className="form-check-label" htmlFor="exampleRadios2">
                   Fonctionnaire 
                </span>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="exampleRadios3" required
                name='statut'  value="autre"/>
                <span className="form-check-label" htmlFor="exampleRadios3">Autre</span>
                </div>
                
                </div>
                <br/>
                </div>
                </>))}
                <button type="submit">Modifier</button>
       </form>
       
       </div>  
       </>   
    )
}
export default Form;
