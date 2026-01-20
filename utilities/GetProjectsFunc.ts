import React from "react";

export async function GetProjects(){
    const response = await fetch("http://localhost:3000/projects");
    const data = await response.json();
    return data;
}