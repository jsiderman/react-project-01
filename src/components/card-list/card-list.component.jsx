import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    const { monsters, id } = this.props;
    return (
      <div key={id} className='card-list'>
        {monsters.map((monster) => {
          return <Card key={id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
