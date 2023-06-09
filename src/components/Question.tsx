import { useState } from 'react';

// declare types for props
interface QuestionProps {
  questionText: string;
  answers: { text: string; value: string }[];
  handleAnswer: (answer: { text: string; value: string }) => void;
}
function Question({ questionText, answers, handleAnswer }: QuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<{
    text: string;
    value: string;
  } | null>(null);
  // state is originally set to null, but will be set to a string when the user selects an answer
  // could also declare this in the interface
  // function to handle when a user clicks on an answer
  const handleItemClick = (answer: { text: string; value: string }) => {
    setSelectedAnswer(answer); // Set selectedAnswer to the answer the user clicked on
  };
  // return the question and answer choices
  return (
    <div className="Question">
      <h3 className="question-title">{questionText}</h3>
      <ul className="answer-set list-group">
        {answers.map((answer, index) => (
          <li
            key={index}
            className={`answer list-group-item ${
              // use ${} to embed an expression in a string
              selectedAnswer && selectedAnswer.text === answer.text
                ? 'active'
                : ''
              // If selectedAnswer is equal to the current answer, add the "active" class
            }`}
            // When the user clicks on an answer, call handleItemClick with the answer
            onClick={() => handleItemClick(answer)}>
            {answer.text}
            {/* Display the answer text */}
          </li>
        ))}
      </ul>
      <button
        className="submit-button btn btn-dark"
        onClick={() => handleAnswer(selectedAnswer!)} // Use ! to tell TypeScript that selectedAnswer is not null
        disabled={selectedAnswer === null}>
        Submit Answer
      </button>
    </div>
  );
}

export default Question;
