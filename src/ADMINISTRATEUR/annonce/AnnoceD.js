import React,{useEffect,useState}from 'react';
import axios from 'axios';
import Side from '../compo/side/Side';
import Nav from '../compo/nav/Nav';
import Comment from '../../Annonces/annonce_De/Comment';
const AnnoceD = () => {
    const [annonce,setAnnonce]=useState([]);
    const [id_pub,setId_pub]=useState(window.sessionStorage.getItem('id_pub'));
    useEffect(()=>{
        setId_pub(window.sessionStorage.getItem('id_pub'));
          const fetcheInfo=async ()=>{
           
            const res =await axios.get(`http://localhost:80/my-pfe/my-scsc/back-end/db/afficher/annonce_d.php?id=${id_pub}`)
            setAnnonce(res.data);
          }
          fetcheInfo()
      },[annonce,id_pub])
    
    return(<>
     <div className="single">
         <Side />
           <div className="singleContainer">
          <Nav />
     <div className="annonce_d container">
              <div className=''>
            <div className="row">
                <div className="col-sm-15 text-success">
                  
               <div >
               <div className="card mb-5" style={{maxWidth: "900px"}}>
  <div className="row ">
    <div className="col-md-6">
    { annonce.map( ann =>( <img src={`../../images/${ann.imag}`} alt="00"/>) )} 
    </div>
    <div className="col-md-5">
      <div className="card-body">
      <table className='table table-borded text-black ' id="partie1">
                      <tbody>
                          {
                              annonce.map( (ann, key) =>(
                                <tr key={ann.id_pub}>
                                      
                                   <tr> <th>Titre:</th><td>{ann.titre}</td></tr>
                                   <tr> <th>N° Télé :</th><td>{ann.num_tele}</td></tr>
                                    
                                   <tr><th>Catégorie: </th> <td>{ann.categorie}</td></tr> 
                                   <tr><th>localisation:</th><td>{ann.local}</td></tr>
                                   <tr><th>Date de début:</th><td>{ann.date_debut}</td></tr>
                                   <tr> <th>Date de fin:</th><td>{ann.date_fin}</td></tr>
                                   <tr> <th>Tarif</th><td>{ann.tarif}</td></tr>
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
                              annonce.map( ann =>(
                <tr key={ann.id}>
                                <p className='desc'>{ann.description}</p>
                                </tr>))
                                }
                </div>   
              </div>
                    </div>
                    </div>  
                </div>
            </div>
            <Comment/>
             
            </div>
           
           </div>
           </div>
            </>
    )
}

export default AnnoceD;
