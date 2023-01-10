import React from "react";
import "./footer2.css";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2'


 function Footer2(){
   
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
    <div className="main-footer f2 ">
      <div className="container">
        <div className="">
        <div className="row">
           {/* Column1 */}
           <div className="col-6" id="nous">
            <h6>A Propos de Nous</h6>
           <p>Concrètement ,sur notre site ,nous vous proposerons un suivi des services  des centres socio-culturels .
           Les nombreuses catégories présentes sur le site permettent de trouver rapidement l’information désirée .
           L’ergonomie du site très bien pensée permet une navigation fluide et agréable sur toutes les pages du site .
                    </p>
          </div>
         
          {/* Column3*/}
          <div className="col-6 ">
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
        <div className="row">
           {/* Column2 */}
           <div className="">
           
           <ul className="s-nous">
           <h6>Suivez-Nous</h6>
              <li><a href="#"><i className="fab fa-facebook"></i>Facebook</a></li>
              <li><a href="#"><i className="fab fa-instagram"></i>Instagram</a></li>
              <li><a href="#"><i className="fab fa-twitter"></i>Twitter</a></li>
              <li><a href="#"><i className="fab fa-youtube"></i>youtube</a></li>
              </ul>
           
          </div>
          <hr />
          <div className="">
          <p className="col-sm text-center">
            &copy;{new Date().getFullYear()}  Conditions d'utilisation  | Tous les droits sont réservés
       
          </p>
          </div>
        </div>
        </div>
       
      
    </div>
    </div>
 
    </footer>

 

    
  );
}

export default Footer2;