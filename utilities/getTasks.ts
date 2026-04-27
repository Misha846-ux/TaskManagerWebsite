export default async function getTasks() {
   const response = await fetch(import.meta.env.VITE_Tasks_SERVER_URL);
   return response.json();
}