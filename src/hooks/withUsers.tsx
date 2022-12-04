import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserTypes } from '../components/User/User.types';

export const withUsers = (Element: React.ElementType, url: string) => {
  return (props: any) => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState<UserTypes[]>([]);

    const fetchUsers = useCallback(async () => {
      try {
        const response = await fetch(url);
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
    }, [navigate]);

    useEffect(() => {
      fetchUsers();
    }, [fetchUsers]);

    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    return <Element {...props} users={users} />;
  };
};
