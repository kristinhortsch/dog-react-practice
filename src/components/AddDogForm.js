import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

class AddDogForm extends PureComponent {
  static propTypes = {
    addDog: PropTypes.func.isRequired
  }

  state = {
    name: '',
    age: '',
    weight: ''
  }
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, weight } = this.state;
    this.props.addDog({ name, age, weight });
  };

  render() {
    const { name, age, weight } = this.state;
    return (
      <Fragment>
        <h2>Add a Dog</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Name:</span>
            <input type='text' name='name' value={name} onChange={this.handleChange}></input>
          </label>
  
          <label>
            <span>Age:</span>
            <input type='number' name='age' value={age} onChange={this.handleChange}></input>
          </label>
  
          <label>
            <span>Weight:</span>
            <input type='number' name='weight' value={weight} onChange={this.handleChange}></input>
          </label>
  
          <button type="submit">
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

export default AddDogForm;
