import {decode} from "html-entities";
import {nanoid} from "nanoid";

export default function Quizz(props) {
  const incorrectAnswersElements = props.incorrectAnswers.map((answer) => {
    const incorrectAnswerClassName = `
    ${props.selectedAnswer === answer ? "question-btn-selected" : "question-btn"}`;

    return (
      <button
        key={nanoid()}
        className={incorrectAnswerClassName}
        onClick={() => props.handleSelectAnswer(props.id, answer)}
      >
        {decode(answer)}
      </button>
    );
  });

  const correctAnswerClassName = `
  ${props.selectedAnswer === props.correctAnswer ? "question-btn-selected" : "question-btn"}`;

  const correctAnswerElement = (
    <button
      key={nanoid()}
      className={correctAnswerClassName}
      onClick={() => props.handleSelectAnswer(props.id, props.correctAnswer)}
    >
      {decode(props.correctAnswer)}
    </button>
  );

  incorrectAnswersElements.push(correctAnswerElement);
  const sortedAnswerElements = incorrectAnswersElements.sort((a, b) =>
    a.props.children.localeCompare(b.props.children),
  );

  return (
    <article className="question-container">
      <div>
        <h4 className="quizz__text">{decode(props.question)}</h4>
        {sortedAnswerElements}
      </div>
    </article>
  );
}
