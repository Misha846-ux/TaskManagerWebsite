import "./styles/Members.css";
import profile_img from "../Header/photo/profile_image.jpeg";
import { useEffect, useState } from "react";
import { GetUsers } from "../utilities/GetUsersFunc";
import type { UserType } from "../utilities/Types/UserType";
const Members = () => {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(()=>{
        GetUsers().then((value) =>{
            setUsers(value);
        })
    },[])
    
    return(
        <div className="Mambers_background">
            <div className="Members_top">Members</div>
            <div className="Members_content">
                <div className="Scroll_top">
                <div>Member Info</div>
                </div>
                <div className="Scroll_content">
                    {users.map((user) => (
                        <div className="Members_profile" key={user.name}>
                        <img className="Members_profile_image" src={profile_img}/>
                        <div className="Members_profile_name">{user.name}</div>
                        </div>
                    ))}
                
                </div>
            </div>
        </div>
    );
};

export default Members;