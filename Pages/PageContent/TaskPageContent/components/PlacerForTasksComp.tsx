import React from 'react'
import type { TaskType } from '../types/TaskType';
import TaskComponent from './TaskComponent';
import { useLoaderData } from 'react-router-dom';
import "../styles/Tasks.css";

export default function PlacerForTasksComp() {
  const tasksData = useLoaderData() as TaskType[] | undefined;

  if (!tasksData) return null;

  return (
    <div className="placerForTasks">
      {tasksData.map((task) => (
        <TaskComponent key={task.id} {...task} />
      ))}
    </div>
  )
};