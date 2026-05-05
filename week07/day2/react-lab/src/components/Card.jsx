// Card.jsx
function Card({ title, children }) {
  return (
    <div>
      <p>{title}</p>
      {children}
    </div>
  );
}

Card.propTypes = {};

export default Card;
