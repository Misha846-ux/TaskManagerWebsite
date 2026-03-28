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

  return (
    <div className="LoginIn_body">
     <form className="Login_Input" onSubmit={handleSubmit}>
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
            type="text"
            name="password"
            placeholder="Write password friend"
            value={user.password}
            onChange={handleChange}
            required
            />
            <button className="button" onClick={OnClick}>Log in</button>
        </form>
        </div>
  );
};
export default LoginIn;