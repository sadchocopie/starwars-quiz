import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Card from './Card';

function Result(props) {
  return (
    <div>
      <CSSTransitionGroup
        className="result"
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={800}>
        <h1 className="result-text">You are...<strong>a {props.quizResult}</strong>!</h1>
        <Card personality={props.quizResult}></Card>
      </CSSTransitionGroup>
    </div>
  );
}

export default Result;
