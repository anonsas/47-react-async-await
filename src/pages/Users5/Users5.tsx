import { withUsers } from '../../hooks/withUsers';
import { User5 } from '../../components';
import { UserTypes } from '../../components/User/User.types';

export type User5Types = {
  users: {
    name: string;
    username: string;
    email: string;
  }[];
};

function Users5({ users }: User5Types) {
  return (
    <div>
      <h2>Users5</h2>
      <div>
        {users.map((user: UserTypes) => (
          <User5 key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default withUsers(Users5, 'https://jsonplaceholder.typicode.com/users');
