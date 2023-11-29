export const GetUserById = async (token: any, id: any) => {
  try {
    const response = await fetch(`http://localhost:3001/user/${id}`, {
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

export const PatchUserById = async (token: any, id: any, body: any) => {
  try {
    const response = await fetch(`http://localhost:3001/user/${id}`, {
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

