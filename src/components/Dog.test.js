import React from 'React';
import renderer from 'react-test-renderer';
import Dog from './Dog';

describe('Location', () => {
  it('matches a snapshot', () => {
    const dog = {
      name: 'Rover',
      age: 1,
      weight: 12
    };
    const tree = renderer.create(<Dog dog={dog} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
