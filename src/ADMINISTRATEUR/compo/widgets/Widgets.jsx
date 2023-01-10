import React from 'react';
import "./widgets.css";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import GroupIcon from '@mui/icons-material/Group';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';



const Widgets = ({type}) => {
    let data;
    //temporar

    switch (type){
        case "user":
            data={
                title:"UTILISATEURS",
                isMoney:false,
                amount:80,
                diff:10,
                icon:
                 <GroupIcon className="icons"/>, 

            };
            break;


            case "order":
            data={
                title:"ANNONCES",
                isMoney:true,
                amount:50,
                diff:30,
                icon:
                 <AddBusinessOutlinedIcon className="icons"/>, 

            };
            break;

            case "earning":
            data={
                title:"RESERVATIONS",
                isMoney:true,
                amount:89,
                diff:50,
                icon:
                 <ListOutlinedIcon className="icons"/>, 

            };
            break;


        


            case "balance":
            data={
                title:"VISITES",
                isMoney:true,
                amount:200,
                diff:42,
                icon:
                 <BalanceOutlinedIcon className="icons"/>, 

            };
            break;
            default:
             break;
    }



  return (
    <div className="widgets" >
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="count">{data.isMoney } {data.amount}</span>
            <span className="link1">{data.link}</span>
        </div>

        <div className="right">
            <div className="percentage positive"><KeyboardArrowUpOutlinedIcon/>{data.diff}%</div>
            {data.icon}
        </div>

    </div>
  )
}

export default Widgets
