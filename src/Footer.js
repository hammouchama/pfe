function Footer(){

  return(
      <footer className="footer">
      <div className="row">
          <div className="footer-1 col-md-3 contact">
          <span className="suiv text-center">Suivez-Nous :</span><br />
                    <a href="#t" className="soc"><img src="./images/logos/tt.png" alt="tweter"/></a>Tewter
                    <a href="#f" className="soc"><img src="./images/logos/ff.png" alt="facebook"/></a>Facebook
                    <a href="#l" className="soc"><img src="./images/logos/ll.png" alt="instagram"/></a>Instagram
                    <a href="#i" className="soc"><img src="./images/logos/in.png" alt="linkdin"/></a>Linkdin
          </div>
          <div className="footer-2 col-md-3">
              <h5>Contactez-nous</h5>
          <div className="mb-2">
             <input type="email" className="form-control" placeholder="Email"/>
           </div>
       <div className="mb-2">
       <textarea className="form-control" rows="3" placeholder="Message"></textarea>
      </div>
      <button type="submit"><i className="fa fa-commenting-o" aria-hidden="true"></i>Envoyer</button>
          </div>
          <span className="bton-top"><a href="#" className="position-absolute bottom-0 end-0 p-5 tt">
          <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
        </a></span>
          <h3 className="copy-1 text-center">Copyright &copy; 2022</h3>
      </div>
      </footer>
      
   )

}
export default Footer