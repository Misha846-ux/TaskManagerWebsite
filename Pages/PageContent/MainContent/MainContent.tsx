import React from 'react'
import Project_Worked from '../../../Project_Worked/Project_Worked'
import Timer from '../../../Timer/Timer'
import "./styles/MainPageContent.css"
import Projects from '../../../Projects/Projects';
import Members from '../../../Members/Members';
import TO_DOES from '../../../TO_DOES/TO_DOES';
export default function MainContent() {
  return (
    <div className="MainPage_rest">
                <Timer/>
                <div className="Calendar-YourProject">
                    <div className="Fake_calendar"></div>
                <Project_Worked/>
                </div>
                <Projects/>
                <div className="Members-To_Do">
                  <Members/>
                  <TO_DOES/>
                </div>
                
    </div>
  )
}
