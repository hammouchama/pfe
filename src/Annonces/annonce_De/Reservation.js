import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import Swal from 'sweetalert2'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { pink } from '@mui/material/colors';
function validphon(values){
    let errors={}
    if(values.length !==10){
        errors.phon='le numéro de téléphone est incorrect';
        errors.v=1;
    }else{
        if((/\D/ig.test(values))){
            errors.phon='le numéro de téléphone est incorrect';
            errors.v=1;
        }else{
            if(!(/^(06|07|05)/ig.test(values))){
                errors.phon='le numéro de téléphone est incorrect';
                errors.v=1;
            }else{
                errors.v=0;
            }
    }
    }

  return errors;
}
export function Reservation1({annonce}) {
  const [dvalue, setDvalue] = useState(0);
  const [phon, setPhon] = useState(0);
  const [error, setError] = useState(0);
  const [repo, setRepo] = useState('');
  const [n_place, setN_place] = useState(1);
  const handSubmit =async (e)=>{
    e.preventDefault();
    setError(validphon(phon))
      let formData=new FormData();
      formData.append('phon',phon);
      formData.append('place',n_place);
      formData.append('date',dvalue);
      if(error !==0 && error.v===0){
      axios({url: `http://localhost:80/my-pfe/my-scsc/back-end/db/reservation/reserver.php?id=${window.sessionStorage.getItem('id_pub')}&email=${window.localStorage.getItem('email')}`,
        method: "POST",
        headers: {
          authorization: "your token comes here",
        },
        data: formData,
      }).then((res) =>{if(res.data==='good'){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Efféctue avec succès',
          showConfirmButton: true,
          confirmButtonText: 'OK',
        }).then((result) => {
            if (result.isConfirmed) {
              {document.getElementById('close').click()}
        }}) 
       
      }else{
      setRepo(res.data)
      }})
       // Catch errors if any
       .catch((err)=>(console.log(err)));
      }
  }

  return (
    <form>
      <p className="alert1 alert-danger" role="alert">{repo}</p>
    <div>
        {annonce.map((rs)=>(<>
             <div className="mb-2 form-group">
             <label htmlFor="date de debut" className="form-label">Jour de réservation <span className="text-danger">*</span></label>
             <input type="date" className="form-control" id="Date de debut"  required onChange={(e)=>{setDvalue(e.target.value)}}
             min={rs.date_debut} max={rs.date_fin} />
         </div>
          <div className="mb-2 form-group">
          <label htmlFor="telephone" className="form-label">Numéro de téléphone <span className="text-danger">*</span></label>
          <input type="tel" className="form-control" id="Telephone"  required max={0}
           name="phon" value={phon}  onChange={(e)=>{setPhon(e.target.value)}}/> 
      </div>
      <p className="alert1 alert-danger" role="alert">{error.phon}</p> 
      <div className="mb-2 form-group">
                <label htmlFor="reserve-form" className="form-label">Nombre de places<span className="text-danger">*</span></label>
                  <select  id="reserve-form" className="form-select form-select-lg mb-1" required 
                   onChange={(e)=>{setN_place(e.target.value)}}>
                    <option value="1"selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                   
            </div>
            <p><PriorityHighIcon sx={{ color: pink[500] }}/>Si vous voulez réserver plus de 6 places veuillez contacter le centre</p>
            <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" id='close' data-bs-dismiss="modal"
                           style={{backgroundColor:'rgb(147, 153, 147)'}}>Annuler</button>
                          <button type="button" className="btn btn-primary"
                          onClick={handSubmit}>Envoyer </button>
                        </div>
      </>
      ))}
    </div>
    </form>);
}
export function Reservation2({annonce}) {
    const [phon, setPhon] = useState(0);
    const [error, setError] = useState(0);
    const [repo, setRepo] = useState('');
    const [n_place, setN_place] = useState(1);
    const handSubmit =async (e)=>{
        e.preventDefault();
        setError(validphon(phon))
          let formData=new FormData();
          formData.append('phon',phon);
          formData.append('place',n_place);
          if(error.v===0){
          axios({url: `http://localhost:80/my-pfe/my-scsc/back-end/db/reservation/reserver.php?id=${window.sessionStorage.getItem('id_pub')}&email=${window.localStorage.getItem('email')}`,
            method: "POST",
            headers: {
              authorization: "your token comes here",
            },
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
                    {document.getElementById('close').click()}
            }}) 
           
          }else{
           setRepo(res.data)
          }})
           // Catch errors if any
           .catch((err)=>(console.log(err)));
          }
      }
    return (
        <form>
             <p className="alert1 alert-danger" role="alert">{repo}</p>
      <div>
         
            <div className="mb-2 form-group">
            <label htmlFor="telephone" className="form-label">Numéro de téléphone <span className="text-danger">*</span></label>
            <input type="tel" className="form-control" id="Telephone"  required max={0}
             name="phon" value={phon}  onChange={(e)=>{setPhon(e.target.value)}}/> 
        </div>
        <p className="alert1 alert-danger" role="alert">{error.phon}</p>
        <div className="mb-2 form-group">
                  <label htmlFor="reserve-form" className="form-label">Nombre de places<span className="text-danger">*</span></label>
                    <select  id="reserve-form" className="form-select form-select-lg mb-1" required 
                     onChange={(e)=>{setN_place(e.target.value)}}>
                      <option value="1"selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                   
              </div>
              <p><PriorityHighIcon sx={{ color: pink[500] }}/>Si vous voulez réserver plus de 6 places veuillez contacter le centre</p>
              <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" id='close' data-bs-dismiss="modal"
                          style={{backgroundColor:'rgb(147, 153, 147)'}}>Annuler</button>
                          <button type="button" className="btn btn-primary"
                           onClick={handSubmit}>Envoyer </button>
                        </div>
      </div>
      </form>);
  }
