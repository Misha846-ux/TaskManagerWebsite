import React from 'react'
import Project_Worked from '../../../Project_Worked/Project_Worked'
import Timer from '../../../Timer/Timer'
import { Outlet, useLoaderData } from 'react-router-dom';
import Calendar from '../../../Сalendar/Calendar';
import "./styles/MainPageContent.css"
import TasksCard from '../../../Сalendar/TasksCard/TasksCard';
import "./styles/MainPageContent.css"
import Projects from '../../../Projects/Projects';
import Members from '../../../Members/Members';
import TO_DOES from '../../../TO_DOES/TO_DOES';
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

export default function MainContent() {
 const [companies, setCompanies] = useState<any[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`${API_URL}/Authorization/MyCompanies`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setCompanies(data))
      .catch(() => setCompanies([]));
  }, []);

  useEffect(() => {
    if (companies.length > 0 && !location.pathname.includes("company")) {

      const savedCompanyId = localStorage.getItem("companyId");

      const companyId = savedCompanyId
        ? savedCompanyId
        : companies[0].id;

      navigate(`/MainPage/MainContent/company/${companyId}`);
    }
  }, [companies, location.pathname]);
  return (
    <div className="MainPage_rest">
        <div>
            <Timer/>
        </div>       
        <div className="Calendar-YourProject">
            <div className='calendarWorkBox'>
              <div className='BoxForCalendar'>
                <Calendar/>
              </div>
              <div style={{width: "29%", height: "99%"}}>
                <TasksCard title='COMPLETED TASKS' count={0.1}/>
                <TasksCard title='PENDING TASKS' count={100}/>
              </div>
              
            </div>
            <Outlet/>
            </div>
                <Projects/>
                <div className="Members-To_Do">
                  <Members/>
                  <TO_DOES/>
                </div>
                
    </div>
  )
}
