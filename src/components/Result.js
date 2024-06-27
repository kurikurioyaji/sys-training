import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state;

//   console.log('Result state:', location.state);  // コンソールにログを出力

  return (
    <div className="container">
      <div className="header">
        <h1>Result</h1>
      </div>
      {result.map((detail, index) => (
        <div key={index} className="result-card">
          <p className="result-icon">{detail.yourAnswer === detail.correctAnswer ? '〇' : '✖'}</p>
          <p>{detail.questionText}</p> {/* 質問のテキストを表示 */}
          <p>Your Answer: {detail.yourAnswer}</p>✖✖
          <p>Correct Answer: {detail.correctAnswer}</p>
        </div>
      ))}
      <button onClick={() => navigate('/menu')}>Back to Menu</button>
    </div>
  );
}

export default Result;
