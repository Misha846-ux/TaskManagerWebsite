import React from 'react'
import Project_Worked from '../../../Project_Worked/Project_Worked'
import Timer from '../../../Timer/Timer'
import { Outlet, useLoaderData } from 'react-router-dom';
import Calendar from '../../../Сalendar/Calendar';
import "./styles/MainPageContent.css"
import TasksCard from '../../../Сalendar/TasksCard/TasksCard';

export default function MainContent() {

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
                <TasksCard title='COMPLETED TASKS' count={5}/>
                <TasksCard title='PENDING TASKS' count={100}/>
              </div>
              
            </div>
            
            
            <Outlet/>
        </div>
    </div>
  )
}
