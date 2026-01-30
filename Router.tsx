import React from 'react'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import MainContent from './Pages/PageContent/MainContent/MainContent'
import LoginMain from './Login/LoginMain'
import TaskPageContent from './Pages/PageContent/TaskPageContent/TaskPageContent'
import Error404 from './Errors/Error404'
import Project_Worked from './Project_Worked/Project_Worked'
import getTasks from './utilities/getTasks'
import TaskDetails from './Pages/PageContent/TaskPageContent/components/TaskFullInformationComp' 
//npx json-server projectsDb.json
//npx json-server usersDb.json --port 3001
//npx json-server tasks-server.json --port 3002
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
                    },
                    {
                        path: ""
                    }
                ]
            },
            {
                path: "TaskContent",
                element: <TaskPageContent/>,
                hydrateFallbackElement: <div>Loading...</div>,
                loader: async () => {
                    return await getTasks()
                }
            },
        ]
    },
    {
        path: "/",
        element: <LoginMain/>,
    },
    {
        path: "*",
        element: <Error404/>
    },
    {
        path: "/task/:id",
        element: <TaskDetails/>,
        loader: async ({ params }) => {
            const res = await fetch(
            import.meta.env.VITE_Tasks_SERVER_URL + `/tasks/${Number(params.id)}`
            );
            return res.json();
         },
    },
])
