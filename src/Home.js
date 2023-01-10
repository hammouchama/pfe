import Carousel from 'react-bootstrap/Carousel';
import { useReducer,useEffect } from 'react';
//import { Link } from 'react-router-dom';
//import Pub_annonce from './Annonces/Pub_annonce'
import Footer1 from './Footer/F1/Footer1';
import Aficher from './User/Aficher';
import './Home.css';
import Navbar from './Navbar/Navbar';
//import { Navbar } from 'react-bootstrap';
function Home() {
/*    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);*/
    useEffect(()=>{
    },[]);
    return (  <><Navbar/>
    <div className="scrol container">
    <Carousel fade>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src="../images/stem-list-EVgsAbL51Rk-unsplash.jpg"
       alt="First slide"
     />
     <Carousel.Caption>
       
       <p>C’est ce que nous pensons déjà connaître qui nous empêche souvent d’apprendre.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src="./images/150630-050608-activites-sportives-gratuites-pour-les-enfants.png"
       alt="Second slide"
     />
 
     <Carousel.Caption>
      
       <p>Nous avons une raison de vivre : apprendre, découvrir, être libre.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src="./images/SIEL-20221.jpg"
       alt="Third slide"
     />
 
     <Carousel.Caption>
     
       <p>Sans culture, l’esprit s’use et perd son ressort : une vie imbécile est semblable à la mort.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src="./images/senior-startup-businesswoman-holding-presentatin-in-conference-room-briefing-graph-information.jpg"
       alt="Foreth slide"
     />
 
     <Carousel.Caption>
       <p>La formation révèle l’aptitude et le terrain révèle la compétence.</p>
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>
    <br />
   <div className="container">
     <h5 id="nous" className='text-center'>A propos de nous</h5>
     <p style={{fontSize: "20px",textDecoration:'solid'}}>Si vous êtes arrivée là ,c’est sans doute que vous voulez savoir ce qu’on fait ,ou peut être découvrir qui on est  .
     Concrètement ,nous vous proposerons un suivi des services  des centres socio-culturels .
  Les nombreuses catégories présentes sur le site permettent de trouver rapidement l’information désirée .
  L’ergonomie du site très bien pensée permet une navigation fluide et agréable sur toutes les pages du site .</p>
   </div>
   </div>
   <hr/>
    <Aficher/>
   
     <Footer1/>
     </>
    

    );
}

export default Home;