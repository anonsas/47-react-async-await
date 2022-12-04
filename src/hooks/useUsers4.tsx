import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserTypes } from '../components/User/User.types';

export const useUsers4 = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<UserTypes[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const newData = data.map((user: UserTypes) => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
        }));
        setUsers(newData);
      } catch (error) {
        navigate('/error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [navigate]);

  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }

  return { users, isLoading };
};
