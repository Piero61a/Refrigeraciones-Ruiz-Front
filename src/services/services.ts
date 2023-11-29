export const GetServices = async (token: any) => {
  try {
    const response = await fetch(`http://localhost:3001/services`, {
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
export const GetServicesById = async (token: any, id: any) => {
  try {
    const response = await fetch(`http://localhost:3001/services/${id}`, {
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

export const CreateService = async (token: any, body: any) => {
  try {
    const response = await fetch(`http://localhost:3001/services`, {
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

export const UpdateService = async (token: any, id: any, body: any) => {
  try {
    const response = await fetch(`http://localhost:3001/services/${id}`, {
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

export const DeleteService = async (token: any, id: any) => {
  try {
    const response = await fetch(`http://localhost:3001/services/${id}`, {
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