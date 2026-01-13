import type { Profile } from "./type/Profile";
import { useState } from "react";
import "./styles/Header.css";
const Header:React.FC = () =>{
    const profile:Profile={
        name: "Ruslan",
        surname:"Opihaylenko",
        image:"https://img-webcalypt.ru/uploads/admin/images/meme-templates/B2TIpQn2PQORVmrbq3rLsO8pX01kJ2R6.jpeg",
    };
        const [isOpen, setIsOpen] = useState<boolean>(false);
        const toggleSidebar = () =>{
            setIsOpen(prev=>!prev);
        };
    return( 
        <>
        <div className={`layout ${isOpen ? "open" : ""}`}>
        <div className="sidebar">
            <h1 className="sidebar_top">Step Progers</h1>
        </div>
          <div className="content">
        <form className="Header">
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
        </form>
        </div>
        </div>
        </>
    );
};
export default Header;