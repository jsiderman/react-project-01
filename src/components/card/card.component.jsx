import { Component } from 'react';

import './card.styles.css';

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className='card-container' key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}/?set=set4&size=200x200`}
        ></img>
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>
    );
  }
}

export default Card;
