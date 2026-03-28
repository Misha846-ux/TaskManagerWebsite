
import { useState } from "react";
import "./styles/LoginInput.css"
import { NavLink, useNavigate } from "react-router-dom";
import { SearchUser } from "../utilities/GetUsersFunc";
import type { UserType } from "../utilities/Types/UserType";

const LoginInput = () =>{
    const [user, setUser] = useState<UserType>({
        name:"",
        password:"",
        email:"",
    });
    const navigator = useNavigate();
    const OnClick = () => {
        SearchUser(user).then((value) => {
            if(value[0] == null || user.name=="" || user.password == "" || user.email== ""){
                alert("Un correct login or password or email");
            }
            else{
                const userAsString = JSON.stringify(value[0]);
                localStorage.setItem("user", userAsString);
                navigator("/MainPage/MainContent")
            }
        })
    }
    const OnClickLoginIn = () => {
                navigator("/LoginIn")
    }
    const OnClickForgotPassword = () => {
                navigator("/ForgotPassword")
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setUser((prev)=>({
            ...prev,
            [name]:value,
        }));
    };
    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        console.log(user);
    };
    return(
        <form className="LoginInput" onSubmit={handleSubmit}>
            <h1 className="top">Sign In</h1>
            <label className="lable">Login</label>
            <input
            className="input"
            type="text"
            name="name"
            placeholder="Write login friend"
            value={user.name}
            onChange={handleChange}
            required
            />
             <label className="lable">Email</label>
            <input
            className="input"
            type="text"
            name="email"
            placeholder="Write email friend"
            value={user.email}
            onChange={handleChange}
            required
            />
            <label className="lable">Password</label>
            <input
            className="input"
            type="text"
            name="password"
            placeholder="Write password friend"
            value={user.password}
            onChange={handleChange}
            required
            />
            <button className="button" onClick={OnClick}>Sign Up</button>
            <label className="Litle_lable">
            <label className="Lable_Login">
                Already have account?
                <button className="Litle_button" onClick={OnClickLoginIn}>Log in</button>
                </label>
                <label className="Lable_Forgot_Password">
                Forgot password?
                <button className="Litle_button" onClick={OnClickForgotPassword}>Change</button>
                </label>
                </label>
        </form>
    );
};
export default LoginInput;