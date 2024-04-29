import topbar from "./images/USPS.png";
import frame1 from "./images/frame1.png";
import frame2 from "./images/frame2.png";
import stepbar from "./images/stepbar.png";
import maincomponent from "./images/maincomponent.png";
import lowbar from "./images/lowbar.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="image-container-top">
          <img src={topbar} className="top-bar" alt="Top Bar" />
          <img src={frame1} className="frame1" alt="Frame 1" />
        </div>

        <div className="waitorder">
        <img src={frame2} className="frame2" alt="Frame 2" />
        </div>

        <div className="order-text-container">
          <img src={stepbar} className="stepbar" alt="Step Bar" />
          <img
            src={maincomponent}
            className="maincomponent"
            alt="maincomponent"
          />
        </div>
        <img src={lowbar} className="lowbar" alt="lowbar" />
      </header>
    </div>
  );
}

export default App;
