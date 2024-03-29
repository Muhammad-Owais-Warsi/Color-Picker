import { useRef, useState } from "react";
import './index.css';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [R, setR] = useState(0);
  const [G, setG] = useState(0);
  const [B, setB] = useState(0);

  const rgbRef = useRef();

  return (
    <div className="container">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="color-box" style={{ backgroundColor: `rgb(${R},${G},${B})` }}></div>
      <div className="controls">
        <div className="slider">
          <label htmlFor="red">Red: </label>
          <input
            id="red"
            type="range"
            min={0}
            max={255}
            value={R}
            onChange={(e) => setR(e.target.value)}
          />
          <span>{R}</span>
        </div>
        <div className="slider">
          <label htmlFor="green">Green: </label>
          <input
            id="green"
            type="range"
            min={0}
            max={255}
            value={G}
            onChange={(e) => setG(e.target.value)}
          />
          <span>{G}</span>
        </div>
        <div className="slider">
          <label htmlFor="blue">Blue: </label>
          <input
            id="blue"
            type="range"
            min={0}
            max={255}
            value={B}
            onChange={(e) => setB(e.target.value)}
          />
          <span>{B}</span>
        </div>
      </div>

      <div className="rgb-input">
        <input
          type="text"
          readOnly
          value={`rgb(${R},${G},${B})`}
          ref={rgbRef}
          onClick={() => {
            navigator.clipboard.writeText(rgbRef.current.value);
            toast.success("Copied", {
              icon: '✅',
            });
          }}
          
          style={{fontSize:"20px", textAlign:"center"}}
        />
      </div>
    </div>
  );
}

export default App;
