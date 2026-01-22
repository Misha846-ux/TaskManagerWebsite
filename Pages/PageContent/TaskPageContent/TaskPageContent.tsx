import React from 'react'
import Calendar from '../../../Сalendar/Calendar'
import "./styles/TaskPageContent.css";
import DateCell from '../../../Сalendar/DateCell';
import TasksCard from '../../../Сalendar/TasksCard/TasksCard';

export default function TaskPageContent() {
  return (
    <div className='TaskPageContent_CalendarDate'>
    <div className='Task_Calendar'>
      <Calendar></Calendar>
    </div>
    <div className='Task_Cards'>
      <div className='Card_CompletedTasks'>
      <TasksCard title='COMPLETED TASKS' count={5}/>
      </div>
      <div className='Card_PendingTasks'>
      <TasksCard title='PENDING TASKS' count={100}/>
      </div>
    </div>
    </div>
  )
}
