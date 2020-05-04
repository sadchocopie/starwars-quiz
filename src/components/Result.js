import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <div className="result">
      <CSSTransitionGroup>
        <h1>You are a...<strong>{props.quizResult}</strong>!</h1>
      </CSSTransitionGroup>
    </div>
  );
}

export default Result;
