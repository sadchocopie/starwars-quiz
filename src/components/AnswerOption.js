import React from 'react';

function AnswerOption(props) {
  return (
    <li className="AnswerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        chekcked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
        />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );
}

export default AnswerOption;
