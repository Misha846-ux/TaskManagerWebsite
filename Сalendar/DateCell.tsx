import React, { useEffect } from 'react'
import "./Styles/DateCell.css"
import type { dateCellType } from './Types/DateCellType'


export default function DateCell(obj: {day: dateCellType, today: number}) {
  
  return (
    <div className='dateCell' style={{backgroundColor: obj.day.date == obj.today ? "orange" : "white"}}>
      {obj.day.date}
    </div>
  )
}
