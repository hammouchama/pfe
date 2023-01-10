import "./single.css";
import Side from "../../compo/side/Side";
import Nav from "../../compo/nav/Nav";
import Chart from "../../compo/chart/Chart";
import List from "../../compo/table/Table";
import me from './R.png'
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <Side />
      <div className="singleContainer">
        <Nav />
       
        <div className="top me-profil">
          <div className="left1 ">
            <div className="editButton">Modifier</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={me}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Admin</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">scsc@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">N° Télé:</span>
                  <span className="itemValue">+212653920918</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Addresse:</span>
                  <span className="itemValue">
                   Tetouan
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Pays:</span>
                  <span className="itemValue">Maroc</span>
                </div>
              </div>
            </div>
           
          </div>
          <div className="right1">
            <Chart aspect={2/3} title="Dépenses des utilisateurs (6 derniers mois)" />
          </div>
        </div>
        <div className="bottom1">
       {/*announce liste
          <List/>*/}
        </div>
      </div>
    </div>
  );
};

export default Single;
