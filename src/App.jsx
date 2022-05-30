import {useEffect, useState} from "react";
import {nanoid} from "nanoid";

import Quizz from "./components/Quizz";
import Start from "./components/Start";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [start, setStart] = useState(false);

  console.log(questions);

  function apiFetch() {
    const API_URL = "https://opentdb.com/api.php?amount=2&type=multiple";

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) =>
        setQuestions(
          data.results.map((question) => {
            return {
              id: nanoid(),
              category: question.category,
              question: question.question,
              correctAnswer: question.correct_answer,
              incorrectAnswer: question.incorrect_answers,
            };
          }),
        ),
      );
  }
  useEffect(() => {
    if (start) {
      apiFetch();
    }
  }, [start]);

  function startQuizz() {
    setStart(!start);
  }

  return (
    <div className="container">
      {!start && <Start startQuizz={startQuizz} />}
      {start &&
        questions.map((question) => {
          return (
            <Quizz
              key={question.id}
              category={question.category}
              correctAnswer={question.correctAnswer}
              incorrectAnswer={question.incorrectAnswer}
              question={question.question}
            />
          );
        })}
    </div>
  );
}
