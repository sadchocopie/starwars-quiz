import React from 'react';

function Result(props) {
  return (
    <div className="result">
      <h1>You are a...<strong>{props.quizResult}</strong>!</h1>
    </div>
  );
}

export default Result;
