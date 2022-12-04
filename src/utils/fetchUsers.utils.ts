import { UserTypes } from '../components/User/User.types';

export const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const newData = data.map((user: UserTypes) => ({
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
