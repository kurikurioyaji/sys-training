import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state;

  return (
    <div className="container">
      <div className="header">
        <h1>Result</h1>
        <img src="/sys-トレ.png" alt="Logo" />
      </div>
      {result.map((detail, index) => (
        <div key={index} className="result-card">
          <p className="result-icon">{detail.yourAnswer === detail.correctAnswer ? '〇正解！' : '✖不正解！'}</p>
          <p>{detail.questionText}</p>
          <p>Your Answer: {detail.yourAnswer}</p>
          <p>Correct Answer: {detail.correctAnswer}</p>
          {detail.explanation && (
            <p className="explanation">Explanation: {detail.explanation}</p>
          )}
        </div>
      ))}      
      <button onClick={() => navigate('/menu')}>Back to Menu</button>
    </div>
  );
}

export default Result;
