import React, {Component} from 'react';
import './App.scss';
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz'
import Result from './components/Result'
import Hero from './components/Hero'

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

    var random= Math.floor(Math.random() * 4) + 0;
    var bigSize = ["url('./assets/BannerBlue.png')",
    "url('./assets/BannerOrange.png')",
    "url('./assets/BannerPINK.png')",
    "url('./assets/BannerViolet.png')"];
    document.getElementsByClassName("App-header")[0].style.backgroundImage=bigSize[random];
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

  // object composition
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
      //delay before showing result
      setTimeout(() => this.setResults(this.getResults()), 300);
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

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults (result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    }
    else if (result.indexOf('Jedi') === -1) {
      this.setState({ result: 'Spice Smuggler' });
    }
    else if (result.indexOf('Bounty Hunter') === -1) {
      this.setState({ result: 'Droid' });
    }
    else {
      this.setState({ result: 'Hutt Crime Lord' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  randombg(){
    var random= Math.floor(Math.random() * 4) + 0;
    var bigSize = ["url('./assets/BannerBlue.png')",
    "url('./assets/BannerOrange.png')",
    "url('./assets/BannerPINK.png')",
    "url('./assets/BannerViolet.png')"];
    document.getElementsByClassName[0]("App-header").style.backgroundImage=bigSize[random];
    document.getElementById("hero-text").style.color="black";
  }
  // <header className="App-header">
  //   <div class="hero-text">
  //     <h1>What are you in the Star Wars Universe?</h1>
  //   </div>
  // </header>

  render() {
    return (
      <div className="App">
        <Hero></Hero>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        <div className="footer">Created by Harriet and Daniel</div>
      </div>
    );
  }
}

export default App;
