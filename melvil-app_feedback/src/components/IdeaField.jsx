import React, { useState, useEffect } from 'react';
import { db } from '../db';

function IdeaField() {
  const [idea, setIdea] = useState('');
  return (
    <label htmlFor="">
      nápad na funkci / vylepšení
      <input
        type="textarea"
        id="idea-input"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />
    </label>
  );
}

export default IdeaField;
