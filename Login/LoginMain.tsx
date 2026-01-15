import { Outlet } from "react-router-dom";
import LoginBackground from "./LoginBackground";
import "./styles/LoginMain.css";
const LoginMain = () =>{
    return(
        <div className="LoginMain">
        <LoginBackground/>
        <Outlet></Outlet>
        </div>
    );
};
export default LoginMain;