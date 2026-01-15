import React from 'react'
import Project_Worked from '../../../Project_Worked/Project_Worked'
import Timer from '../../../Timer/Timer'
import { Outlet, useLoaderData } from 'react-router-dom';

export default function MainContent() {
  const num = useLoaderData() as number;

  return (
    <div className="MainPage_rest">
                <Timer/>
                <div className="Calendar-YourProject">
                    <div className="Fake_calendar"></div>
                <Outlet/>
        </div>
    </div>
  )
}
