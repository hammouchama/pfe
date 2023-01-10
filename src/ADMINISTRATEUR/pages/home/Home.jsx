import React from 'react';
import Side from '../../compo/side/Side';
import "./home.css";
import Nav from '../../compo/nav/Nav';
import Widgets from '../../compo/widgets/Widgets';
import Featured from '../../compo/featured/Featured';
import Chart from '../../compo/chart/Chart';
import  Table from '../../compo/table/Table';

const Home = () => {
  return (
    <div className="home1" >
        <Side/>
        <div className="homeContainer">
          <Nav/>
         <div className="widget">
         <Widgets type="user"/>
         <Widgets type="order"/>
         <Widgets type="earning"/>
         <Widgets type="balance"/>
         
         </div>
         <div className="charts">
          <Featured/>
          <Chart/>
         </div>
         <div className="listContainer">
         {/* <div className="listTitle">
            LISTE DES ANNONCES
            
          </div>
  <Table/>*/}
         </div>
        </div>
    </div>
  );
};

export default Home;

