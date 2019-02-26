import React from 'react';
import { shallow } from 'enzyme';
import AddDogForm from './AddDogForm';

describe('Add Dog Form', () => {
  it('adds a dog', () => {
    const addDog = jest.fn();
    const wrapper = shallow(
      <AddDogForm addDog={addDog} />
    );

    wrapper.setState({
      name: 'Spot',
      age: 1,
      weight: 100
    });

    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });

    expect(addDog).toBeCalledWith({ name: 'Spot', age: 1, weight: 100 });
  });
});
