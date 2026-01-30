import React from 'react'
import "./styles/Sidebar.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'


export default function Sidebar() {
  const navigator = useNavigate()
  const OnClick = () => {
    localStorage.clear();
    navigator("/");
  }
  const OnClickTasks = () => {
    navigator("TaskContent");
  }

  return (
    <div className="sidebar">
        <h1 className="sidebar_top">Step Progers</h1>
        <button onClick={OnClick}>LogOut</button>
        <button onClick={OnClickTasks}>TaskPage</button>
    </div>
  )
}
