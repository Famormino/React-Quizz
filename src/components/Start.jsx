export default function Start(props) {
  return (
    <div className="start__container">
      <h1>Quizzical</h1>
      <p>Let s see how much you know</p>
      <button onClick={props.startQuizz}>Start Quiz</button>
    </div>
  );
}
