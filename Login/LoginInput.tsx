import type { User } from "./types/User";
import { useState } from "react";
import "./styles/LoginInput.css"
import { NavLink } from "react-router-dom";

const LoginInput = () =>{
    const [user, setUser] = useState<User>({
        login:"",
        password:"",
    });
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
            name="login"
            placeholder="Write login friend"
            value={user.login}
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
            <NavLink to="/MainPage/MainContent" className="button">Login</NavLink>
        </form>
    );
};
export default LoginInput;