import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Dog({ dog }) {
  const { name, age, weight } = dog;
  return (
    <Fragment>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Weight: {weight} lbs</p>
    </Fragment>
  );
}

Dog.propTypes = {
  dog: PropTypes.object.isRequired
};

export default Dog;
