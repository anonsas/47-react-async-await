type fetchUsersTypes = {
  id: string;
  name: string;
  username: string;
  email: string;
};

export const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const newData = data.map((user: fetchUsersTypes) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    }));
    return newData;
  } catch (error) {
    throw error;
  }
};
