export const GetTools = async (token: any) => {
    try {
      const response = await fetch(`http://localhost:3001/tools`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
  export const GetToolById = async (token: any, id: any) => {
    try {
      const response = await fetch(`http://localhost:3001/tools/${id}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
  
  export const CreateTool = async (token: any, body: any) => {
    try {
      const response = await fetch(`http://localhost:3001/tools`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
  
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
  
  export const UpdateTool = async (token: any, id: any, body: any) => {
    try {
      const response = await fetch(`http://localhost:3001/tools/${id}`, {
        method: 'PATCH',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
  
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
  
  export const DeleteTool = async (token: any, id: any) => {
    try {
      const response = await fetch(`http://localhost:3001/tools/${id}`, {
        method: 'DELETE',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }