import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../db';
import { useState, useEffect } from 'react';
import Feedback from './Feedback';
import './list.scss';

function List() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'feedback'),
      orderBy('numberOfUpvotes', 'desc'),
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          title: doc.data().title,
          description: doc.data().desc,
          name: doc.data().userName,
          upvotes: doc.data().numberOfUpvotes,
        };
      });
      console.log(collection(db, 'feedback'));
      setRecommendations(docs);
    });

    return () => unsubscribe();
  }, []);

  const handleUpvote = async (id) => {
    const docRef = collection(db, 'feedback').doc(id);
    const doc = await docRef.get();
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      const updatedUpvotes = doc.data().numberOfUpvotes + 1;
      await docRef.update({
        numberOfUpvotes: updatedUpvotes,
      });
    }
  };

  return (
    <section>
      <h2>Seznam nápadů</h2>
      <div className="feedbackList">
        {recommendations.map((recommendation) => (
          <Feedback
            key={recommendation.id}
            id={recommendation.id}
            title={recommendation.title}
            description={recommendation.description}
            name={recommendation.name}
            upvotes={recommendation.upvotes}
            handleUpvote={handleUpvote}
          />
        ))}
      </div>
    </section>
  );
}

export default List;
