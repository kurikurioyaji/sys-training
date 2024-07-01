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
    api.get(`/questions?categoryId=${categoryId}`)
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
    api.post('/results/submit', {
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
        <img src="/sys-トレ.png" alt="Logo" />
      </div>
      {questions.map((question) => (
        <div key={question.id} className="question-card">
          <p>{question.text}</p>
          {JSON.parse(question.choices).map((choice, index) => (
            <div key={choice} className="choice">
              <button
                className={answers[question.id] === choice ? 'selected' : ''}
                onClick={() => handleChange(question.id, choice)}
              >
                {index + 1}
              </button>
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
