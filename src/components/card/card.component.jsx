import './card.styles.css';

const Card = ({ monster }) => {
  const { id, name, email } = monster;
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
};

export default Card;
