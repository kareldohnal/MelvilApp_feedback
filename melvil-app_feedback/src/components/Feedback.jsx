import React from 'react';
import './feedback.scss';

function Feedback({ title, description, name, upvotes, handleUpvote, id }) {
  return (
    <div className="feedback">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Navrhl(a):</strong> {name === '' ? 'anonym' : name}
      </p>
      <p>
        <strong>Počet hlasů:</strong> {upvotes}
      </p>
      <button onClick={handleUpvote} id={id}>Přidat hlas</button>
    </div>
  );
}

export default Feedback;
