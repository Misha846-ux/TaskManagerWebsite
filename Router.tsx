import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import MainContent from './Pages/PageContent/MainContent/MainContent'
import LoginMain from './Login/LoginMain'
import TaskPageContent from './Pages/PageContent/TaskPageContent/TaskPageContent'
import Error404 from './Errors/Error404'
import Project_Worked from './Project_Worked/Project_Worked'
import getTasks from './utils/getTasks'
import TaskComponent from './Pages/PageContent/TaskPageContent/components/TaskComponent'
import TaskFullInformationComp from './Pages/PageContent/TaskPageContent/components/TaskFullInformationComp'

export const router = createBrowserRouter([
    {
        path: "/MainPage",
        element: <MainPage />,
        children: [
            {
                path: "MainContent",
                element: <MainContent/>,
                children: [
                    {
                        path: "",
                        element: <Project_Worked/>,
                    }
                ]
            },
            {
                path: "TaskContent",
                element: <TaskPageContent/>,
                loader: getTasks,
            },
            
        ]
        
    },
    {
        path: "/",
        element: <LoginMain/>
    },
    {
        path: "*",
        element: <Error404/>
    },
    {
            path: "/task/:id",
            element: <TaskFullInformationComp/>,
            loader: async ({ params }) => {
              const res = await fetch(
                'http://localhost:3000/tasks/' + Number(params.id)
              );
              return res.json();
            },
     },
])
