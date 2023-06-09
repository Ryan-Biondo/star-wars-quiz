import { useState } from 'react';
import './App.css';
import Question from './components/Question';

interface Props {
  questionText: string;
  answers: { text: string; value: string }[];
}

const questions: Props[] = [
  {
    questionText:
      'You find an object of great power. Do you use it for personal gain, or seek to understand it?',
    answers: [
      { text: 'Use it', value: 'dark' },
      { text: 'Understand it', value: 'light' },
    ],
  },
  {
    questionText: 'You see a stranger in trouble. Do you intervene?',
    answers: [
      { text: 'Yes, immediately', value: 'light' },
      { text: "No, it's not my problem", value: 'dark' },
    ],
  },
  {
    questionText:
      'You have the chance to learn a new skill. Do you prefer physical training or mental exercise?',
    answers: [
      { text: 'Physical training', value: 'dark' },
      { text: 'Mental exercise', value: 'light' },
    ],
  },
  {
    questionText:
      'There is a conflict among your friends. Do you manipulate them to achieve peace or try to mediate the conflict?',
    answers: [
      { text: 'Manipulate them', value: 'dark' },
      { text: 'Mediate the conflict', value: 'light' },
    ],
  },
  {
    questionText:
      'A powerful enemy is attacking your home. Do you defend your home, risking your life, or escape to save yourself?',
    answers: [
      { text: 'Defend your home', value: 'light' },
      { text: 'Escape to save yourself', value: 'dark' },
    ],
  },
  {
    questionText:
      'You have the chance to achieve your ambition but at a great cost. Do you seize the chance or give up your ambition?',
    answers: [
      { text: 'Seize the chance', value: 'dark' },
      { text: 'Give up your ambition', value: 'light' },
    ],
  },
  // Add more questions here...
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0); // Initialize score state to 0

  const handleAnswer = (answer: { text: string; value: string }) => {
    // Log Answer
    console.log('You selected:', answer);

    // Modify score based on answer
    if (answer.value === 'dark') {
      setScore(score + 1);
    } else if (answer.value === 'light') {
      setScore(score - 1);
    }

    setCurrentQuestion(currentQuestion + 1); // Go to the next question
  };

  return (
    <div className="App">
      {currentQuestion < questions.length ? ( // If there are more questions, render the next question
        <Question
          key={currentQuestion} // React needs a key to keep track of which question is being rendered
          {...questions[currentQuestion]} // Pass in the question object as props
          // "spread syntax" - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
          // spreads the properties of questions[currentQuestion] as props to the Question component

          handleAnswer={handleAnswer}
        />
      ) : (
        // If there are no more questions, render a message
        <div>
          <div
            className={`App ${
              score > 0 ? 'dark' : score < 0 ? 'light' : 'grey'
            }`}>
            You are on the{' '}
            {score > 0 ? 'dark ' : score < 0 ? 'light ' : 'grey '}
            side of the force.
            <button
              className="retake-quiz "
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
              }}>
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
