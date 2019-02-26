import React from 'React';
import renderer from 'react-test-renderer';
import Dogs from './Dogs';

describe('Characters', () => {
  it('matches a snapshot', () => {
    const dogs = ['rover']; 
    const tree = renderer.create(<Dogs dogs={dogs}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
