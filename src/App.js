import { ReactComponent as DecisionsSvg } from "./svgs/decisions.svg";
import { ReactComponent as WordleSvg } from "./svgs/wordle.svg";
import { ReactComponent as DollarSvg } from "./svgs/dollar.svg";
import { ReactComponent as TalkSvg } from "./svgs/talk.svg";
import { ReactComponent as YoutubeSvg } from "./svgs/yt.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <a href="https://decide.lzagaja.com" target="_blank" rel="noreferrer">
          <div className="svg-container rotate-animation">
            <DecisionsSvg
              fill="#ff44aa"
              stroke="#ff44aa"
              opacity="0.6"
              className="svg"
            />
          </div>
        </a>

        <a href="https://text.lzagaja.com" target="_blank" rel="noreferrer">
          <div className="svg-container">
            <TalkSvg opacity="0.8" className="svg" />
          </div>
        </a>

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
        <a href="https://www.youtube.com/channel/UCsSeiZbxVfW8WlgDy7EKPfA" target="_blank" rel="noreferrer">
          <div className="svg-container" style={{ width: "60%"}}>
            <YoutubeSvg
              opacity="0.70"
              className="svg"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
