import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsersTypes } from '../pages/Users/Users.types';

type fetchUsersTypes = {
  id: string;
  name: string;
  username: string;
  email: string;
};

export const useUsers3 = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<UsersTypes>([]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      const newData = data.map((user: fetchUsersTypes) => ({
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
  }, [navigate]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, isLoading };
};
