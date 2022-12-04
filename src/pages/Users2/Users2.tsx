import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../../utils/fetchUsers.utils';
import { UserTypes } from '../../components/User/User.types';
import { User } from '../../components';

function Users() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<UserTypes[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetchUsers();
  //       setUsers(response);
  //     } catch (error) {
  //       navigate('/error');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response);
      } catch (error) {
        navigate('/error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Users 2</h2>
      <div className="users-container">
        {users.map((user) => (
          <User
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
}

export default Users;
