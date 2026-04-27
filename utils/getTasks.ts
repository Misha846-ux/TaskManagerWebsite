export default async function getTasks() {
   const response = await fetch('http://localhost:3000/tasks');
   return response.json();
}