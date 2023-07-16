import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
const divActiv = useRef();
const [displayValue, setDisplayValue] = useState('')
const [volumeVal, setVolumeVal] = useState(0.5);

const audioRefs = useRef({
  Q: null,
  W: null,
  E: null,
  A: null,
  S: null,
  D: null,
  Z: null,
  X: null,
  C: null,
})


useEffect(() => {
  divActiv.current.focus();
}, [])

useEffect(() => {
  document.addEventListener('keydown',handleKeyDown);
  return () => {
    document.removeEventListener('keydown',handleKeyDown);
  }
},[])

const audioClickPlay = (e) => {
    const audio = e.target.querySelector('audio');
    setDisplayValue(e.target.id);
    audio.play();
    const divv = e.target
    divv.style.backgroundColor = "#FFA500"
    setTimeout ( () => {
      divv.style.backgroundColor = "black";
    },300);

  }


  const handleKeyDown = (e) => {
    const keyCodes = [ 81, 87, 69, 65, 83, 68, 90, 88, 67 ];
    if (keyCodes.includes(e.keyCode)) {
    const key = e.key.toUpperCase();
    const audioRef = audioRefs.current[key];
    if (audioRef) audioRef.play();
    const pressedDiv = audioRef.parentNode;     
    setDisplayValue(pressedDiv.id);
    pressedDiv.style.backgroundColor = "#FFA500"
    setTimeout ( () => {
      pressedDiv.style.backgroundColor = "black";
    },300);
  };
};
/*   const audioKeyPressPlay = (e) => {
    
    console.log("e.keyCode:",e.keyCode)
    const pressedKey = e.key.toUpperCase();
    const pressedKeyCode= e.keyCode;

    const keyCodes = [ 81, 87, 69, 65, 83, 68, 90, 88, 67 ];
   const regex =/^[QWEASDZXC]$/;
    if (regex.test(pressedKey) || (keyCodes.includes(pressedKeyCode)) ){
      const pressedAudio = document.querySelector('.drum-pad #'+pressedKey);    
      const pressedDiv = pressedAudio.parentNode;     
      const audio = new Audio(pressedAudio.src);
      audio.play()
     
    setDisplayValue(pressedDiv.id);
    pressedDiv.style.backgroundColor = "#FFA500"
    setTimeout ( () => {
      pressedDiv.style.backgroundColor = "black";
    },300);
    }
  }; */

  const handleVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolumeVal(newVolume)
  }

  return (

    <div id="drum-machine" onKeyDown={handleKeyDown} ref={divActiv} tabIndex={0}  >
      <div id="display">
        <img src='https://surgegifting.com/wp-content/uploads/2020/06/surgegifting750x150-e1641173812733.jpg' alt='surgegifting.com logo' />
        <h2>{displayValue}</h2>
        <label htmlFor="volume"><input id="volume" type='range' min={0} max={2} step={0.1} value={volumeVal} onChange={handleVolume}/></label>
      </div>
      <div className='drum-keys'>
        <div id="Heater 1" className="drum-pad" onClick={audioClickPlay} >Q <audio ref={(ref) => (audioRefs.current.Q = ref)} id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio> </div>
        <div id="Heater 2" className="drum-pad" onClick={audioClickPlay} >W <audio ref={(ref) => (audioRefs.current.W = ref)} id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio> </div>
        <div id="Heater 3" className="drum-pad" onClick={audioClickPlay} >E <audio ref={(ref) => (audioRefs.current.E = ref)} id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio> </div>
        <div id="Heater 4" className="drum-pad" onClick={audioClickPlay} >A <audio ref={(ref) => (audioRefs.current.A = ref)} id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio> </div>
        <div id="Clap" className="drum-pad" onClick={audioClickPlay} >S <audio ref={(ref) => (audioRefs.current.S = ref)} id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio> </div>
        <div id="Open-HH" className="drum-pad" onClick={audioClickPlay} >D <audio ref={(ref) => (audioRefs.current.D = ref)} id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio> </div>
        <div id="Kick-n'-Hat" className="drum-pad" onClick={audioClickPlay} >Z <audio ref={(ref) => (audioRefs.current.Z = ref)} id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio> </div>
        <div id="Kick" className="drum-pad" onClick={audioClickPlay} >X <audio ref={(ref) => (audioRefs.current.X = ref)} id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio> </div>
        <div id="Closed-HH" className="drum-pad" onClick={audioClickPlay} >C <audio ref={(ref) => (audioRefs.current.C = ref)} id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio> </div>
      </div>
    </div>
);
}

export default App;
