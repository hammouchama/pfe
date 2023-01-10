import React from 'react'
import'./featured.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const Featured = () => {
  return (
    <div className="featured">
     <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon font size="small"/>

     </div>
     <div className="bottom">
        <div className="featuredChart">
            
            <CircularProgressbar value={70} text={"50%"} strokeWidth={5} />
            


        </div>
        <p className="titles"></p>
        <p className="amount"></p>
        <p className="desc">
           
        </p>{/* 
        <div className="summary">
            <div className="item">
                <div className="itemTitle" >Target</div>
                <div className="itemResult negative">
                < KeyboardArrowDownIcon fontSize="small"/>
                    <div className="resultAmount">12k</div>
                    
                </div>
                <div className="itemTitle">Semaine dernière</div>
                <div className="itemResult positive">
                < KeyboardArrowDownIcon fontSize="small"/>
                    <div className="resultAmount">12k</div>
                    
                </div>
                <div className="itemTitle">Mois dernier</div>
                <div className="itemResult positive">
                < KeyboardArrowDownIcon fontSize="small"/>
                    <div className="resultAmount">12k</div>
                    
                </div>


            </div>
        </div>*/}
     </div>
      
    </div>
  )
}

export default Featured
