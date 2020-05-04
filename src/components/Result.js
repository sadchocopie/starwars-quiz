import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Card from './Card';
import Share from './Share'

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
        <Share result={props.quizResult}></Share>
      </CSSTransitionGroup>
    </div>
  );
}

export default Result;
