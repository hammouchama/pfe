import React,{useEffect,useState} from 'react'
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Nav from '../compo/nav/Nav';
import Side from '../compo/side/Side';
import Loading from '../../Loading';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const NewAnnonce = () => {
    
  const [annonce,setAnnonce]=useState([]);
  const [loding,setLoding]=useState(false);
  useEffect(()=>{
      const fetcheInfo=async ()=>{
        setLoding(true)
        const res =await axios.get("http://localhost/my-pfe/my-scsc/back-end/db/admin/allAnnonceN.php")
       setAnnonce(res.data)
       setLoding(false)
      }
      fetcheInfo()
  },[])
  if(loding && annonce.length===0){
      return <div><Loading/></div>
  }

    return (
        <div>
        <div className="single">
         <Side />
           <div className="singleContainer">
          <Nav />
    <TableContainer className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">TITRE</TableCell>
          <TableCell className="tableCell">DATE</TableCell>
          <TableCell className="tableCell">PAR</TableCell>
          <TableCell className="tableCell">VOIR</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {annonce.map((row,index) => (
          <TableRow key={row.id}>
            <TableCell className="tableCell">{row.id_pub}</TableCell>
           
            <TableCell className="tableCell">{row.titre}</TableCell>
            <TableCell className="tableCell">{row.date_debut} A {row.date_fin}</TableCell>
            <TableCell className="tableCell">{row.nom} {row.prenom}</TableCell>
            <TableCell>
            <button type="button" className="btn" 
          onClick={()=>{window.sessionStorage.id_pub=row.id_pub}}>
            <Link exact to="/admin/annonce/confermer"><FontAwesomeIcon icon={faEye}/></Link></button>
      
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div></div>

        </div>
    );
}

export default NewAnnonce;
