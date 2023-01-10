import React, { useState,useEffect } from "react";
import axios from 'axios'
import './pp.css';
import ReactPaginate from "react-paginate";
import {Row,Col,Card,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer2 from '../../Footer/F2/Footer2';
import Navbar from "../../Navbar/Navbar";
import Loading from "../../Loading";
function Page_A() {
   const [annonce,setAnnonce]=useState([]);
    const [loding,setLoding]=useState(false);
    const [cat, setCat] = useState('tout');
    const [ville, setVille] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  
    useEffect(()=>{
     
        const fetcheInfo=async ()=>{
          setLoding(true)
          const res =await axios.get("http://localhost/my-pfe/my-scsc/back-end/db/afficher/afficher.php")
         setAnnonce(res.data)
         setLoding(false)
        }
        fetcheInfo();
        
    },[annonce])
    if(loding && annonce.length===0){
        return <div><Loading/></div>
    }  
   // setUsers(annonce.slice(0, 50));
   const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = annonce.slice(0, 100)
    .slice(pagesVisited, pagesVisited + usersPerPage).filter((val)=>{
        if((cat==='tout') && (ville==='')){
              return val
        }else if((cat==='tout') && (val.local.toLowerCase().includes(ville.toLowerCase()))){
   return val
        }else  if(val.categorie.toLowerCase().includes(cat.toLowerCase())&& (val.local.toLowerCase().includes(ville.toLowerCase()))){
        return val
        }
    }).map((rs) => {
      return (
          <Col key={rs.id_pub} id="myCol">
            <Card id='card-ann'>
              <Card.Img variant="top" src={`./images/${rs.imag}`} className="imag-an"/>
              <Card.Body>
                <Card.Title>{rs.titre}</Card.Title>
                <Card.Text><div>
                <p className="des-c"> {rs.description}</p><hr />
                </div>
                </Card.Text>
                <h5 id='locoal'><i className="fa fa-map-marker" aria-hidden="true"></i>{rs.local}</h5>
                <h6 id='locoal'><i className="fa fa-calendar" aria-hidden="true"></i>De {rs.date_debut} à {rs.date_fin}</h6>
              </Card.Body>
                  <Button className="position-absolute bottom-0 end-0 lire-plus" onClick={()=>{window.sessionStorage.id_pub=rs.id_pub}}><Link exact to="/annonce/d">Lire Plus</Link></Button>
            </Card>
          </Col>
      );
    });

  const pageCount = Math.ceil(annonce.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (<> <Navbar/>
    <div className="Ap">
      <h3 className="text-center">Que Cherchez-vous ?</h3>
      <div className="serchBar">
        <div className="row">
        <div className="input-group mb-4 col">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Categorie</label>
            <select className="form-select" id="inputGroupSelect01"
             onChange={(e)=>{setCat(e.target.value)}}>
                          <option value="Conférence">Conférence</option>
                          <option value="Sport">Sport</option>
                          <option value="Activité artistique">Activité artistique</option>
                          <option value="Activité culturelle">Activité culturelle</option>
                          <option value="Activité educative">Activité Educative</option>
                          <option selected value="tout">Tout</option>
            </select>
          </div>
             <div className="input-group mb-4 col">
            <span className="input-group-text" id="inputGroup-sizing-default">Ville</span>
            <input type="text" className="form-control" 
             onChange={(e)=>{setVille(e.target.value)}}
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
        </div>
      </div>
      <hr></hr>
     <Row xs={1} md={3} className="g-4 myCont-1 ">

      {displayUsers}
      <ReactPaginate 
        previousLabel={"Précédent"}
        nextLabel={"Suivant"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      </Row>
      <br/>
      <Footer2/>
    </div>
    </>
  );
}

export default Page_A;