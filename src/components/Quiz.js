import React from 'react';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

function Quiz(props) {

  function renderAnswerOptions(key) {
    return (
      <AnswerOption
      key={key.content}
      answerContent={key.content}
      answerType={key.type}
      answer={props.answer}
      questionId={props.questionId}
      onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <div className="quiz">
    <div key={props.questionId}>
    <QuestionCount counter={props.questionId} total={props.questionTotal} />
    <Question content={props.question} />
    <ul className="answerOptions">
    {props.answerOptions.map(renderAnswerOptions)}
    </ul>
    </div>
    </div>
  );
}

export default Quiz;
