import {useEffect,useState}from 'react';
import axios from 'axios';
import {getItem} from '../../../component/LocalStor';
import Header from './Header';
import Form from './Form';
import './pp.css';
import Footer2 from '../../../Footer/F2/Footer2';
import Vos_annonce from './Vos_annonce';
import Navbar from '../../../Navbar/Navbar';
function ProfilClient(){
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };
    const [info,setInfo]=useState([]);
    const [loding,setLoding]=useState(false);
    useEffect(()=>{
        const fetcheInfo=async ()=>{
          setLoding(true)
          const res =await axios.get(`http://localhost/my-pfe/my-scsc/back-end/db/afficher/profil.php?cat=modetateur&email=${getItem('email')}`)
         setInfo(res.data)
         setLoding(false)
        }
        fetcheInfo()
    },[])
    if(loding && info.length===0){
        return <div><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span></div>
    }

    return(<>
    <Navbar/>
      <div>
    <div className="page2"></div>
    <div className="page1">
<div className="">
    <Header img={info[0]}/>

      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>
         mes annonces
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>
            PROFIL
          
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
           <Vos_annonce />
         
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
        <Form data={info}/>
        </div>
      </div>
    </div></div>
    </div>
    <Footer2/>
    </>)
}
export default ProfilClient;