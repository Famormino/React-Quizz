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
            selectedAnswer: "",
            showAnswer: false,
          };
        }),
      ),
    );
  }, []);

  const handleSelectAnswer = (questionId, answer) => {
    setQuestions((prevQuestionsArray) =>
      prevQuestionsArray.map((question) =>
        question.id === questionId ? {...question, selectedAnswer: answer} : question,
      ),
    );
  };

  const questionElements = questions.map((question) => (
    <Quizz
      key={question.id}
      correctAnswer={question.correct_answer}
      handleSelectAnswer={handleSelectAnswer}
      id={question.id}
      incorrectAnswers={question.incorrect_answers}
      question={question.question}
      selectedAnswer={question.selectedAnswer}
    />
  ));

  return <section className="app__container">{questionElements}</section>;
}
