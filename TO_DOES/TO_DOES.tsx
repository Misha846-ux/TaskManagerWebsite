import "./styles/TO_DOES.css";
const TO_DOES = () => {
    const percent_1  = 40;
    const percent_2  = 20;
    const percent_3  = 60;
    const percent_4  = 90;
    return(
    <div className="TO_DOES_background">
        <div className="TO_DOES_top">To Do</div>
        <div className="TO_DOES_content">
        <div className="TO_DOES_Scroll_top">
            <div>To Does</div>
            <div className="TO_DOES_Scroll_top_name">Percent</div>
        </div>
        <form className="TO_DOES_Project_content">
            <div className="TO_DOES_Project">
                <button className="TO_DOES_Project_button"></button>
                <div className="TO_DOES_Project_name"><b>Project One </b></div>
                <div className="TO_DOES_Project_percent">{percent_1}%</div>
                <div className="TO_DOES_Project_percent_background_line">
                    <div className="TO_DOES_Project_percent_line" style={{"--percent": `${percent_1}%`} as React.CSSProperties}></div>
                </div>
            </div>
            <div className="TO_DOES_Project">
                    <button className="TO_DOES_Project_button"></button>
                    <div className="TO_DOES_Project_name"><b>Project Two</b></div>
                    <div className="TO_DOES_Project_percent">{percent_2}%</div>
                    <div className="TO_DOES_Project_percent_background_line">
                        <div className="TO_DOES_Project_percent_line" style={{"--percent": `${percent_2}%`} as React.CSSProperties}></div>
                    </div>
                   </div>
                   <div className="TO_DOES_Project">
                    <button className="TO_DOES_Project_button"></button>
                    <div className="TO_DOES_Project_name"><b>Project Three</b></div>
                    <div className="TO_DOES_Project_percent">{percent_3}%</div>
                    <div className="TO_DOES_Project_percent_background_line">
                        <div className="TO_DOES_Project_percent_line" style={{"--percent": `${percent_3}%`} as React.CSSProperties}></div>
                    </div>
                   </div>
                   <div className="TO_DOES_Project">
                    <button className="TO_DOES_Project_button"></button>
                    <div className="TO_DOES_Project_name"><b>Project Four</b></div>
                    <div className="TO_DOES_Project_percent">{percent_4}%</div>
                    <div className="TO_DOES_Project_percent_background_line">
                        <div className="TO_DOES_Project_percent_line" style={{"--percent": `${percent_4}%`} as React.CSSProperties}></div>
                    </div>
                   </div>
        </form>
        </div>
    </div>
);
};
export default TO_DOES;