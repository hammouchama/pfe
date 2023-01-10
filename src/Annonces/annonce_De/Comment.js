import './comment.css';
import  React,{useEffect,useState} from 'react';
import axios from "axios";
import Swal from 'sweetalert2'
function Comment(){
    const [comments,setComments]=useState([]);
    const [loding,setLoding]=useState(false);
    const [id_pub,setId_pub]=useState(window.sessionStorage.getItem('id_pub'));
    useEffect(()=>{
      setId_pub(window.sessionStorage.getItem('id_pub'));
      setLoding(true)
        const fetcheInfo=async ()=>{
         
          const res =await axios.get(`http://localhost:80/my-pfe/my-scsc/back-end/db/comment/afficher_comment.php?id=${id_pub}`)
           setComments(res.data);
           setLoding(false)
        }
        fetcheInfo()
    },[comments,id_pub])
    if(loding && comments.length===0){
      return <div><i className="pas_de_coment"></i>
      <span className="">Pas d'avis</span></div>
  } 
  const voir_c= async(e)=>{
    e.preventDefault();
    document.querySelector('.commentess11').classList.toggle('visible')
  }
  const sup_comment=async(idc)=>{
    //e.preventDefault();
    console.log(idc)
    let formData=new FormData();
    axios({
      url: `http://localhost:80/my-pfe/my-scsc/back-end/db/comment/supp_comment.php?id=${idc}`,
      method: "POST",
      headers: {authorization: "your token comes here",},
      data: formData,
    }).then((res) =>{if(res.data==='good'){
     
    }else{
      console.log(res.data)
    }}).catch((err)=>(console.log(err)));
    }
  
    return (<div className="commentss" >
               <h1 className='text-center' 
               onClick={voir_c}><i className="fa fa-comment" aria-hidden="true"></i>Avis</h1>
               <div className={window.localStorage.getItem('rol')==='admin'?"":'commentess11'}>
               { comments.map(res=>(
                 <>
                 <section className="commenters">
	<article className="commenter">{
    window.localStorage.getItem('rol')==='admin'?(
      <img src={`../../images/profil/${res.image}`} alt="profile" class="comment-img" />
    ):(
      <img src={`../images/profil/${res.image}`} alt="profile" class="comment-img" />
    )
  }
			
			
		<div className="comment-body">
			<div className="text">
      
      <p>{res.contenu}</p>
      
			</div>
			<p className="attribution">Par  <span>{res.prenom} {res.nom} </span> : <span>{res.date_de_pub}</span>
      <span id='del-c' className={res.email !== window.localStorage.getItem('email') && window.localStorage.getItem('rol')!=='admin' ? "notVisible":""}
                    onClick={(e)=>{
                      Swal.fire({
                        title: 'Etes-vous sûr de vouloir supprimer votre avis ?',
                        showDenyButton: true,
                        showCancelButton: false,
                        confirmButtonText: 'Oui',
                        denyButtonText: `No`,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire('OK!', '', 'success')
                          sup_comment(res.id_c)
                        } else if (result.isDenied) {
                          Swal.fire('Annuler', '', 'info')
                        }
                      })
                      }}
                    ><i className="fa fa-trash" aria-hidden="true"></i></span>
      </p>
		</div>
	</article>
	
</section>​
                 <div>{/* 
                    <blockquote className="q-card q-card-color-1"  key={res.id_pub}>
                    <div className='imag-log'>
                   <img src={`../images/profil/${res.image}`} alt="profile"/>
                 </div>
                    <p>{res.contenu}</p>
                    <div className='author'>{res.prenom} {res.nom}</div>
                    <span id='del-c'
                    onClick={(e)=>{
                      Swal.fire({
                        title: 'Voules-vous etre sur?',
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: 'Oui',
                        denyButtonText: `No`,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire('OK!', '', 'success')
                          sup_comment(res.id_c)
                        } else if (result.isDenied) {
                          Swal.fire('Annuler', '', 'info')
                        }
                      })
                      }}
                    ><i className="fa fa-trash" aria-hidden="true"></i></span>
                    </blockquote>*/}
                   
                    </div>

                    </>))
               }</div>
            </div>)
}
export default Comment;