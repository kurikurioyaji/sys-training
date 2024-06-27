import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import './Test.css';

function Test() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    api.get(`/api/questions?categoryId=${categoryId}`)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  }, [categoryId]);

  const handleChange = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    api.post('/api/results/submit', {
      userId: localStorage.getItem('userId'),
      userName: localStorage.getItem('userName'),
      categoryId,
      answers,
    }).then((response) => {
      navigate('/result', { state: { result: response.data } });
    }).catch((error) => {
      console.error('Error submitting answers:', error);
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Test</h1>
      </div>
      {questions.map((question) => (
        <div key={question.id} className="question-card">
          <p>{question.text}</p>
          {JSON.parse(question.choices).map((choice) => (
            <div key={choice} className="choice">
              <input
                type="radio"
                name={question.id}
                value={choice}
                onChange={() => handleChange(question.id, choice)}
              />
              <label>{choice}</label>
            </div>
          ))}
        </div>
      ))}
      <div className="button-container">
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
        <button className="back-button" onClick={() => navigate('/menu')}>Back to Menu</button>
      </div>
    </div>
  );
}

export default Test;
