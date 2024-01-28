import Flag from "react-world-flags";
import "./Homepage.css";
import { useState } from "react";
import { Quiz } from "./Quiz";
import axios from "axios";
export function Homepage() {
  let [language, setLanguage] = useState("none");
  let [questions, setQuestions] = useState([]);
  function selectEnglish() {
    axios.get("http://localhost:5000/questions").then((res) => {
      const questions = res.data;
      setQuestions(questions);
      setLanguage("English");
    });
  }
  return (
    <div>
      <button onClick={() => selectEnglish()}>
        <Flag code="usa" height="21" />
      </button>
      <button>
        {" "}
        <Flag code="gbr" height="21" />
      </button>
      <button>
        <Flag code="esp" height="21" />
      </button>
      <button>
        {" "}
        <Flag code="fra" height="21" />
      </button>
      <button>
        <Flag code="chn" height="21" />
      </button>
      {language === "English" ? (
        questions.map((x) => (
          <Quiz question={x.question} correctAnswer={x.correctAnswer} />
        ))
      ) : (
        <div>
          {" "}
          <h1>Linguist Buddy</h1>
          <p>Click a flag and start learning a new language!</p>
        </div>
      )}
    </div>
  );
}
