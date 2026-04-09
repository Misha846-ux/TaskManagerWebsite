import { useState } from "react";
import "./styles/LoginIn.css"
import { useNavigate } from "react-router-dom";
import { login } from "../utilities/Methods/UsersMethods";

type LoginType = {
    name: string;
    email:string;
    password: string;
};

const LoginIn = () => {
    const [user, setUser] = useState<LoginType>({
        name: "",
        password: "",
        email: "",
    });

    const navigator = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!user.name || !user.password || !user.email) {
            alert("Fill all fields");
            return;
        }

        try {
            const response = await login(user);

            if (!response.ok) {
                throw new Error();
            }

            localStorage.setItem("isAuth", "true");
            localStorage.setItem("user", JSON.stringify(user));
            navigator("/MainPage/MainContent");
        } catch {
            alert("Incorrect login or password or email");
        }
    };
     const OnClickBack= () => {
                navigator("/")
        }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
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