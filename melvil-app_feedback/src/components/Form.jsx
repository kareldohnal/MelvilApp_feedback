import React from 'react';
import IdeaField from './IdeaField';

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Zpětná vazba na aplikaci Melvil</h1>
      <IdeaField />
      <button type="submit">Odeslat</button>
    </form>
  );
}

export default Form;
