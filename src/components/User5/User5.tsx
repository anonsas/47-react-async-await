import React from 'react';
import { User4Types } from '../User4/User4.types';

function User5({ user }: User4Types) {
  const { name, username, email } = user;
  return (
    <div>
      <span>
        {name} {username} {email}
      </span>
    </div>
  );
}

export default User5;
