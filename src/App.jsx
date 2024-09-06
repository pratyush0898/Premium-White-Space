import React from "react";
import Himg from "./assets/himg.png";
import "./App.css";

function App() {
  return (
    <>
      <div class="container">
        <h1>Revealed the Secret of Pratyush's Website</h1>
        <p>
          Revealed the secret of Pratyush's website, showcasing his exceptional
          coding skills and creativity impressively.
        </p>
        <a href="https://github.com/pratyush0898/pratyush-portfolio" target="_blank" class="button">
          Start Thriving
        </a>
        <br />
        <img src={Himg} alt="Website Image" class="image" />
      </div>
    </>
  );
}

export default App;
