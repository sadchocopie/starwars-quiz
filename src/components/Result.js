import React from 'react';

function Result(props) {
  return (
    <div className="result">
      <h2>You are a <strong>{props.quizResult}</strong>!</h2>
    </div>
  );
}

export default Result;
