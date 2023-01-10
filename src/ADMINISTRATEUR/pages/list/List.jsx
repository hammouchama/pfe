import React from 'react'
import "./list.css";
import Side from '../../compo/side/Side';
import Nav from '../../compo/nav/Nav';
import Datatable from '../../compo/datatable/Datatable';
import {User} from '../../compo/datatable/Datatable1';

const List = () => {
  return (
    <div className="list">
      <Side/>
      <div className="listContainer1">
        <Nav/>
        <Datatable/>
        <User/>

      </div>
        
      
    </div>
  )
}

export default List
