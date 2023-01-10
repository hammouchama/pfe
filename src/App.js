import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import LoginClient from './User/client/LoginClient';
import LoginModer from './User/moderateur/LoginModer';
import Connexion from './User/Connexion'
import Pub_annonce from './Annonces/Pub_annonce'
import './Home.css';
import Home from './Home';
import {getItem} from './component/LocalStor';
import UseContext from './contexts/UseContext';
import Profil from './User/moderateur/profil/ProfilModerateur';
import ErrorPage from './ErrorPage'
import ProfilClient from './User/client/profil/ProfilClient';
import Annonce_d from './Annonces/annonce_De/Annonce_d';
import Page_A from './Annonces/afficher_ano/Page_A';
import MedifierAnno from './Annonces/MedifierAnno'
import PDF from './User/moderateur/email/PDF';
import AnnoceD from './ADMINISTRATEUR/annonce/AnnoceD';
import NewAnnonce from './ADMINISTRATEUR/newAnnonce/newAnnonce';
import ListAtt from './ADMINISTRATEUR/annonce/ListAtt';
//import Admin from './admin/components/Sidebar/Sidebar'
//import {Homea, Login, List,New, productInputs, userInputs,Single,Table} from './ADMINISTRATEUR/Admin/Admin';
function App(){
    const [isConnecter , setIsConnecter]=useState(getItem('login'))
    const [cat , setCat]=useState('')
    useEffect(()=>{
         if(getItem('rol')==='moderateur'){
             setCat(true)
         }else if(getItem('rol')==='client'){
             setCat(false)
         }else if(getItem('rol')==='admin'){
             setCat('admin')
         }
    },[cat])
return(
    <UseContext.Provider value={{isConnecter ,setIsConnecter}}>
        <React.StrictMode >
        <Router>
        <Routes>
            <>{cat==='admin'?(<>
                    {/* <Route exact path="/" element ={<Homea/>} />
                    <Route path="/admin/login" element={<Login/>}/>

                    <Route path="/admin/list" element={<List/>} />

                    <Route path="/admin/annonce/new"  element ={<AnnoceD/>} />
                    <Route path="/admin/single"  element ={<Single/>} />
                    <Route path="/admin/users/test"  element ={<New inputs={userInputs} title="Add New User"/>}/>

                    <Route path="/admin/annonce" element ={<Table/>} />
                    <Route path="/admin/annonc/new"  element ={<NewAnnonce/>}/>
                    <Route path="/admin/annonce/confermer"  element ={<ListAtt/>}/>
                    <Route path="/admin/new" index element ={<New inputs={productInputs}  title="Ajouter admin"/>}/> */}
                    </>):(<>
        <Route  exact path="/" element={<Home/>}/>
        <Route exact path='/inscription/client' element={<LoginClient/>}/>
        <Route exact path='/inscription/moderateur' element={<LoginModer/>}/>
        <Route exact path='/connexion' element={<Connexion/>}/>
        <Route  exact path='/annonce/id' element={<Annonce_d/>}/>
        
         <>{ isConnecter ? (
              <>{cat ?(<>
                <Route  exact path='/annonce' element={<Page_A/>}/>
                <Route  exact path='/annonce/d' element={<Annonce_d/>}/>
                <Route exact path="/profil" element={<Profil/>}/>
                <Route exact path="/profil/ajouter" element={<Pub_annonce/>}/>
                <Route exact path="/modifier" element={<MedifierAnno/>}/>
                <Route exact path="/profil/list" element={<PDF/>}/>
                </>
              ):(<>
                <Route exact path="/profil" element={<ProfilClient/>}/>
                <Route  exact path='/annonce' element={<Page_A/>}/>
                <Route  exact path='/annonce/d' element={<Annonce_d/>}/>
                </>
              )
               
            }</>
             ):( 
            <Route exact path='*' element={<ErrorPage/>}/>)
           }</> 
             
           </>)}
          {/**
           * <Route exact path='*' element={<ErrorPage/>}/>
           */} 
           </>
          
        </Routes>
        </Router>
        </React.StrictMode>
    </UseContext.Provider>
);
}

export default App;