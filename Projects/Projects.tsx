import { useEffect, useState } from "react";
import "./styles/Projects.css";
import {
  GetProjects,
  UpdateProject,
  DeleteProject,
} from "../utilities/Methods/ProjectMethods";
import type { ProjectType } from "../utilities/Types/ProjectType";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import ActionsMenu from "../ActionsMenu/ActionsMenu";

const API_URL = import.meta.env.VITE_API_URL;
const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(() => {
    const stored = localStorage.getItem("selectedProjectId");
    return stored ? Number(stored) : null;
  });
  const [editingProjectId, setEditingProjectId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const query = useSelector((state: RootState) => state.search.query);
  const navigate = useNavigate();
  const { companyId } = useParams();

  const persistSelectedProjectId = (projectId: number | null) => {
    setSelectedProjectId(projectId);
    if (projectId === null) {
      localStorage.removeItem("selectedProjectId");
    } else {
      localStorage.setItem("selectedProjectId", String(projectId));
    }
  };

  const loadProjects = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await GetProjects();
      setProjects(Array.isArray(result) ? result : []);
    } catch (err) {
      console.error(err);
      setError("Unable to load projects.");
      setProjects([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, [companyId]);

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const [newProject, setNewProject] = useState({
    title: ""
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onHandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const companyIdValue = Number(localStorage.getItem("companyId"));

    try {
      const response = await fetch(`${API_URL}/api/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
          Title: newProject.title,
          CompanyId: companyIdValue,
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error ${response.status}: ${text}`);
      }

      await loadProjects();
      setIsCreateOpen(false);
      setNewProject({ title: "" });
    } catch (err) {
      console.error(err);
      setError("Unable to create project.");
    }
  };

  const handleDelete = async (id: string | number) => {
    try {
      await DeleteProject(id);
      setProjects((prev) => prev.filter((project) => project.id !== Number(id)));
      if (selectedProjectId === Number(id)) persistSelectedProjectId(null);
    } catch (err) {
      console.error(err);
      setError("Unable to delete project.");
    }
  };

  const handleEditStart = (id: string | number, title: string) => {
    setEditingProjectId(Number(id));
    setEditTitle(title);
  };

  const handleEditCancel = () => {
    setEditingProjectId(null);
    setEditTitle("");
  };

  const handleUpdate = async (id: string | number) => {
    if (!editTitle.trim()) return;
    try {
      await UpdateProject(id, { title: editTitle.trim() });
      setProjects((prev) =>
        prev.map((project) =>
          project.id === Number(id)
            ? {
                ...project,
                title: editTitle.trim(),
              }
            : project
        )
      );
      if (selectedProjectId === Number(id)) {
        persistSelectedProjectId(Number(id));
      }
      handleEditCancel();
    } catch (err) {
      console.error(err);
      setError("Unable to update project.");
    }
  };

  const handleManageMembers = (id: string | number) => {
    persistSelectedProjectId(Number(id));
    navigate(`/MainPage/Members/${id}`);
  };

  const handleProjectClick = (id: string | number) => {
    persistSelectedProjectId(Number(id));
    navigate(`/MainPage/TaskContent/${id}`);
  };

  return (
    <div className="Projects">
      <div className="Projects_background">
        <div className="Projects_top">
          Projects
          <button className="Project_create_button" onClick={() => setIsCreateOpen(true)}>
            Create +
          </button>
        </div>

        {isCreateOpen && (
          <form className="project_create_box" onMouseLeave={() => setIsCreateOpen(false)} onSubmit={onHandleSubmit}>
            <div className="project_create_context">
              <div className="project_insert">
                <label className="project_top"><b>Title</b></label>
                <input
                  className="project_input"
                  type="text"
                  name="title"
                  placeholder="Write title friend"
                  value={newProject.title}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <button className="project_create" type="submit">Create</button>
          </form>
        )}

        <div className="Project_content">
          {error && <div className="No_projects"><b>{error}</b></div>}
          {isLoading && !projects.length ? (
            <div className="No_projects"><b>Loading projects...</b></div>
          ) : !projects.length ? (
            <div className="No_projects"><b>No projects</b></div>
          ) : (
            projects
              .filter((item) => {
                if (query === "") {
                  return true;
                }
                return item.title.toLowerCase().includes(query.toLowerCase());
              })
              .map((item) => {
                const percent = item.totalTasks === 0 ? 0 : Math.round((item.tasksDone / item.totalTasks) * 100);
                const isActive = item.id === selectedProjectId;
                return (
                  <div
                    key={item.id}
                    className={`TO_DOES_Project${isActive ? ' active' : ''}`}
                    style={{ position: 'relative' }}
                  >
                    <div style={{ position: 'absolute', top: '5px', right: '5px' }}>
                      <ActionsMenu
                        entityId={item.id}
                        onDelete={handleDelete}
                        onUpdate={() => handleEditStart(item.id, item.title)}
                        onManageMembers={handleManageMembers}
                      />
                    </div>
                    <button className="TO_DOES_Project_button" type="button" onClick={() => handleProjectClick(item.id)} />

                    {editingProjectId === item.id ? (
                      <div className="Project_edit_box">
                        <input
                          className="project_input"
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          placeholder="Project title"
                        />
                        <button className="project_create" type="button" onClick={() => handleUpdate(item.id)}>
                          Save
                        </button>
                        <button className="project_create" type="button" onClick={handleEditCancel}>
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="TO_DOES_Project_name"><b>{item.title}</b></div>
                        <div className="TO_DOES_Project_percent">{percent}%</div>
                        <div className="TO_DOES_Project_percent_background_line">
                          <div
                            className="TO_DOES_Project_percent_line"
                            style={{ "--percent": `${percent}%` } as React.CSSProperties}
                          ></div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })
          )}
        </div>
      </div>
    </div>
  );
};
export default Projects;