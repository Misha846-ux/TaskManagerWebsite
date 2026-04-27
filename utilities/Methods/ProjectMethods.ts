const API_URL = import.meta.env.VITE_API_URL;

const authHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  "Content-Type": "application/json",
});

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const text = await response.text();
    const message = text || response.statusText;
    throw new Error(`Error ${response.status}: ${message}`);
  }
  return response.status === 204 ? null : response.json();
};

export async function GetProjects() {
  const response = await fetch(`${API_URL}/api/projects/my-projects`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return handleResponse(response);
}

export async function GetProject(projectId: string | number) {
  const response = await fetch(`${API_URL}/api/projects/my/${projectId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return handleResponse(response);
}

export async function UpdateProject(projectId: string | number, data: Record<string, unknown>) {
  const response = await fetch(`${API_URL}/api/projects/my/${projectId}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  return handleResponse(response);
}

export async function DeleteProject(projectId: string | number) {
  const response = await fetch(`${API_URL}/api/projects/my/${projectId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return handleResponse(response);
}

export async function GetProjectUsers(projectId: string | number) {
  const response = await fetch(`${API_URL}/api/projects/${projectId}/users`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return handleResponse(response);
}

export async function AddUserToProject(projectId: string | number, userId: string | number) {
  const response = await fetch(`${API_URL}/api/projects/my/${projectId}/users/${userId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    },
  });
  return handleResponse(response);
}

export async function RemoveUserFromProject(projectId: string | number, userId: string | number) {
  const response = await fetch(`${API_URL}/api/projects/my/${projectId}/users/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return handleResponse(response);
}
