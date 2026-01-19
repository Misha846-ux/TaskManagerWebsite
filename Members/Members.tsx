import "./styles/Members.css";
import type { Profile } from "../Header/type/Profile";
import profile_img from "../Header/photo/profile_image.jpeg";
const Members = () => {
    const profile_1:Profile={
        name: "Ruslan",
        surname:"Opihaylenko",
        image: profile_img,
    };
    const profile_2:Profile={
        name: "Misha",
        surname:"Gladkov",
        image: profile_img,
    };
    const profile_3:Profile={
        name: "Dania",
        surname:"Kutumov",
        image: profile_img,
    };
    return(
        <div className="Mambers_background">
            <div className="Members_top">Members</div>
            <div className="Members_content">
                <div className="Scroll_top">
                <div>Member Info</div>
                </div>
                <div className="Scroll_content">
                <div className="Members_profile">
                    <img className="Members_profile_image" src={profile_1.image}/>
                    <div className="Members_profile_name">{profile_1.name} {profile_1.surname}</div>
                </div>
                <div className="Members_profile">
                    <img className="Members_profile_image" src={profile_2.image}/>
                    <div className="Members_profile_name">{profile_2.name} {profile_2.surname}</div>
                </div>
                <div className="Members_profile">
                    <img className="Members_profile_image" src={profile_3.image}/>
                    <div className="Members_profile_name">{profile_3.name} {profile_3.surname}</div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Members;