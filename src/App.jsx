
import React from 'react'
import { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [formData, setFormData] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "survey"), formData);
      alert("제출이 완료되었습니다!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>치과 개원 성향 분석</h2>
      <form onSubmit={handleSubmit}>
        {[1,2,3,4,5,6].map(num => (
          <div key={num}>
            <label>{`Q${num}. 질문 내용 ${num}`}</label><br/>
            <input
              type="text"
              name={`q${num}`}
              value={formData[`q${num}`]}
              onChange={handleChange}
              required
            /><br/><br/>
          </div>
        ))}
        <button type="submit">제출하기</button>
      </form>
    </div>
  );
}

export default App;
