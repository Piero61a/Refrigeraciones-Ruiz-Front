export const GetEmployees = async (token: any) => {
  try {
    const response = await fetch(`http://localhost:3001/employees`, {
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
export const GetEmployeesById = async (token: any, id: any) => {
  try {
    const response = await fetch(`http://localhost:3001/employees/${id}`, {
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

export const CreateEmployees = async (token: any, body: any) => {
  try {
    const response = await fetch(`http://localhost:3001/employees`, {
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

export const UpdateEmployees = async (token: any, id: any, body: any) => {
  try {
    const response = await fetch(`http://localhost:3001/employees/${id}`, {
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

export const DeleteEmployees = async (token: any, id: any) => {
  try {
    const response = await fetch(`http://localhost:3001/employees/${id}`, {
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