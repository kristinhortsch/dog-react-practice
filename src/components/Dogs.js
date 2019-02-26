import React from 'react';
import Dog from './Dog';
import PropTypes from 'prop-types';

function Dogs({ dogs }) {
  const listOfDogs = dogs.map(dog => {
    return <li key={dog.name}><Dog dog={dog}/></li>;
  });

  return (
    <div>
      <h3>Dog List</h3>
      <ul>
        {listOfDogs}
      </ul>
    </div>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
