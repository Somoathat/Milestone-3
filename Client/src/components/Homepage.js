import Flag from "react-world-flags";
import "./Homepage.css";
import { useState } from "react";
import Quiz from "./Quiz";
import axios from "axios";
function Homepage() {
  let [language, setLanguage] = useState("none");
  let [questions, setQuestions] = useState([]);
  function selectEnglish() {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/questions`).then((res) => {
      const questions = res.data;
      setQuestions(questions);
      setLanguage("English");
    });
  }
  return (
    <div>
      <button class="flag" onClick={() => selectEnglish()}>
        <Flag code="usa" height="21" />
      </button>
      <button class="flag">
        {" "}
        <Flag code="gbr" height="21" />
      </button>
      <button class="flag">
        <Flag code="esp" height="21" />
      </button>
      <button class="flag">
        {" "}
        <Flag code="fra" height="21" />
      </button>
      <button class="flag">
        <Flag code="chn" height="21" />
      </button>
      {language === "English" ? (
        questions.map((x) => (
          <Quiz question={x.question} correctAnswer={x.correctAnswer} />
        ))
      ) : (
        <div>
          {" "}
          <h1 class="title">Linguist Buddy</h1>
          <p>Click a flag and start learning a new language!</p>
        </div>
      )}
    </div>
  );
}

export default Homepage;
