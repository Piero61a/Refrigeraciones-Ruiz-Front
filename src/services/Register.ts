export const PostRegister = async (body:any) => {
    try {
        const response = await fetch('http://localhost:3001/auth/create', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        });
    
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

