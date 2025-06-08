import './App.css';

export default function App() {
  // Generate 10x10 grid
  const grid = Array.from({ length: 100 });

  return (
    <div className="main-layout">
      <div className="grid-area">
        <div className="game-grid">
          {grid.map((_, idx) => (
            <div className="game-grid-cell" key={idx}></div>
          ))}
        </div>
      </div>
      <div className="control-area">
        <div className="controls-top">
          <button className="ui-btn mode">MODE</button>
          <button className="ui-btn reset">RESET</button>
          <button className="ui-btn rotate">
            <span className="rotate-icon">⟳</span>
          </button>
          <button className="ui-btn fire">★ FIRE</button>
        </div>
        <div className="api-call-box">API CALL</div>
        <div className="slider-block">
          <input
            type="range"
            min="0"
            max="4"
            step="1"
            className="vertical-slider"
            orient="vertical"
          />
        </div>
        <div className="info-row">
          <div className="bet-info">
            <div className="bet-mult">1X3</div>
            <div className="bet-amt">$100</div>
          </div>
          <div className="info-box">INFO BOX</div>
        </div>
        <div className="bet-row">
          <div className="betinput-label">betinput</div>
          <div className="betinput-btns">
            <button className="ui-btn small">2X</button>
            <button className="ui-btn small">1/2</button>
            <button className="ui-btn small">MAX</button>
          </div>
        </div>
        <div className="tabs-row">
          <button className="tab manual selected">MANUAL</button>
          <button className="tab auto">AUTO</button>
        </div>
      </div>
    </div>
  );
}