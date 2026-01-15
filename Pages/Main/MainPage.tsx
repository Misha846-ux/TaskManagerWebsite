import Header from "../../Header/Header";
import React, { useState } from "react";
import "./style/MainPage.css";
import Timer from "../../Timer/Timer";
const MainPage: React.FC = () =>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className={`MainPage ${isOpen ? "open" : ""}`}>
            <div className="sidebar">
            <h1 className="sidebar_top">Step Progers</h1>
            </div>
            <div className="main"> 
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="MainPage_rest">
                <Timer/>
            </div>
            </div>
        </div>
    );
};
export default MainPage;