import React from "react";
const API_URL = import.meta.env.VITE_API_URL;

export async function GetProjects(companyId:number){
    const response = await fetch(`${API_URL}/Projects/by-company/${companyId}`, {
    headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
  }
});

    if (!response.ok) {
        throw new Error("Unauthorized");
    }

    return await response.json();
}