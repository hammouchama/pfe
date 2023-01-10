import Homea from "../pages/home/Home";
import Login from "../pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "../pages/single/Single";
import New from "../pages/new/New";
import List from "../pages/list/List";
import { productInputs, userInputs } from "../formSource";
import Table from '../compo/table/Table'
function admin(){
    return(
        <Routes>
            <Route exact path="/admin" element ={<Homea/>} />
                <Route path="/admin/login" element={<Login/>}/>

                <Route path="/admin/list" element={<List/>} />

                 <Route path="/admin/list/single"  element ={<Single/>} />
                <Route path="/admin/list/new"  element ={<New inputs={userInputs} title="Add New User"/>}/>

                <Route path="/admin/products" element ={<List/>} />
                    <Route path="/admin/products/:productId"  element ={<Single/>}/>
                    <Route path="/admin/products/new" index element ={<New inputs={productInputs}  title="Add New Product"/>}/>
        </Routes>



    );

}
 export default admin; 
export {Homea, Login, List,New, productInputs, userInputs,Single,Table}; 