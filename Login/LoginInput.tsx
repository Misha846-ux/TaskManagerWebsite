
import { useState } from "react";
import "./styles/LoginInput.css"
<<<<<<< HEAD
import { NavLink, useNavigate } from "react-router-dom";
import { SearchUser } from "../utilities/GetUsersFunc";
=======
import { useNavigate } from "react-router-dom";
import { signUp } from "../utilities/Methods/UsersMethods";
>>>>>>> d10d65af7a3d73ed28e2df4ae2489846115ffa46
import type { UserType } from "../utilities/Types/UserType";

const LoginInput = () =>{
    const [user, setUser] = useState<UserType>({
<<<<<<< HEAD
        name:"",
=======
        id:0,
        userName:"",
>>>>>>> d10d65af7a3d73ed28e2df4ae2489846115ffa46
        password:"",
        email:"",
    });
    const navigator = useNavigate();
<<<<<<< HEAD
    const OnClick = () => {
        SearchUser(user).then((value) => {
            if(value[0] == null || user.name=="" || user.password == ""){
                alert("Un correct login or password");
            }
            else{
                const userAsString = JSON.stringify(value[0]);
                localStorage.setItem("user", userAsString);
                navigator("/MainPage/MainContent")
            }
        }).catch((err) => {
            console.log(err);
        });
=======
    const OnClick = async () => {
    if (!user.userName || !user.email || !user.password) {
        alert("Fill all fields");
        return;
    }

    const response = await signUp({
        name: user.userName,
        email: user.email,
        password: user.password
        });

    if (response.ok) {
        alert("Account created!");
        
        navigator("/LoginIn");
    } else {
        alert("Error");
    }
    };
    const OnClickLoginIn = () => {
                navigator("/LoginIn")
    }
    const OnClickForgotPassword = () => {
                navigator("/ForgotPassword")
>>>>>>> d10d65af7a3d73ed28e2df4ae2489846115ffa46
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
    };
    return(
        <form className="LoginInput" onSubmit={handleSubmit}>
            <h1 className="top">Sign In</h1>
            <label className="lable">Login</label>
            <input
            className="input"
            type="text"
<<<<<<< HEAD
            name="name"
            placeholder="Write login friend"
            value={user.name}
=======
            name="userName"
            placeholder="Write login friend"
            value={user.userName}
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
>>>>>>> d10d65af7a3d73ed28e2df4ae2489846115ffa46
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
<<<<<<< HEAD
            <button className="button" onClick={OnClick}>Login</button>
=======
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
>>>>>>> d10d65af7a3d73ed28e2df4ae2489846115ffa46
        </form>
    );
};
export default LoginInput;