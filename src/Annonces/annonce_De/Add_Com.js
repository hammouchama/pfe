import Comment from './Comment';
import  React,{useState} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import {getItem} from '../../component/LocalStor';
import Swal from 'sweetalert2'
function Add_Com(){
    const [error,setError]=useState('');
    const [comment,setComment]=useState('');
    const [rol,setRol]=useState(window.localStorage.getItem('rol'));
    const [id_pub,setId_pub]=useState(window.sessionStorage.getItem('id_pub'));
    const addcomment =async (e)=>{
        e.preventDefault();
          let formData=new FormData();
          formData.append('comment',comment);
          formData.append('rol',rol);
          if(comment!==''){
          axios({
            // Endpoint to send files
            url: `http://localhost:80/my-pfe/my-scsc/back-end/db/comment/add_comment.php?id=${id_pub}&email=${window.localStorage.getItem('email')}`,
            method: "POST",
            headers: {
              // Add any auth token here
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
                  setComment('');
            }}) 
           
          }else{
            setError(res.data)
          }})
           // Catch errors if any
           .catch((err)=>(console.log(err)));
          }
      }
    return(<div>
                <div className="comment">
                    <div className="form-floating" style={window.localStorage.rol!=='client'?{display:"none"}:{dosplay:"grid"}}>
                    <p className="alert1 alert-danger" role="alert">{error}</p>
                        <textarea className="form-control" placeholder="Leave a comment here" name="comment" value={comment} required
                        onChange={(l)=>{setComment(l.target.value)}} id="comment">{comment}</textarea>
                        <label htmlFor="comment">Ajouter un avis</label>
                        <>{getItem('login')?(
                    <button className='button' type="submit" onClick={(e)=>(addcomment(e))}>Ajouter</button>
                    ):(
                    <Link exact to="/connexion"> <button className='button'>Ajouter</button></Link>
                    )}</>
                </div>
                <Comment/>
                </div>
    </div>
    )
}
export default Add_Com;