import React,{useEffect,useState}from 'react';
import axios from 'axios';
import Side from '../compo/side/Side';
import Nav from '../compo/nav/Nav';
import { display } from '@mui/system';
import Swal from 'sweetalert2'
import emailjs from "emailjs-com";
import './ListA.css';
const ListAtt = () => {
    const [valider,setValider]=useState(0)
    const [annonce,setAnnonce]=useState([]);
    const [id_pub,setId_pub]=useState(window.sessionStorage.getItem('id_pub'));
    useEffect(()=>{
        setId_pub(window.sessionStorage.getItem('id_pub'));
        if(valider==1 || valider==0){
            document.getElementById('Motifs').style.cssText="display:none";
        }else{
            document.getElementById('Motifs').style.cssText="display:grid";
        }
          const fetcheInfo=async ()=>{
           
            const res =await axios.get(`http://localhost:80/my-pfe/my-scsc/back-end/db/afficher/annonce_d.php?id=${id_pub}`)
            setAnnonce(res.data);
          }
          fetcheInfo()
      },[annonce,id_pub])
    const styl={
        margin:'0px 20px '
    }
    const handValid=(e)=>{
        e.preventDefault();
        let formData=new FormData();
        formData.append('statut',valider);
        axios({
          url: `http://localhost:80/my-pfe/my-scsc/back-end/db/admin/valid.php?id=${id_pub}`,
          method: "POST",
          headers: {
            
            authorization: "your token comes here",
          },
          // Attaching the form data
          data: formData,
        }).then((res) =>{if(res.data==='good'){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Effectué avec succès',
            showConfirmButton: true,
            confirmButtonText: 'OK',
          }).then((result) => {
              if (result.isConfirmed) {
               if(valider==1){
                window.location.replace('/admin/annonce')
               }
          }}) 
         
        }else{
          console.log(res.data)
        }}).catch((err)=>(console.log(err)));
        }
    const sendMail=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_1zf5btk','template_mf01nml',e.target,'jOyGFA8Kn3VFKYcLS').then(rs=>{
            if(rs.text==='OK'){
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: '',
                showConfirmButton: true,
                confirmButtonText: 'OK',
              }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.replace('/admin/annonce')
              }})}})
            }
    
    return(<>
     <div className="single">
         <Side />
           <div className="singleContainer">
          <Nav />
     <div className="annonce_d container">
             
               <div className="card mb-5" style={{maxWidth: "800px"}}>
  <div className="">
    <div className="">
    { annonce.map( ann =>( <img src={`../../images/${ann.imag}`} alt="00"/>) )} 
    </div>
    <div className="">
      <div className="card-body">
      <table className='table table-borded text-black ' id="partie1">
                      <tbody>
                          {
                              annonce.map( (ann, key) =>(
                                <tr key={ann.id_pub} style={styl}>
                                      
                                   <tr> <th style={styl}>Titre</th><td style={styl}>{ann.titre}</td></tr>
                                   <tr> <th>Num de tele:</th><td>{ann.num_tele}</td></tr>
                                   <tr><th>Categorie: </th> <td>{ann.categorie}</td></tr> 
                                   <tr><th>localisation:</th><td>{ann.local}</td></tr>
                                   <tr><th>Date de début:</th><td>{ann.date_debut}</td></tr>
                                   <tr> <th>Date de fin:</th><td>{ann.date_fin}</td></tr>
                                   <tr> <th>Tarif</th><td>{ann.tarif}</td></tr>
                                   <tr> <th>Capacité</th><td>{ann.capacite}</td></tr>
                                   <tr> <th>Réserver</th><td>{ann.reserver==1 ?'Oui':'No'}</td></tr>
                                   <tr style={ann.reserver==0 ? {display:'none'}:{display:""}}> <th>Réservation pour</th><td>{ann.reserver_method==1 ?'une jour':'une période'}</td></tr>
                                   </tr>))} 
                                   </tbody></table>                             
                      </div>
      

                        </div>

                    </div>
                    </div> 
                    <div className="card " style={{maxWidth: "800px",marginTop:'-4%'}}>
                <div className="card-header " id="partie3">
                <th>description</th>
                </div>
                <div className="card-body">
                {
                              annonce.map( ann =>(
                <tr key={ann.id}>
                                <p className='desc'>{ann.description}</p>
                                </tr>))
                                }
                </div>   
              </div> 
              <form className="card " style={{maxWidth: "800px"}}>
                <h3 className='text-center'>validation</h3>
                <div style={{padding:'20px'}}>
              <div className="form-check ">
                <input className="form-check-input" type="radio" name="flexRadioDefault"
                onChange={(e)=>{setValider(1)}} id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    Accepter
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" 
                onChange={(e)=>{setValider(2)}}id="flexRadioDefault2" />
                <label className="form-check-label" for="flexRadioDefault2">
                  Refuser
                </label>
                </div>
                <div style={{marginLeft:'90%'}}>
                <button type="submit" className="btn btn-info" onClick={handValid}>Envoyer</button>
                </div>
                </div>
                </form>
                <form className="card " style={{maxWidth: "700px"}} id='Motifs' onSubmit={sendMail}>
                    {annonce.map(ann =>(
                    <div style={{padding:'20px'}}>
                       <h5 className='text-center'>Motifs de refus </h5>
                       <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" name='message'></textarea>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-warning">Envoyer</button>
                        </div>
                   
                    <div className="mb-3 ss">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={ann.email}/>
                    </div>
                    <div className="mb-3 ss">
                    <label for="exampleFormControlInput2" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="exampleFormControlInput2" name='name' value={ann.nom +" "+ ann.prenom}/>
                    </div>
                    <div className="mb-3 ss">
                    <label for="exampleFormControlInput3" className="form-label">Titre</label>
                    <input type="text" className="form-control" id="exampleFormControlInput3" name='titre' value={ann.titre}/>
                    </div>
                   
                    </div>
                    ))}
                </form>
              </div>
    
            </div>
            
            </div>
           
        
            </>
    )
}

export default ListAtt;
