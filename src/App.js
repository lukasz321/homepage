import { ReactComponent as DecisionsSvg } from "./svgs/decisions.svg";
import { ReactComponent as WordleSvg } from "./svgs/wordle.svg";
import { ReactComponent as DollarSvg } from "./svgs/dollar.svg";
import { ReactComponent as TalkSvg } from "./svgs/talk.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <a href="https://decide.lzagaja.com" target="_blank" rel="noreferrer">
          <div className="svg-container rotate-animation">
            <DecisionsSvg
              fill="#ff2244"
              stroke="#ff0000"
              opacity="0.5"
              className="svg"
            />
          </div>
        </a>

        <a href="https://text.lzagaja.com" target="_blank" rel="noreferrer">
          <div className="svg-container">
            <TalkSvg opacity="0.8" className="svg" />
          </div>
        </a>

        <div className="svg-container zoom-animation"></div>
        <div className="svg-container zoom-animation"></div>

        <a href="https://wordle.lzagaja.com" target="_blank" rel="noreferrer">
          <div className="svg-container">
            <WordleSvg
              className="svg"
              fill="#ffcc44"
              stroke="#ffcc44"
              opacity="0.7"
            />
          </div>
        </a>

        <a href="https://treasury.lzagaja.com" target="_blank" rel="noreferrer">
          <div className="svg-container zoom-animation">
            <DollarSvg
              fill="#00ffaa"
              stroke="#00ffdd"
              opacity="0.64"
              className="svg"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
