const API_URL = import.meta.env.VITE_API_URL;

export async function signUp(user: {
    name: string;
    email: string;
    password: string;
}) {
    const response = await fetch(`${API_URL}/Authorization/SingUp`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userName: user.name,
            email: user.email,
            password: user.password,
            settings: ""
        }),
    });

    return response;
}

export async function login(user: {
    name: string;
    password: string;
    email:string;
}) {
    const response = await fetch(`${API_URL}/Authorization/LogIn`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include", 
        body: JSON.stringify({
            UserName: user.name,
            Password: user.password,
            Email: user.email,
        }),
    });

    return response;
}

export async function GetUsers(){
    const response = await fetch(`${API_URL}/User`, {
        credentials: "include"
    });

    if (!response.ok) {
        throw new Error("Unauthorized");
    }

    return await response.json();
}
