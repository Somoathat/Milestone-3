import Flag from "react-world-flags";
import "./Homepage.css";
import { useState } from "react";

function Homepage() {
  let [language, setLanguage] = useState("none");
  return (
    
    <div>
      <button onClick={() => setLanguage("English")}>
        <Flag code="usa" height="16" />
      </button>
      <button>
        {" "}
        <Flag code="gbr" height="16" />
      </button>
      <button>
        <Flag code="esp" height="16" />
      </button>
      <button>
        {" "}
        <Flag code="fra" height="16" />
      </button>
      <button>
        <Flag code="chn" height="16" />
      </button>
      <h1>Linguist Buddy</h1>
      <p>Click a flag and start learning a new language!</p>
      <p>current selection: {language}</p>
    </div>
  );
}

export default Homepage