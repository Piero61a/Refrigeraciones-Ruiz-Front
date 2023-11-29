export const PostLogin = async (body:any) => {
    try {
        const response = await fetch('http://localhost:3001/auth/login', {
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

