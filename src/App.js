import React, { Component } from 'react';
import './App.css';

import { Card } from './components/card/card.component';
import ErrorButton from './components/error-button/error-button.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      index: null,
      hasError: false,
      errorMsg: ''
    };
  }

  componentDidMount() {
    console.log("Did Mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users, index: 0 });
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { index, hasError } = this.state;
    console.log('Should Update');
    return nextState.index !== index || nextState.hasError !== hasError;
  }

  componentDidUpdate() {
    console.log("Did Update");
    const card = document.querySelector(".card-container");
    setTimeout(function () {
      card.style.opacity = 1;
    }, 500);
  }

  componentDidCatch(error, info) {
    console.log("catch error");
    console.log(info);
    this.setState({ hasError:true, errorMsg: error.toString() });

  }

  render() {
    const { monsters, index, hasError, errorMsg } = this.state;

    if (hasError) {
      return (
        <div className='error'>
          <p>{ errorMsg }</p>
          <button onClick={ () => this.setState({ hasError:false }) }> Return to the App </button>
        </div>
      );
    }

    return (
      <div className="App">
        {monsters.length !== 0 ? (
          <Card key={monsters[index].id} monster={monsters[index]} />
        ) : null}
        <div className="button-container">
          <button onClick={() => this.setState({ index: 0 })}>Monster 1</button>
          <button onClick={() => this.setState({ index: 1 })}>Monster 2</button>
          <button onClick={() => this.setState({ index: 2 })}>Monster 3</button>
          <ErrorButton />
        </div>
      </div>
    );
  }
}

export default App;
