import React from 'react'
import Project_Worked from '../../../Project_Worked/Project_Worked'
import Timer from '../../../Timer/Timer'
import { Outlet, useLoaderData } from 'react-router-dom';
import Calendar from '../../../Сalendar/Calendar';

export default function MainContent() {

  return (
    <div className="MainPage_rest">
        <div>
            <Timer/>
        </div>       
        <div className="Calendar-YourProject">
            <Calendar/>
            <Outlet/>
        </div>
    </div>
  )
}
