import type { Profile } from "./type/Profile";
import { useState } from "react";
import profile_img from "./photo/profile_image.jpeg";
import "./styles/Header.css";
type HeaderProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header:React.FC<HeaderProps> = ({ isOpen, setIsOpen }) =>{
    const toggleSidebar = () => {
        setIsOpen(prev => !prev);
    };
    const profile:Profile={
        name: "Ruslan",
        surname:"Opihaylenko",
        image: profile_img,
    };
    return( 
        <>
       
        <div className="Header">
            <button type="button" onClick={toggleSidebar} className="dash_button"></button>
            <div className="dashboard"><b>Dashboard</b></div>
            <div className="search_box">
            <input className="search" placeholder="Search Project..."/>
            <button className="search_button"></button>
            </div>
            <button className="message_button"></button>
            <div className="profile">
            <div className="profile_name">{profile.name}</div>
            <div className="profile_name">{profile.surname}</div>
            <img className="profile_image" src={profile.image}/>
            </div>
        </div>

        </>
    );
};
export default Header;