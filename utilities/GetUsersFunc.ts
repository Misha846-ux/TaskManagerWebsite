import { use } from "react";
import type { UserType } from "./Types/UserType";

export async function GetUsers(){
    const response = await fetch(import.meta.env.VITE_USERS_SERVER_URL);
    const data = await response.json();
    return data
}

export async function SearchUser(user: UserType){
    const response = await fetch(import.meta.env.VITE_USERS_SERVER_URL + `?name=${user.name}#password=${user.password}`)
    const data = await response.json();
    return data;
}