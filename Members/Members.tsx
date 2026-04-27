import "./styles/Members.css";
import profile_img from "../Header/photo/profile_image.jpeg";
import { useEffect, useState } from "react";
import {
  GetProjectUsers,
  AddUserToProject,
  RemoveUserFromProject,
} from "../utilities/Methods/ProjectMethods";
import type { UserType } from "../utilities/Types/UserType";
import { useNavigate, useParams } from "react-router-dom";

interface MembersProps {
  projectId?: string | number;
}

const Members: React.FC<MembersProps> = ({ projectId: projectIdProp }) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [newUserId, setNewUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { companyId } = useParams();
  const navigate = useNavigate();

  const projectId = projectIdProp || localStorage.getItem("selectedProjectId");

  const loadUsers = async () => {
    if (!projectId) {
      setUsers([]);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const result = await GetProjectUsers(projectId);
      setUsers(Array.isArray(result) ? result : []);
    } catch (err) {
      console.error(err);
      setError("Unable to load project members.");
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [projectId, companyId]);

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectId || !newUserId.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      await AddUserToProject(projectId, Number(newUserId));
      setNewUserId("");
      await loadUsers();
    } catch (err) {
      console.error(err);
      setError("Failed to add user to project.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveUser = async (userId: number) => {
    if (!projectId) return;

    setIsLoading(true);
    setError(null);
    try {
      await RemoveUserFromProject(projectId, userId);
      await loadUsers();
    } catch (err) {
      console.error(err);
      setError("Failed to remove user from project.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="Mambers_background">
      <div className="Members_top">
        Members
        <button onClick={handleLogout} className='User_create_button'>Logout</button>
      </div>
      <div className="Members_content">
        <div className="Scroll_top">
          <div>Project members</div>
        </div>
        <form className="Members_add_form" onSubmit={handleAddUser}>
          <input
            className="Members_input"
            type="number"
            min="1"
            placeholder="Add user by id"
            value={newUserId}
            onChange={(e) => setNewUserId(e.target.value)}
          />
          <button className="Members_add_button" type="submit" disabled={isLoading || !projectId}>
            Add
          </button>
        </form>
        <div className="Scroll_content">
          {!projectId ? (
            <div className="No_users"><b>Select a project to manage members.</b></div>
          ) : isLoading ? (
            <div className="No_users"><b>Loading members...</b></div>
          ) : error ? (
            <div className="No_users"><b>{error}</b></div>
          ) : !users.length ? (
            <div className="No_users"><b>No members in this project.</b></div>
          ) : (
            users.map((user) => (
              <div className="Members_profile" key={user.id}>
                <img className="Members_profile_image" src={profile_img} />
                <div className="Members_profile_name">{user.userName}</div>
                <button className="Members_remove_button" type="button" onClick={() => handleRemoveUser(user.id)}>
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Members;
