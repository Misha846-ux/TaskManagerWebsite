import type { UserType } from "./Types/UserType";

export async function GetUsers(){
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    return data
}