import './User4.scss';
import { User4Types } from './User4.types';

function User4({ user }: User4Types) {
  const { name, username, email } = user;

  return (
    <div>
      <span>
        {name} {username} {email}
      </span>
    </div>
  );
}

export default User4;
