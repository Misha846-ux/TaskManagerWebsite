import React from 'react'
import "./styles/Sidebar.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'


export default function Sidebar() {
  const navigator = useNavigate()
  const OnClick = () => {
    localStorage.clear();
    navigator("http://localhost:5173/");
  }

  return (
    <div className="sidebar">
        <h1 className="sidebar_top">Step Progers</h1>
        <NavLink to="MainContent"><button>MainPage</button></NavLink>
        <NavLink to="TaskContent"><button>TaskPage</button></NavLink>
        <button onClick={OnClick}>LogOut</button>
    </div>
  )
}
