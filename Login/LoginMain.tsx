import { Outlet, useNavigate } from "react-router-dom";
import LoginBackground from "./LoginBackground";
import "./styles/LoginMain.css";
import { useEffect } from "react";
const LoginMain = () =>{
    const navigator = useNavigate()
    useEffect(() => {
        if(localStorage.getItem("user") != null){
            navigator("/MainPage/MainContent")
        }
    },[])

    return(
        <div className="LoginMain">
        <LoginBackground/>
        <Outlet></Outlet>
        </div>
    );
};
export default LoginMain;