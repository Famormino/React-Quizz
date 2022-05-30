import {decode} from "html-entities";

export default function Quizz(props) {
  console.log(props);

  return <div>{decode(props.question)}</div>;
}
