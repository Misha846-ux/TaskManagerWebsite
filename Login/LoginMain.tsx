import { Outlet, useNavigate } from "react-router-dom";
import LoginBackground from "./LoginBackground";
import "./styles/LoginMain.css";
import { useEffect } from "react";
const LoginMain = () =>{
    const navigator = useNavigate()
    useEffect(() => {
<<<<<<< HEAD
        if(localStorage.getItem("user") != null){
            navigator("/MainPage/MainContent")
        }
    },[])
=======
    try {
        const user = JSON.parse(localStorage.getItem("user") || "null");
        if (user) {
            navigator("/MainPage/MainContent");
        }
    } catch {}
}, []);
>>>>>>> d10d65af7a3d73ed28e2df4ae2489846115ffa46

    return(
        <div className="LoginMain">
        <LoginBackground/>
        <Outlet></Outlet>
        </div>
    );
};
export default LoginMain;