const token = '8a9d12fc6f678d1ddda92986efba90ef80828359be374b60'


export const server_calls = {
    get: async () => {
        const response = await fetch('https://car-inventory-jf.herokuapp.com/api/cars',{
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
        const response = await fetch('https://car-inventory-jf.herokuapp.com/api/cars',{
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
        const response = await fetch(`https://car-inventory-jf.herokuapp.com/api/cars/${id}`,{
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
        const response = await fetch(`https://car-inventory-jf.herokuapp.com/api/cars/${id}`,{
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