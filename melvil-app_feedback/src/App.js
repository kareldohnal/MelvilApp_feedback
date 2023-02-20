import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import './app.scss';
import Hero from './components/Hero';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  return (
    <>
      <Hero />
      <Form
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        name={userName}
        setName={setUserName}
        email={userEmail}
        setEmail={setUserEmail}
        recommendations={recommendations}
        setRecommendations={setRecommendations}
      />
      <List
        setRecommendations={setRecommendations}
        recommendations={recommendations}
      />
    </>
  );
}

export default App;
