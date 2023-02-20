import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './../db';
import './form.scss';

function Form({
  title,
  setTitle,
  setName,
  name,
  email,
  setEmail,
  setDescription,
  description,
}) {
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'feedback'), {
        dateCreated: Date.now(),
        desc: description,
        numberOfUpvotes: 0,
        title: title,
        userEmail: email,
        userName: name,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputWrapper">
          <label>Nápad: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="inputWrapper">
          <label>Popis nápadu: </label>
          <textarea
            name="desc"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div className="inputWrapper">
          <label>Vaše jméno (nepovinné): </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        {/*  <label>
          Email (optional):
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label> */}
        <br />
        <input type="submit" value="Odeslat" className="submit" />
      </form>
    </div>
  );
}

export default Form;
