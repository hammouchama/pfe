import React from "react";
import "./footer1.css";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2'
 function Footer1(){
  const Contactez =(e)=>{
    e.preventDefault()
                emailjs.sendForm('service_1zf5btk','template_mf01nml',e.target,'jOyGFA8Kn3VFKYcLS').then(rs=>{
                      if(rs.text==='OK'){
                          Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: 'Votre message a été envoyé',
                          showConfirmButton: true,
                          confirmButtonText: 'OK',
                        }).then((result) => {
                            if (result.isConfirmed) {            
                        }})
                      }}).catch(err=>console.log(err))
    
   }
  return (
    <footer>
    <div className="main-footer f1">
 
        <div className="row">
          {/* Column1 */}
          <div className="col-6">
            
            <h6>Suivez-Nous</h6>
            <ul className="s-nous row">
              <li className="col"><a href="#"><i className="fab fa-facebook"></i>Facebook</a></li>
              <li  className="col"><a href="#"><i className="fab fa-instagram"></i>Instagram</a></li>
              <li  className="col"><a href="#"><i className="fab fa-twitter"></i>Twitter</a></li>
              <li  className="col"><a href="#"><i className="fab fa-youtube"></i>youtube</a></li>
              </ul>
           
          </div>
         
          {/* Column2*/}
          <div className="col-6">
            <h6>Contactez-Nous</h6>
            <form onSubmit={Contactez}>
            <div className='input-group'>
                <input type ="email" name="email" className="text-input contact-input " placeholder="Votre email..."></input>
                </div>
                <div className='input-group'>
                <textarea name="message" className="text-input contact-input " placeholder='Votre message...'></textarea>
                </div>
                  <button type="submit" className="btn1">
                <i className="fas fa-envelope"></i>Envoyer</button>
              </form>
          </div>
          </div>
          <hr />
        <div className="row end-f">
          <p className="col-sm  text-center">
            &copy;{new Date().getFullYear()}  Conditions d'utilisation  | Tous les droits sont réservés
       
          </p>
        </div>
        
        
      
    </div>
 
    </footer>

 

    
  );
}

export default Footer1;