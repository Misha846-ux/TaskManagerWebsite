export default async function getTasks() {
    const baseUrl = import.meta.env.VITE_API_URL + '/Tasks/admin/GetAll';
    let limit = 10;
    let page = 1;

    let collected: any[] = [];

    while (collected.length <= 3) {
        const response = await fetch(`${baseUrl}?pagenum=${page}&limit=${limit}`);

        if (!response.ok) {
            throw new Error("Failed to fetch tasks");
        }

        const data = await response.json();

        const tasks = data.items ?? data;

        if (!tasks.length) break; 

        collected.push(...tasks);

        if (tasks.length < limit) break; 

        limit++;
    }

    // return only 10 tasks
    return collected.slice(0, 3);
}