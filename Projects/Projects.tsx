import "./styles/Projects.css";
const Projects = () =>{
    const percent_1  = 40;
    const percent_2  = 20;
    const percent_3  = 60;
    const percent_4  = 90;
    return (
        <div className="Projects">
            <div className="Projects_background">
                <div className="Projects_top">Projects</div>
                <form className="Project_content">
                   <div className="Project">
                    <button className="Project_button"></button>
                    <div className="Project_name"><b>Project One</b></div>
                    <div className="Project_percent">{percent_1}%</div>
                    <div className="Project_percent_background_line">
                        <div className="Project_percent_line" style={{"--percent": `${percent_1}%`} as React.CSSProperties}></div>
                    </div>
                   </div>
                   <div className="Project">
                    <button className="Project_button"></button>
                    <div className="Project_name"><b>Project Two</b></div>
                    <div className="Project_percent">{percent_2}%</div>
                    <div className="Project_percent_background_line">
                        <div className="Project_percent_line" style={{"--percent": `${percent_2}%`} as React.CSSProperties}></div>
                    </div>
                   </div>
                   <div className="Project">
                    <button className="Project_button"></button>
                    <div className="Project_name"><b>Project Three</b></div>
                    <div className="Project_percent">{percent_3}%</div>
                    <div className="Project_percent_background_line">
                        <div className="Project_percent_line" style={{"--percent": `${percent_3}%`} as React.CSSProperties}></div>
                    </div>
                   </div>
                   <div className="Project">
                    <button className="Project_button"></button>
                    <div className="Project_name"><b>Project Four</b></div>
                    <div className="Project_percent">{percent_4}%</div>
                    <div className="Project_percent_background_line">
                        <div className="Project_percent_line" style={{"--percent": `${percent_4}%`} as React.CSSProperties}></div>
                    </div>
                   </div>
                </form>
            </div>
        </div>
    );
};
export default Projects;