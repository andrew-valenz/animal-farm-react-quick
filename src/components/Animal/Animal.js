import '../Animal/Animal.css';

export default function Animal({ prop }) {
  return (
    <div className="animal" style={{ top: `${prop.top}`, left: `${prop.left}` }}>
      <img src={`./animals/${prop.type}.svg`}></img>
      <h3 className="name">{prop.name}</h3>
      <p>{prop.says}</p>
    </div>
  );
}
