import { User } from '../../components';
import { useUsers3 } from '../../hooks/useUsers3';
import { UserTypes } from '../../components/User/User.types';

function Users() {
  const { users, isLoading } = useUsers3();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Users 2</h2>
      <div className="users-container">
        {users.map((user: UserTypes) => (
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
