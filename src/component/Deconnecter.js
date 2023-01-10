import { useContext ,useEffect,useReducer} from "react";
import { userContext } from "./../contexts/UseContext";
const Deconnecter = () => {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const login = useContext(userContext);
    localStorage.setItem("login", login)
    useEffect(()=>{
        forceUpdate();
    },[login,ignored])
    return(<>
        
        </>)
}
export default Deconnecter;