import React from 'react'
import "./Styles/Calendar.css"
import DateCell from './DateCell'

export default function Calendar() {
  return (
    <div className='calendar'>
        <b>April</b>
        <div className='weeksTable'>
            <DateCell date={1}/>
        </div>
        
    </div>
  )
}
