import React from 'react';
import './card.styles.css';

export class Card extends React.Component {

  state = {
    age: 0,
  }
  

  handleScroll = () => {
    this.setState({ age: window.scrollY });
  }

  componentDidMount() {
    console.log('component mounted');
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    console.log('component updated');
  }

  componentWillUnmount() {
    console.log('component will unmount');
    window.removeEventListener('scroll', this.handleScroll);
  }

  render () {
    const { monster } = this.props;
    return (
      <div className="card-container">
        <img
          alt="monster"
          src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        />
        <h2> {monster.name} </h2>
        <p> Age: {this.state.age}</p>
        <p>{monster.email}</p>
      </div>
    );
  }
}
