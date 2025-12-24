import type { User } from "./types/User";
import { useState } from "react";
import "./styles/LoginInput.css"

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
        <form onSubmit={handleSubmit}>
            <h1>Sign In Form</h1>
            <p><b><label className="lable">Login *</label></b></p>
            <input
            className="input"
            type="text"
            name="login"
            placeholder="Write login friend"
            value={user.login}
            onChange={handleChange}
            required
            />
            <p><b><label className="lable">Password *</label></b></p>
            <input
            className="input"
            type="text"
            name="password"
            placeholder="Write password friend"
            value={user.password}
            onChange={handleChange}
            required
            />
            <p><button className="button" type="submit"><b>Sign In</b></button></p>
        </form>
    );
};
export default LoginInput;