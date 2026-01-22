import { useEffect, useState } from "react";
import "./styles/Projects.css";
import { GetProjects } from "../utilities/GetProjectsFunc";
import type { ProjectType } from "../utilities/Types/ProjectType";
const Projects = () =>{
    const [projects, SetProjects] = useState<ProjectType[]>([]);
        useEffect(()=>{
            GetProjects().then((value) => {
                SetProjects(value);
            })
        },[])  
    return (
        <div className="Projects">
            <div className="Projects_background">
                <div className="Projects_top">Projects</div>
                <div className="Project_content">
                   {projects.map((item) => (<div className="TO_DOES_Project" key={item.title}>
                <button className="TO_DOES_Project_button"></button>
                <div className="TO_DOES_Project_name"><b>{item.title}</b></div>
                <div className="TO_DOES_Project_percent">{Math.round((item.tasksDone / item.totalTasks) * 100)}%</div>
                <div className="TO_DOES_Project_percent_background_line">
                    <div className="TO_DOES_Project_percent_line" style={{"--percent": `${Math.round((item.tasksDone / item.totalTasks) * 100)}%`} as React.CSSProperties}></div>
                </div>
            </div>))}
                </div>
            </div>
        </div>
    );
};
export default Projects;