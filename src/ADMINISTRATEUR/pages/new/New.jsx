
import "./new.css";
import Side from "../../compo/side/Side";
import Nav from "../../compo/nav/Nav";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Side />
      <div className="newContainer">
        <Nav />
        <div className="top">
          <h1>{title}</h1>
       </div>
       <div className="bottom2">
        <div className="left2">
        <img className="pic"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
        </div>
        <div className="right2">
          
          <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Envoyer</button>
            </form>
            </div>

       
        </div>
      </div>
    </div>

  );
};

export default New;

