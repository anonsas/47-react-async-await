import { UserTypes } from './User.types';

function User({ name, username, email }: UserTypes) {
  return (
    <div className="user">
      <span>
        {name} {username} {email}
      </span>
    </div>
  );
}

export default User;
