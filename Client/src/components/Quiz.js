import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
export function Quiz({question, correctAnswer}) {
  let [state, setState] = useState("unanswered"); // there will be three answeres. Correct, wrong, and unanswered
  const display = {
    unanswered: <div>Choose a button above</div>,
    correct: (
      <div>
        Great Job! <GiCheckMark />
      </div>
    ),
    wrong: (
      <div>
        Try again <FaXmark />
      </div>
    ),
  };
  //const question = "I was in New York, is the past simple true or false?";
  //const correctAnswer = true;
  function guessTrue() {
    if (correctAnswer === true) {
      setState("correct");
    } else {
      setState("wrong");
    }
  }
  function guessFalse() {
    if (correctAnswer === false) {
      setState("correct");
    } else {
      setState("wrong");
    }
  }
  return (
    <div>
      <p>{question}</p>
      <button disabled={state !== "unanswered"} onClick={guessTrue}>
        True
      </button>
      <button disabled={state !== "unanswered"} onClick={guessFalse}>
        False
      </button>
      {display[state]}
    </div>
  );
}
