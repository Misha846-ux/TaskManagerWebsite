import React from 'react'
import "./styles/Sidebar.css"
import { Link, NavLink } from 'react-router-dom'


export default function Sidebar() {
  return (
    <div className="sidebar">
        <h1 className="sidebar_top">Step Progers</h1>
        <NavLink to="MainContent"><button>MainPage</button></NavLink>
        <NavLink to="TaskContent"><button>TaskPage</button></NavLink>
    </div>
  )
}
