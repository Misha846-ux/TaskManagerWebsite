
import { useState } from "react";
import profile_img from "./photo/profile_image.jpeg";
import "./styles/Header.css";
import { NavLink } from "react-router-dom";
import type { UserType } from "../utilities/Types/UserType";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/reducers/SearchLineReduser";
type HeaderProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header:React.FC<HeaderProps> = ({ isOpen, setIsOpen }) =>{
    const toggleSidebar = () => {
        setIsOpen(prev => !prev);
    };
    const dispatch = useDispatch();
    const OnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const str = e.target.value;
        dispatch(setQuery(str));
    }
<<<<<<< HEAD
    const profile:UserType= JSON.parse(localStorage.getItem("user") as string)
=======
    const profileString = localStorage.getItem("user");
    const profile: UserType | null = profileString ? JSON.parse(profileString) : null;
>>>>>>> d10d65af7a3d73ed28e2df4ae2489846115ffa46


    return( 
        <>
       
        <div className="Header">
            <button type="button" onClick={toggleSidebar} className="dash_button"></button>
            <NavLink to="/MainPage/MainContent" className="dashboard"><b>TaskWebSite</b></NavLink>
            <div className="search_box">
            <input className="search" placeholder="Search Project..." onChange={OnChange}/>
            <button className="search_button"></button>
            </div>
            <button className="message_button"></button>
            <div className="profile">
<<<<<<< HEAD
            <div className="profile_name">{profile.name}</div>
=======
            <b><div className="profile_name">{profile?.userName || "Guest"}</div></b>
>>>>>>> d10d65af7a3d73ed28e2df4ae2489846115ffa46
            <img className="profile_image" src={profile_img}/>
            </div>
        </div>

        </>
    );
};
export default Header;