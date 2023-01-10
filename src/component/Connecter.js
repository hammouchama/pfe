import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import UseContext from "../contexts/UseContext";
const Connecter=({ path1 , comonent1 })=>{
   const {isconnecter}=useContext(UseContext)
   return (isconnecter ? (
        <Route exact path={path1} element={comonent1}/>
   ):( 
     <Navigate to="/" />)
     )
}
export default Connecter;