import { useUsers4 } from '../../hooks/useUsers4';
import { User4 } from '../../components';
import { UserTypes } from '../../components/User/User.types';

function Users4() {
  const { users, isLoading } = useUsers4();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Users4</h2>
      <div>
        {users.map((user: UserTypes) => (
          <User4 key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users4;
