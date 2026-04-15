import React from 'react'
import "./styles/Sidebar.css"
import logo_img from "./photos/logo.png";
import comp_img from "./photos/company_img.png"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import type { Company } from '../utilities/Types/Company';
const API_URL = import.meta.env.VITE_API_URL;

export default function Sidebar() {
  const navigator = useNavigate()

  const [companies, setCompanies] = useState<Company[]>([]);

useEffect(() => {
  fetch(`${API_URL}/Authorization/MyCompanies`, {
    method:"GET",
    credentials: "include"
  })
  .then(res => res.json())
  .then(setCompanies);
}, []);

const handleCompanyClick = async (companyId: number) => {
  const response = await fetch(`${API_URL}/Authorization/Refresh?companyId=${companyId}`, {
    method:"POST",
    credentials: "include"
  });

  const token = await response.text();

  localStorage.setItem("accessToken", token.toString());
  localStorage.setItem("companyId", companyId.toString());

   navigator(`/MainPage/MainContent/company/${companyId}`);
};

  const OnClick = () => {
    localStorage.clear();
    navigator("/");
  }

  return (
    <div className="sidebar">
      <div className='Logo_div'>
        <img className='Logo_img' src={logo_img}/>
      </div>
        <h1 className="sidebar_top">Your Companies</h1>
        <button className='Company_create_button'>Create +</button>
        <div className='Companies_list'>
          {companies.map(company=>(
            <div key={company.id} className='Company' onClick={() => handleCompanyClick(company.id)}>
              <div className='Company_top'>Company name</div>
              <div className='Company_profile'>
              <div className='Company_name'>
                <b>{company.name}</b>
                </div>
                <div className='Company_img'>
                  <img className='comp_img' src={comp_img}></img>
                </div>
                </div>
              </div>
          ))}
        </div>
        <button className='LogOut_button' onClick={OnClick}><b>LogOut</b></button>
    </div>
  )
}
