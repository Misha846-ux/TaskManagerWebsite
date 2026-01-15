import React from 'react'
import Project_Worked from '../../../Project_Worked/Project_Worked'
import Timer from '../../../Timer/Timer'

export default function MainContent() {
  return (
    <div className="MainPage_rest">
                <Timer/>
                <div className="Calendar-YourProject">
                    <div className="Fake_calendar"></div>
                <Project_Worked/>
        </div>
    </div>
  )
}
