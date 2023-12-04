import { ReactComponent as TreasurySvg } from "./svg/treasury.svg";
import { ReactComponent as PowerplotSvg } from "./svg/powerplot.svg";
import { ReactComponent as YoutubeSvg } from "./svg/yt.svg";
import { ReactComponent as GithubSvg } from "./svg/github.svg";
import { ReactComponent as EmailSvg } from "./svg/email.svg";
import { ReactComponent as InfoSvg } from "./svg/about.svg";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <a href="" target="_blank" rel="noreferrer">
          <InfoSvg />
        </a>
        <a href="https://github.com/lukasz321" target="_blank" rel="noreferrer">
          <GithubSvg />
        </a>
        <a href="mailto:hello@lzagaja.com">
          <EmailSvg />
        </a>
      </div>

      <div className="grid-container">
        <a href="https://treasuryields.com" target="_blank" rel="noreferrer">
          <TreasurySvg />
        </a>
        <a href="https://power.lzagaja.com" target="_blank" rel="noreferrer">
          <PowerplotSvg />
        </a>
        <a
          href="https://www.youtube.com/channel/UCsSeiZbxVfW8WlgDy7EKPfA"
          target="_blank"
          rel="noreferrer"
        >
          <YoutubeSvg />
        </a>
      </div>
    </div>
  );
}

export default App;
