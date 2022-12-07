import { useState } from 'react';

const initialState = {
  firstName: 'Bruce',
  lastName: 'Wayne',
};

const initState = ['Bruce', 'Wayne'];

function ImmutableState() {
  const [person, setPerson] = useState(initialState);
  const [persons, setPersons] = useState(initState);

  const changeName = () => {
    // THE VALUES ARE CHANGED. BUT OBJECT'S REFERENCE
    // DIDN'T CHANGE. AND IT DOESN'T CAUSE A RE-RENDER
    // person.firstName = 'Clark';
    // person.lastName = 'Kent';
    // setPerson(person);

    // SOLUTION:
    const newPerson1 = { ...person };
    newPerson1.firstName = 'Clark';
    newPerson1.lastName = 'Kent';
    const newPerson2 = { ...person, firstName: 'Clark', lastName: 'Kent' };
    setPerson(newPerson1);
  };

  const handleClick = () => {
    // THE VALUES ARE CHANGED. BUT ARRAYS REFERENCE
    // DIDN'T CHANGE. AND IT DOESN'T CAUSE A RE-RENDER
    // persons.push('Clark');
    // persons.push('Kent');
    // setPersons(persons);

    // SOLUTION:
    const newPersons = [...persons];
    newPersons.push('Clark');
    newPersons.push('Kent');
    setPersons(newPersons);
  };

  console.log('Object useState Render');

  return (
    <div>
      <h2>ImmutableState</h2>
      <button onClick={changeName}>
        {person.firstName} {person.lastName}
      </button>

      <button onClick={handleClick}>Click</button>
      {persons.map((person) => (
        <p key={person}>{person}</p>
      ))}
    </div>
  );
}

export default ImmutableState;
