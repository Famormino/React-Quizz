import {decode} from "html-entities";

export default function Quizz(props) {
  return <div>{decode(props.question)}</div>;
}
