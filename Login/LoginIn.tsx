import { useState } from "react";
import "./styles/LoginIn.css"
import { NavLink, useNavigate } from "react-router-dom";
import { SearchUser } from "../utilities/GetUsersFunc";
import type { UserType } from "../utilities/Types/UserType";

const LoginIn = () =>{
      const [user, setUser] = useState<UserType>({
             name:"",
             password:"",
             email:"",
         });
         const navigator = useNavigate();
        const OnClick = async () => {
    if (!user.name || !user.password || !user.email) {
        alert("Fill all fields");
        return;
    }

    try {
        const response = await fetch("https://localhost:7199/LogIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", 
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error("Login failed");
        }

        navigator("/MainPage/MainContent");
    } catch (error) {
        alert("Incorrect login or password");
    }
};
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
          const OnClickBack= () => {
                navigator("/")
        }

  return (
    <div className="LoginIn_body">
     <form className="Login_Input" onSubmit={OnClick}>
            <h1 className="top">Login In</h1>
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
            type="password"
            name="password"
            placeholder="Write password friend"
            value={user.password}
            onChange={handleChange}
            required
            />
            <button className="button" type="submit">Log in</button>
            <button className="Back_button" onClick={OnClickBack}>Back</button>
        </form>
        </div>
  );
};
export default LoginIn;