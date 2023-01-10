import React from "react";
import { Link } from "react-router-dom";
function Header() {

    return (<div>
      <nav className="navbar navbar-expand-lg text-white" id='header'>
      <div className="container-fluid">
          <div className="d-flex flex-grow-2">
              <span className="w-100 d-lg-none d-block"></span>
              <Link className="navbar-brand d-none d-lg-inline-block" to="/"> SCSC<br /><p id="lgo">site des centres <br/> socio-culturels</p></Link>
              <Link className="navbar-brand-two mx-auto d-lg-none d-inline-block" to="#">
                  <img src="https://via.placeholder.com/40?text=LOGO" alt="logo"/>
              </Link>
              <div className="w-0 text-right">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                      <span className="navbar-toggler-icon"></span>
                  </button>
              </div>
          </div>
          <div className="collapse navbar-collapse flex-grow-1 text-light" id="myNavbar">
              <ul className="navbar-nav ms-auto flex-nowrapc">
                  <li className="nav-item">
                  <Link className="nav-link m-2 menu-item text-light" aria-current="page" to="/">Accueil</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="#" className="nav-link m-2 menu-item text-light">Apropos de nous</Link>
                  </li>
                  <li className="nav-item dropdown text-light">
                  <Link className="nav-link m-2 menu-item dropdown-toggle text-light" to="ins" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  s'inscrir
                 </Link>
                 
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/login">client</Link></li>
                  <li><Link className="dropdown-item" to="/loginmoder">Moderatore</Link></li>
                  
                </ul>
                  </li>
                  <li className="nav-item">
                      <Link to="#" className="nav-link m-2 menu-item" id="se-connecter" 
                       data-bs-toggle="modal" data-bs-target="#exampleModal">Se connecter</Link>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body">
          <div className="login-wrap">
              <div className="login-html">
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label htmlFor="user" className="label">Email</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Mot de passe</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<Link to="#forgot" id="oublie">Mot de passe oublié ?</Link>
				</div></div></div></div>
			</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
        <button className="btn btn-primary" type="submit">seconnecter</button>
      </div>
    </div>
  </div>
</div>
  </div>
    )
}
export default Header;