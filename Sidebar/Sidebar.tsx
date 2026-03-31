import React from 'react'
import "./styles/Sidebar.css"
import logo_img from "./photos/logo.png";
import { Link, NavLink, useNavigate } from 'react-router-dom'


export default function Sidebar() {
  const navigator = useNavigate()
  const OnClick = () => {
    localStorage.clear();
    navigator("/");
  }

  return (
    <div className="sidebar">
      <img className='Logo_img' src={logo_img}/>
        <h1 className="sidebar_top">Step Progers</h1>
        <button className='LogOut_button' onClick={OnClick}><b>LogOut</b></button>
    </div>
  )
}
