import React from 'react'
import PlacerForTasksComp from './components/PlacerForTasksComp'
import TaskCreatorComp from './components/TaskCreatorComp'
import './styles/TaskPageContent.css'
// import TasksSortComp from './components/TasksSortComp'

export default function TaskPageContent() {
  return (
    <div>
      <TaskCreatorComp />
      <PlacerForTasksComp />
    </div>
  )
}
