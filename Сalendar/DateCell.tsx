import React from 'react'
import "./Styles/DateCell.css"
export default function DateCell(obj: {date: number}) {
  return (
    <div className='dateCell'>
      {obj.date}
    </div>
  )
}
