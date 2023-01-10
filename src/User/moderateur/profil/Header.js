import './header.css'
import {useState,useEffect} from 'react';
import axios from 'axios';
function Header({img}){
    const [nom,setNom]=useState("");
    const [image,setImage]=useState("");
    const [id,setId]=useState('');
    useEffect(()=>{
        const fetcheInfo=async ()=>{
             setNom(img.nom+" "+img.prenom);
             setImage(img.image);
             setId(img.id);
        }
        fetcheInfo();
    },[nom,image]);
    const  handleChange= async (e)=>{
        let formData=new FormData();
        formData.append('img',e);
        formData.append('role','mod');
        axios({
            url:`http://localhost:80/my-pfe/my-scsc/back-end/db/control/changePhoto.php?id=${id}`,
            method: "POST",
            headers: {
              authorization: "your token comes here",
            },
            // Attaching the form data
            data: formData,
          })
            // Handle the response from backend here
            .then((res) => {console.log(res)})
            
            // Catch errors if any
            .catch((err)=>console.log(err));
            window.location.reload();
     }
    return(
        <div className="main1">
            <div className="photo">
            <img src={`./images/profil/${image}`} alt="profile" />
            <div className="round">
                <input type="file" onChange={(e)=>{handleChange(e.target.files[0].name)}}/>
                <i className='fa fa-camera' style={{color:"#000000"}}></i>
            </div>
            </div>
            <div className='head1'>
               <h1>Bienvenue Cher : <span>{nom}</span></h1>
            </div>
        </div>
    )
}
export default Header;