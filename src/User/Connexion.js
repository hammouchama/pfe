import './connexion.css';
import axios from 'axios'
import { Link,NavLink} from 'react-router-dom';
import React, {useEffect,useState,useReducer} from 'react';
import OblieMotPass from './OblieMotPass';
function Connexion(){
 // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [email,setEmail]=useState('');
  const [pwd,setPwd]=useState('');
  const[success,setSuccess]=useState(false);
  const[submit,setSubmit]=useState(false);
  const [errMsg,setErrMsg]=useState('');
  const [repo,setRepo]=useState("");
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [email1,setEmail1]=useState('');
  useEffect(()=>{ 
    setErrMsg('');
  },
  [email,pwd])
 const  handleSubmit= async (e)=>{
     e.preventDefault();
    let formData=new FormData();
    formData.append('email',email);
    formData.append('pwd',pwd);
    formData.append('valid',submit);
    axios({
      // Endpoint to send files
      url: "http://localhost:80/my-pfe/my-scsc/back-end/db/authenticated.php",
      method: "POST",
      headers: {
        // Add any auth token here
        authorization: "your token comes here",
      },
      // Attaching the form data
      data: formData,
    })
      // Handle the response from backend here
      .then((res) => {if((res.data!=='moderateur')&&(res.data!=='client')&&(res.data!=='admin')){setRepo(res.data)}else{
      setRepo(res.data)
      setEmail1(email)
       setPwd('');
       setEmail('');
       setSuccess(true);
       forceUpdate();
      }})
      // Catch errors if any
      .catch((err)=>setErrMsg(err));
     // console.log(repo)
}

useEffect(()=>{
    if(success){
    window.location.replace('/')
    window.localStorage.setItem('login' ,true)
    window.localStorage.rol=repo;
    window.localStorage.email=email1;
    }
},[success,repo,email1])
const cliik=()=>{
  document.getElementById('close').click();
}
  return(
    <>{
      success ?(<div>
          
      </div>
      ):(
      <div className='coo-1'>
            <div className="card-header bg-transparent border-0 text-center text-uppercase">
           {errMsg}</div>
           <form className='ff' onSubmit={handleSubmit}>
           <img src="./images/logos/lo.webp" alt="locked" className='loocked'/>
         <label htmlFor="username">Email</label>
        <input type="email" className="form-control"  id="username" onChange={(e)=>{setEmail(e.target.value)}}/>
        <label htmlFor="password">Mot de passe</label>
        <input type="password"  id="password"  onChange={(e)=>{setPwd(e.target.value)}}/>
        
        <Link to="#" exact><p data-bs-toggle="modal" data-bs-target="#exampleModal2">J'ai oublié le mot de passe</p></Link>
       
        <button onClick={()=>{setSubmit('valid')}}> connexion</button>
        <Link to="#" exact><p  data-bs-toggle="modal" data-bs-target="#staticBackdrop">je n'ai pas de compte ,je m'inscris</p></Link>
        <p className="alert1 alert-danger" role="alert">{repo}</p>
</form>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">je m'inscris comme</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id='close'></button>
            </div>
            <div className="modal-body">
            <ul className='alrt-aniscr'>
              <li><button onClick={cliik}><NavLink exact to="/inscription/moderateur">Modérateur</NavLink></button></li>
              <li><button onClick={cliik}><NavLink exact to="/inscription/client">Client</NavLink></button></li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   
     )}
      <OblieMotPass/></>)
}
export default Connexion;