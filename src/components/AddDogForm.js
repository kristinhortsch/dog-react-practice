import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function AddDogForm({ name, age, weight, handleSubmit }) {
  return (
    <Fragment>
      <h2>Add a Dog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input type='text' name='name' value={name}></input>
        </label>

        <label>
          <span>Age:</span>
          <input type='number' name='age' value={age}></input>
        </label>

        <label>
          <span>Weight:</span>
          <input type='number' name='weight' value={weight}></input>
        </label>

        <button type="submit">
          Submit
        </button>
      </form>
    </Fragment>
  );
}

AddDogForm.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  handleSubmit: PropTypes.function
};

export default AddDogForm;
