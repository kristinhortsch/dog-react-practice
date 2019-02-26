import React, { Fragment, PureComponent } from 'react';
import AddDogForm from './AddDogForm';
import Dogs from './Dogs';

export default class App extends PureComponent {
  state = {
    dogs: []
  }

  addDog = dog => {
    this.setState(state => {
      return {
        dogs: [...state.dogs, dog]
      };
    })
  }
  
  render() {
    const { dogs } = this.state;
    return (
      <Fragment>
        <h1>WELCOME TO DOG PARADISE</h1>
        <AddDogForm
          dogs={dogs}
          addDog={this.addDog}
        />
        <Dogs  dogs={dogs}/>
      </Fragment>
    );
  }
}

