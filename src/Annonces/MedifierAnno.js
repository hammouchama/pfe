import React,{useEffect,useState} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Swal from 'sweetalert2'
import Navbar from '../Navbar/Navbar'
function MedifierAnno({id}){
    const[inse,setinse]=useState(true);
    const[submit,setSubmit]=useState(false);
    const [categorie,setCategorie]=useState('');
    const [titre,setTitre]=useState('');
    const [description,setDescription]=useState('');
    const [tarif,setTarif]=useState('');
    const [numdetelephone,setNumdetelephone]=useState('');
    const [datededebut,setDatededebut]=useState('');
    const [datedefin,setDatedefin]=useState('');
    const [localisation,setLocalisation]=useState('');
    const [capacite,setCapacite]=useState('');
    const [errMsg,setErrMsg]=useState('');
    const [repo,setRepo]=useState("");
    const[succes,setSucces]=useState(false);
    const [img,setImg]=useState('');
    const [annonce,setAnnonce]=useState([]);
    const [id_pub,setId_pub]=useState(window.sessionStorage.getItem('id_pub'));
    useEffect(()=>{
      setId_pub(window.sessionStorage.getItem('id_pub'));
        const fetcheInfo=async ()=>{
         
          const res =await axios.get(`http://localhost:80/my-pfe/my-scsc/back-end/db/afficher/annonce_d.php?id=${id_pub}`)
          setAnnonce(res.data);
        }
        fetcheInfo()
        if(inse){
          ins()
        }
    },[annonce,id_pub])
    useEffect(()=>{
     
      setErrMsg('');
    },
    [categorie,titre,description,tarif,numdetelephone,datededebut,datedefin,localisation,capacite,img])
   const  handleSubmit= async (e)=>{
       e.preventDefault();
      // console.log(URL.createObjectURL(img.name))
       console.log(categorie,titre,description,tarif,numdetelephone,datededebut,datedefin,localisation,capacite,img);
      let formData=new FormData();
    
      formData.append('capacite',capacite);
      formData.append('localisation',localisation);
      formData.append('datedefin',datedefin);
      formData.append('datededebut',datededebut);
      formData.append('numdetelephone',numdetelephone);
      formData.append('tarif',tarif);
      formData.append('description',description);
      formData.append('titre',titre);
      formData.append('categorie',categorie);
      formData.append('valid',submit);
      formData.append('img',img);
      axios({
        // Endpoint to send files
        url: `http://localhost:80/my-pfe/my-scsc/back-end/db/annonce/modifier.php?id=${id_pub}`,
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
          title: 'Effectué avec succès',
          showConfirmButton: true,
          confirmButtonText: 'OK',
        }).then((result) => {
            if (result.isConfirmed) {
              setSucces(true);
        }}) 
         
        }})
        // Catch errors if any
        .catch((err)=>setErrMsg(err));
       // console.log(repo)
 }
 const ins=()=>{
   annonce.map(r=>{
     setImg(r.imag)
     setCapacite(r.capacite)
     setCategorie(r.categorie)
     setTarif(r.tarif)
     setTitre(r.titre)
     setDescription(r.description)
     setLocalisation(r.local)
     setDatededebut(r.date_debut)
     setDatedefin(r.date_fin)
     setNumdetelephone(r.num_tele)
     setinse(false)
 })
 }
       return ( <>
       <Navbar/>
       {succes ?(
         <>
         {window.location.replace('/profil')}
         </>
        ):(
        <div className='container'>
             <h3>{repo}</h3>{errMsg}
             <>
             </>
            <form className='card shadow-sm border-0 px-3 rounded-2 mb-4 py-2 mx-auto mt-4 bg-light col-md-7' onSubmit={handleSubmit}>
            <div className="input-group mb-3">
            <img src={`./images/${img.name}`} alt=""/>
                    <input type="file" className="form-control" id="inputGroupFile02"
                     name="img" 
                     onChange={(e)=>{setImg(e.target.files[0])}}/>
                    <label className="input-group-text" htmlFor="inputGroupFile02">Logo</label>
                </div>
            <div className="row">
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="Titre" className="form-label">Titre d'Annonce <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="Titre"  required
                 name='titre' value={titre} onChange={(e)=>{setTitre(e.target.value)}}/>
            </div>
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="Categorie" className="form-label">Categorie <span className="text-danger">*</span></label>
                <select className="form-select form-select-lg mb-2"
                name='categorie' onChange={(e)=>{setCategorie(e.target.value)}}
                aria-label=".form-select-lg example" id='Categorie'>
                <option value="">Categorie</option>
                <option value="Conférence">Conférence</option>
                <option value="Sport">Sport</option>
                <option value="Activité artistique">Activité artistique</option>
                <option value="Activité culturelle">Activité culturelle</option>
                <option value="Activité educative">Activité Educative</option>
                <option value="Autres">Autres</option>
                
                  </select>
            </div>
            </div>
            <div className="row">
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="tarif" className="form-label">Tarif <span className="text-danger">*</span></label>
                <input type="number" className="form-control" id="tarif" required
                 name='tarif' value={tarif} onChange={(e)=>{setTarif(e.target.value)}}/>
            </div> 
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="telephone" className="form-label">Num de Telephone <span className="text-danger">*</span></label>
                <input type="tel" className="form-control" id="Telephone"  required
                 name='numdetelephone' value={numdetelephone}  onChange={(e)=>{setNumdetelephone(e.target.value)}}/>
            </div></div>
            <div className="row">
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="date de debut" className="form-label">Date de debut <span className="text-danger">*</span></label>
                <input type="date" className="form-control" id="Date de debut"  required
                 name='datededebut' value={datededebut} onChange={(e)=>{setDatededebut(e.target.value)}}/>
            </div>
            <div className="mb-2 form-group col-md-6">
                <label htmlFor="date de fin" className="form-label">Date de fin <span className="text-danger">*</span></label>
                <input type="date" className="form-control" id="Date de fin"  required
                 name='datedefin' value={datedefin} onChange={(e)=>{setDatedefin(e.target.value)}}/>
            </div></div>
            <div className="row">
                <div className="mb-2 form-group col-md-6">
                <label htmlFor="Localisation" className="form-label">localisation <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="Localisation" required
                 name='localisation' value={localisation} onChange={(e)=>{setLocalisation(e.target.value)}}/>
                </div>
                 
                <div className="mb-2 form-group col-md-6">
                <label htmlFor="Capacite" className="form-label">Capacite <span className="text-danger">*</span></label>
                <input type="number" className="form-control" id="Capacite" required
                 name='capacite' value={capacite} onChange={(e)=>{setCapacite(e.target.value)}}/>
                </div></div>
                <div className="mb-2 form-group">
                <label htmlFor="Description" className="form-label">Description <span className="text-danger">*</span></label>
                <textarea type="text" className="form-control" id="Description"  required
                 name='description' value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            </div>
            <button type="submit" className="btn btn-info col-md-2" name='valid'onClick={()=>{setSubmit('valid')}}>Modifier</button>
            </form>

        </div>)}</>
        
      );
   }

export default MedifierAnno;
