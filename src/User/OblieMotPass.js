import { useState ,useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import emailjs from "emailjs-com";
function OblieMotPass() {
  const [email,setEmail]=useState('');
  const [nom,setNom]=useState('');
  const [prenom,setPrenom]=useState('');
  const [pass,setPass]=useState('');
  const[success,setSuccess]=useState(false);
  const [repo,setRepo]=useState("");
  useEffect(() => {
   
  }, [pass,email,nom,prenom]);
  const submit =(e)=>{
    e.preventDefault();

    //console.log(e.target)
    let formData=new FormData();
    formData.append('email',email);
    formData.append('nom',nom);
    formData.append('prenom',prenom);
    axios({
      url: "http://localhost:80/my-pfe/my-scsc/back-end/db/pssword/oblie.php",
      method: "POST",
      headers: { authorization: "your token comes here",
      },
      data: formData,
    }).then((res) => {if(res.data.includes('/scscgood')){
       if(res.data.split("/scscgood")[0]!==''){
      setPass(res.data.split("/scscgood")[0])
                emailjs.sendForm('service_1zf5btk','template_spt9nuw',e.target,'jOyGFA8Kn3VFKYcLS').then(rs=>{
                      if(rs.text==='OK'){
                          Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: 'Votre mot de passe vous a été envoyé , merci de vérifier votre email',
                          showConfirmButton: true,
                          confirmButtonText: 'OK',
                        }).then((result) => {
                            if (result.isConfirmed) {
                            setSuccess(true);
                            setEmail('');
                            setNom('')
                            setPrenom('')
                            {document.getElementById("close").click()}
                          
                        }})
                      }}).catch(err=>console.log(err))
    }
  }
    else{
      setRepo(res.data)
  }}).catch((err)=>console.log(err));

   
  }
  return (
      <div className='oblie'>
      <div className="modal" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" id='close'
        data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="alert1 alert-danger" role="alert">{repo}</p>
        <form onSubmit={submit}>
            <label htmlFor="#email">Email</label>
            <input type="email" className="form-control" id='email' name='email' value={email}
            onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor="#nom">Nom</label>
            <input type="text" className="form-control" id='nom' name='nom' value={nom}
            onChange={(e)=>{setNom(e.target.value)}}/>
            <label htmlFor="#prenom">Prenom</label>
            <input type="text" className="form-control" id='prenom' name='prenom' value={prenom}
            onChange={(e)=>{setPrenom(e.target.value)}}/>
            <input type="text" name='pass' style={{display: 'none'}} value={pass}/>
             <div className="modal-footer">
        <button type="submit" class="btn btn-primary">Envoyer</button>
      </div>
        </form>
      </div>
     
    </div>
  </div>
</div>
      </div>
  )
}

export default OblieMotPass;