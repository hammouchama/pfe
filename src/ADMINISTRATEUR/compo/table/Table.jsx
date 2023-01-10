import React,{useEffect,useState} from 'react'
import "./table.css";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Nav from '../nav/Nav';
import Side from '../side/Side';
import Loading from '../../../Loading';
import Swal from 'sweetalert2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye,faPenToSquare,faTrash,faPlus} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const List = () => {
  const [annonce,setAnnonce]=useState([]);
  const [loding,setLoding]=useState(false);
  useEffect(()=>{
      const fetcheInfo=async ()=>{
        setLoding(true)
        const res =await axios.get("http://localhost/my-pfe/my-scsc/back-end/db/admin/allAnnonce.php")
       setAnnonce(res.data)
       setLoding(false)
      }
      fetcheInfo()
  },[])
  if(loding && annonce.length===0){
      return <div><Loading/></div>
  }
     
  const sup_annonce=async(ida)=>{
    let formData=new FormData();
    axios({
      url: `http://localhost:80/my-pfe/my-scsc/back-end/db/annonce/supp_annonce.php?id=${ida}`,
      method: "POST",
      headers: {authorization: "your token comes here",},
      data: formData,
    }).then((res) =>{if(res.data==='good'){
     
    }else{
      console.log(res.data)
    }}).catch((err)=>(console.log(err)));
    }

  return (<>
        <div className="single">
         <Side />
           <div className="singleContainer">
          <Nav />
    <TableContainer className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">ANNONCES</TableCell>
          <TableCell className="tableCell">TITRE</TableCell>
          
          <TableCell className="tableCell">DATE</TableCell>
        
         
          <TableCell className="tableCell">ACTION</TableCell>
          <TableCell className="tableCell">SUPPRIMER</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {annonce.map((row,index) => (
          <TableRow key={row.id}>
            <TableCell className="tableCell">{row.id_pub}</TableCell>
            <TableCell className="tableCell">
              <div className="cellWrapper">
                <Link exact to="/admin/annonce/new"> <img src={`../images/${row.imag}`} alt="" className="image" 
                onClick={()=>{window.sessionStorage.id_pub=row.id_pub}}/>
               </Link>
              </div>
            </TableCell>
            <TableCell className="tableCell">{row.titre}</TableCell>
            <TableCell className="tableCell">{row.date_debut}-<br/>-{row.date_fin}</TableCell>
            <TableCell className="tableCell">
              {row.statut==1?(
                <span className={`status Approuvé`}>Approuvé</span>
              ): row.statut==2 ?(
                <span className={`status Refusé`}>Refusé</span>
              ):(
                <span className={`status Oncour`}>En cours</span>
              )}
              
            </TableCell>
            <TableCell>
            <button type="button" className="btn btn-danger"
      onClick={(e)=>{
        Swal.fire({
          title: 'Etes-vous sûr de vouloir supprimer votre annonce?',
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: 'Oui',
          denyButtonText: `Non`,
        }).then((result) => {
          if (result.isConfirmed) {
            sup_annonce(row.id_pub)
            let timerInterval
            Swal.fire({
              title: 'Auto close alert!',
              html: 'Je fermerai dans  <b></b> millisecondes.',
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft()
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                window.history.go()
              }
            })
           
          } else if (result.isDenied) {
            Swal.fire('Annuler', '', 'info')
          }
        })
        }}
      ><FontAwesomeIcon icon={faTrash} />
      </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div></div></>
  );
};
  

export default List
