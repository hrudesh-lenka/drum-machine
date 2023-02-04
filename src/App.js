import './App.css';
import DRUM_KEYS from './drums'
import { useEffect, useState } from 'react';

function App() {

  const [key, setActiveKey] = useState("");

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      clickPad(event.key.toUpperCase());
    })
  }, [])



  const clickPad = (key) => {
    const audio = document.getElementById(key);
    console.log(audio);
    setActiveKey(audio.id);
    audio.play();
  };

  return (
    <div><h2>FreeCodeCamp Drum Machine</h2>
    <div className='App'>
      <div id="drum-machine">
        <div id='display'>
          {key}
        </div>
        <div className='drum-pads'>
          {DRUM_KEYS.map((drumPad) => (
            <div className='drum-pad'
            onClick={()=>clickPad(drumPad.text)} 
            key={drumPad.text} 
            id={drumPad.keycode}>
              {drumPad.text}
              <audio className='clip' id={drumPad.text} src={drumPad.src}></audio>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
