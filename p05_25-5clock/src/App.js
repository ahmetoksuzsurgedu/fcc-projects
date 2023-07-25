import {useState, useEffect,useRef} from 'react';
import './App.css';

function App() {

  const [breakTime, setBreakTime] = useState(5)
  const [sessionTime, setSessionTime] = useState(25)
  const [leftTime, setLeftTime] = useState(25*60)
  const [sessionActive, setSessionActive] =useState(true)
  const [timerLabel, setTimerLabel] = useState("Session")
  const [timerNotRunning, settimerNotRunning] = useState(true);
  const audio = document.getElementById("beep");
  let intervalID = useRef(0);


const breakDecr = () => {
  if (breakTime> 1 && timerNotRunning) {
  setBreakTime(brkPreVal => brkPreVal - 1)
    if (!sessionActive) {
      setLeftTime((breakTime-1) * 60)
    }
  }
}
const breakIncr = () => {
  if (breakTime < 60 && timerNotRunning) {
  setBreakTime(brkPreVal => brkPreVal + 1)
  if (!sessionActive) {
    setLeftTime((breakTime+1) * 60)
  }
  }
}
const sessionDecr = () => {
  if (sessionTime> 1 && timerNotRunning) {
  setSessionTime(sesPreVal => sesPreVal - 1)
  setLeftTime((sessionTime-1) * 60)
  }
}
const sessionIncr = () => {
  if (sessionTime < 60 && timerNotRunning) {
  setSessionTime(sesPreVal => sesPreVal + 1)
  setLeftTime((sessionTime+1) * 60)
  }
}
useEffect(() => {
  if (leftTime === 0 ) {
    setSessionActive(preSessionState => !preSessionState);
    audio.play();
  }
}, [leftTime,audio])

useEffect(() => {
  if (!timerNotRunning) {
  intervalID.current = setInterval(() => {

    setLeftTime(leftinSec => {
      if (!sessionActive && leftinSec === 0) {
        setSessionActive(false)
        setTimerLabel("Break");
        setLeftTime(breakTime * 60);
        return leftTime
      }
      if (sessionActive && leftinSec === 0) {
        setSessionActive(true);
        setTimerLabel("Session");
        setLeftTime(sessionTime * 60);

        return leftTime
      }

      return leftinSec > 0 ? leftinSec - 1 : leftinSec;
    });

  }, 1000);
}
  return () => {
    clearInterval(intervalID.current);
  }
}, [sessionActive,leftTime,timerNotRunning,breakTime,sessionTime])



const formatTime = ((totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
})

const startStop = () => {
  if (timerNotRunning) {
    settimerNotRunning(false);
   } else {
    settimerNotRunning(true);

  }

}
  const resetHandle = () => {
  setBreakTime(5);
  setSessionTime(25);
  clearInterval(intervalID.current);
  setSessionActive(true)
  setLeftTime(25 * 60);
  setTimerLabel("Session");
  settimerNotRunning(true);
  audio.pause();
  audio.currentTime = 0;
}

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div className="break-session">
      <div className="break">
      <div id="break-label">Break Length</div>
      <div className="break-ctrl">
        <div id="break-decrement" onClick={breakDecr}><i className="fa-solid fa-square-minus"></i></div>
        <div id="break-length">{breakTime}</div>
        <div id="break-increment" onClick={breakIncr}><i className="fa-solid fa-square-plus"></i></div>
      </div>
      </div>
      <div className="session">
      <div id="session-label">Session Length</div>
      <div className="session-ctrl">
        <div id="session-decrement" onClick={sessionDecr}><i className="fa-solid fa-square-minus"></i></div>
        <div id="session-length">{sessionTime}</div>
        <div id="session-increment" onClick={sessionIncr}><i className="fa-solid fa-square-plus"></i></div>
      </div>
      </div>
      </div>
      <div className="display" >
        <div id="timer-label">{timerLabel}</div>
        <div id="time-left">{formatTime(leftTime)}</div>
      </div>
      <div className="controls">
        <div id="start_stop"  onClick={startStop}><i className="fa-solid fa-play"></i><i className="fa-solid fa-pause"></i></div>
        <div id="reset" onClick={resetHandle}><i className="fa-solid fa-rotate fa-rotate-90"></i></div>
        <audio id="beep" src="https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav"></audio>
      </div>

      <p id="author">Designed and Coded by Ahmet Oksuz</p>

    </div>
  );
}

export default App;
