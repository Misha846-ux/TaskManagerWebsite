import React from 'react'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import MainContent from './Pages/PageContent/MainContent/MainContent'
import LoginMain from './Login/LoginMain'
import TaskPageContent from './TaskPageContent/TaskPageContent'
import Error404 from './Errors/Error404'
import Project_Worked from './Project_Worked/Project_Worked'
<<<<<<< HEAD
import getTasks from './utilities/getTasks'
import TaskDetails from './TaskPageContent/components/TaskFullInformationComp' 
=======
import getTasks from './utilities/Methods/getTasks'
import LoginIn from './Login/LoginIn'
import ForgotPassword from './Login/ForgotPassword'
import ProtectedRoute from './Protected_Router'
>>>>>>> d10d65af7a3d73ed28e2df4ae2489846115ffa46
//npx json-server projectsDb.json
//npx json-server usersDb.json --port 3001
//npx json-server tasks-server.json --port 3002
export const router = createBrowserRouter([
    {
        element:<ProtectedRoute/>,
        children: [
            {
            path: "/MainPage",
            element: <MainPage />,
            children: [
                {
                    path: "MainContent/",
                    element: <MainContent/>,
                    children: [
                    {
                        path: "company/:companyId",
                        element: <Project_Worked/>,
                    },
                    {
                        path: "",
                        element: <Project_Worked/>,
                    },
                    {
                        path: ""
                    }
<<<<<<< HEAD
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
=======
                    ]
                },
                {
                path: "TaskContent/:id",
                element: <TaskPageContent/>,
                hydrateFallbackElement: <div>Loading...</div>,
                loader: async ({params}) => {
                    return await getTasks(params.id as string)
                }
                }
            ]
        }
    ]
>>>>>>> d10d65af7a3d73ed28e2df4ae2489846115ffa46
    },
    {
        path: "/",
        element: <LoginMain/>,
<<<<<<< HEAD
=======
    },
    {
        path:"/LoginIn",
        element:<LoginIn/>,
    },
    {
        path: "/ForgotPassword",
        element: <ForgotPassword/>
>>>>>>> d10d65af7a3d73ed28e2df4ae2489846115ffa46
    },
    {
        path: "*",
        element: <Error404/>
<<<<<<< HEAD
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
=======
    } 
>>>>>>> d10d65af7a3d73ed28e2df4ae2489846115ffa46
])
