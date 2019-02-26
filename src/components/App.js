import React, { Fragment, PureComponent } from 'react';
import AddDogForm from './AddDogForm';
import 'normalize-css';

export default class App extends PureComponent {
  state = {
    name: '', 
    age: '',
    weight: ''
  }

  handleSubmit = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { 
      name,
      age,
      weight
    } = this.state;
    return (
      <Fragment>
        <h1>WELCOME TO DOG PARADISE</h1>
        <AddDogForm
          name={name}
          age={age}
          weight={weight}
          handleSubmit={this.handleSubmit}
        />
      </Fragment>
    );
  }
}


// import React, { Fragment } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from 'react-router-dom';
// import Container from './Container';

// export default function App() {
//   return (
//     <Fragment>
//       <Router>
//         <Switch>
//           <Route exact path='/' component={Container}/>
//         </Switch>
//       </Router>
//     </Fragment>
//   );


// }
