const token = 'b4eb590ec9975c1ce7504eb6f264756738962c23c7fd6589'


export const server_calls = {
    get: async () => {
        const response = await fetch('http://127.0.0.1:5000/',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        
        if (!response.ok){
            throw new Error('Failed to fetch your data from server..')
        }
        return await response.json()
    },
    create: async (data: any = {}) =>{
        const response = await fetch('http://127.0.0.1:5000/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create your car..')
        }
        return await response.json()
    },
    update: async (id:string, data: any = {}) =>{
        const response = await fetch(`http://127.0.0.1:5000/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to update your car..')
        }
        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`http://127.0.0.1:5000/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
        if (!response.ok){
            throw new Error('Failed to delete your car..')
        }
    }
};