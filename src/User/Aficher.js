import { useState,useEffect } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Card,Button} from 'react-bootstrap';
import axios from "axios";
import { Link } from "react-router-dom";
import {getItem} from '../component/LocalStor';
import Loading from "../Loading";
function Aficher(){
    const [annonce,setAnnonce]=useState([]);
    const [loding,setLoding]=useState(false);
    useEffect(()=>{
        const fetcheInfo=async ()=>{
          setLoding(true)
          const res =await axios.get("http://localhost/my-pfe/my-scsc/back-end/db/afficher/afficher.php?limit")
         setAnnonce(res.data)
         setLoding(false)
        }
        fetcheInfo()
    },[])
    if(loding && annonce.length===0){
        return <div><Loading/></div>
    }
    return(
    <div className="afich">
        <h1 className="text-center ann">Annonce</h1>
        <Row xs={1} md={3} className=" myCont">
  {annonce.map((rs) => (
    <Col key={rs.id_pub} id="myCol" >
      <Card id='card-ann'>
      <Link exact to="/annonce/id"><Card.Img variant="top" src={`./images/${rs.imag}`} className="imag-an" onClick={()=>{window.sessionStorage.id_pub=rs.id_pub}}/> </Link>
        <Card.Body>
          <Card.Title>{rs.titre}</Card.Title>
          <Card.Text><div>
          <p className="des-c"> {rs.description}</p><hr />
          </div>
          </Card.Text>
          <h5 id='locoal'><i className="fa fa-map-marker" aria-hidden="true"></i>{rs.local}</h5>
          <h6 id='locoal'><i class="fa fa-calendar" aria-hidden="true"></i>De {rs.date_debut} à {rs.date_fin}</h6>
        </Card.Body>
            <Button className="position-absolute bottom-0 end-0 lire-plus" onClick={()=>{window.sessionStorage.id_pub=rs.id_pub}}><Link exact to="/annonce/id">Lire Plus</Link></Button>
      </Card>
    </Col>
   
  ))}
</Row><br/>
<>{getItem('login')?(
      <Link className="voir-plus" to="/annonce" exact>Voir Plus</Link>
    ):(
      <Link className="voir-plus" to="/connexion" exact>Voir Plus</Link>
    )}</>
       
       <br/>
    </div>
    )
}
export default Aficher;