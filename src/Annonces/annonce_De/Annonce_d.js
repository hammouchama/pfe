import  React,{useEffect,useState,useCallback, useMemo} from 'react';
import axios from "axios";
import "./annonce_d.css";
import Footer2 from '../../Footer/F2/Footer2';
import { Link } from "react-router-dom";
import {getItem} from '../../component/LocalStor';
import Add_Com from './Add_Com'
import {Reservation1,Reservation2} from './Reservation';
import Navbar from '../../Navbar/Navbar';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { pink } from '@mui/material/colors';
function Annonce_d(){
  const [timer,setTimer]=useState(true)
    const [annonce,setAnnonce]=useState([]);
    const [id_pub,setId_pub]=useState(window.sessionStorage.getItem('id_pub'));
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
    const [date_debut,setDate_debut]=useState('')
    
    useEffect(()=>{
      setId_pub(window.sessionStorage.getItem('id_pub'));
        const fetcheInfo=async ()=>{
         
          const res =await axios.get(`http://localhost:80/my-pfe/my-scsc/back-end/db/afficher/annonce_d.php?id=${id_pub}`)
          setAnnonce(res.data);
        }
        fetcheInfo()
       
       
    },[annonce,id_pub])
     const startTimer =() => {
      let interval;
      const countDownDate = new Date(date_debut).getTime();
  
      interval = setInterval(() => {
        const now = new Date().getTime();
  
        const distance = countDownDate - now;
  
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);
  
        if (distance < 0) {
          setTimer(false)
  
          clearInterval(interval.current);
        } else {
          // Update Timer
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      },100);
    }

    return(<><Navbar/>
     <div className="annonce_d container">
              <div className=''>
            <div className="row">
                <div className="col-sm-15 text-success">
                  
               <div >
               <div className="card mb-5" style={{maxWidth: "1000px"}}>
  <div className="row g-0">
    <div className="col-md-5">
    { annonce.map((ann ,key)=>( <img key={key+1} src={`../images/${ann.imag}`} alt="00"/>) )} 
    </div>
    <div className="col-md-5">
      <div className="card-body">
      <table className='table table-borded text-black ' id="partie1">
                      <tbody>
                          {
                              annonce.map( (ann, key) =>(
                                     
                                <tr key={key+1}>
                                      
                                   <tr> <th>Titre:</th><td>{ann.titre}</td></tr>
                                   <tr> <th>Num de tele:</th><td>{ann.num_tele}</td></tr>  
                                   <tr><th>Catégorie: </th> <td>{ann.categorie}</td></tr> 
                                   <tr><th>localisation:</th><td>{ann.local}</td></tr>
                                   <tr><th>Date de début:</th><td>{ann.date_debut}</td></tr>
                                   <tr> <th>Date de fin:</th><td>{ann.date_fin}</td></tr>
                                   <tr> <th>Tarif</th><td>{ann.tarif==0.00?'gratuite':ann.tarif +' DH'}</td></tr>
                                   </tr>))} 
                                   </tbody></table>
                                   
      </div>
      
    </div>
    
  </div>
  
</div>
<div className="card " style={{maxWidth: "1000px"}}>
              <div className="card-header " id="partie3">
                
                <th>description</th>
                </div>
                <div className="card-body">
                {
                              annonce.map((ann ,index)=>(
                                
                <tr key={index +1}>
                                <p className='desc'>{ann.description}</p>
                                </tr>))
                                }
                </div>
                     <div className="card-footer text-muted">
                     <> {annonce.map( ann =>( 
                      <p style={ann.reserver==0 ?{display:"flex"}:{display:"none"}}>
                      <PriorityHighIcon sx={{ color: pink[500] }}/>Vous pouvez effectuer votre réservation par téléphone ou sur place </p>))}
                     {getItem('login')?(
                        
                          annonce.map( ann =>(<>
              <Link exact to="#" ><button className='button' style={ann.reserver ==0 || localStorage.getItem('rol')!=='client' || !timer?{display:"none"}:{display:"grid"}}
              data-bs-toggle="modal" data-bs-target="#exampleModal">Réserver</button></Link>
              <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Réservation</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                          style={{backgroundColor:'rgb(255,255,255)'}}></button>
                        </div>
                        <div className="modal-body">
                         <p style={{fontSize:'18px'}}><PriorityHighIcon sx={{ color: pink[500] }}/> Merci de réserver avant <span style={{color:'red'}}>{date_debut}</span></p>
                          {ann.reserver_method==1 ? <Reservation1 annonce={annonce}/>:<Reservation2 annonce={annonce}/>}
                        
                        </div>
                       
                      </div>
                    </div>
              </div>
              </>
              ))):( annonce.map(ann=>(
              <Link exact to="/connexion" style={ann.reserver ==0 || localStorage.getItem('rol')!=='client' || !timer?{display:"none"}:{display:"grid"}}><button className='button'>Réserver</button></Link>
              ))
              )}</>
                  </div>
              </div>
              
                    </div>
                    </div>  
                </div>
            </div>
            
              <Add_Com/>
             
            </div>
            <Footer2/>
           
            </>
    )
}
export default Annonce_d;
/*
 <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Reservation</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <Reservation2 annonce={annonce}/>
                        </div>
                       
                      </div>
                    </div>
              </div>*/