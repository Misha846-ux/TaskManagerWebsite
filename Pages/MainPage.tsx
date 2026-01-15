import Header from "../Header/Header";
import React, { useState } from "react";
import "./style/MainPage.css";
import Timer from "../Timer/Timer";
import Project_Worked from "../Project_Worked/Project_Worked";
import sidebar from "../Sidebar/sidebar";
import Sidebar from "../Sidebar/sidebar";
import MainContent from "./PageContent/MainContent/MainContent";
const MainPage: React.FC = () =>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className={`MainPage ${isOpen ? "open" : ""}`}>
            <Sidebar/>
            <div className="main"> 
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
            <MainContent/>
            </div>
        </div>
    );
};
export default MainPage;