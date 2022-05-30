import {useEffect, useState} from "react";
import {nanoid} from "nanoid";

import Quizz from "./components/Quizz";
import Start from "./components/Start";
import apiFetch from "./helper/apiFetch";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [start, setStart] = useState(false);

  console.log(questions);

  useEffect(() => {
    apiFetch().then((questions) =>
      setQuestions(
        questions.map((question) => {
          return {
            ...question,
            id: nanoid(),
          };
        }),
      ),
    );
  }, [start]);

  function startQuizz() {
    setStart(!start);
  }

  return (
    <div className="container">
      {start
        ? questions.map((question) => {
            return (
              <Quizz
                key={question.id}
                category={question.category}
                correctAnswer={question.correctAnswer}
                incorrectAnswer={question.incorrectAnswer}
                question={question.question}
              />
            );
          })
        : !start && <Start startQuizz={startQuizz} />}
    </div>
  );
}
