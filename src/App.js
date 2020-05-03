import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question,
      answerOptions:shuffledAnswerOptions[0]
    });
  }

  //randomise array (the order of the answer options)
  //fisher-yates algorithm
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      //pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -=1;
      //swap with current elements
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  // object composition because user could click more than once before selecting an final answer
  setUserAnswer(answer) {
    // fuctional setState to access previous state "answer",
    this.setState((state) => ({
      // update answer without mutating it directly
      answersCount: {...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer:answer
    }))
  }

  //select answer + set next question
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    //while user havent finished all questions
    if(this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(),300);
    } else {
      // do nothing
    }
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter:counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer:''
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h2>React Quiz</h2>
        <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
          />
      </div>
    );
  }
}

export default App;
