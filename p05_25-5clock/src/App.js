import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [breakTime, setBreakTime] = useState(1) // 
  const [sessionTime, setSessionTime] = useState(2) //
  const [leftTimeS, setLeftTimeS] = useState(1*6) //???
  const [leftTimeB, setLeftTimeB] = useState(1*6) //???
  const [sessionActive, setSessionActive] =useState(true)
  const [timerLabel, setTimerLabel] = useState("Session")
  const [timerNotRunning, settimerNotRunning] = useState(true)
  const [intervalID, setIntervalID] = useState(null)


const breakDecr = () => {
  if (breakTime> 1 && timerNotRunning) {
  setBreakTime(brkPreVal => brkPreVal - 1)
    if (!sessionActive) {
      setLeftTimeB((breakTime-1) * 60)
    }
  }
}
const breakIncr = () => {
  if (breakTime < 60 && timerNotRunning) {
  setBreakTime(brkPreVal => brkPreVal + 1)
  if (!sessionActive) {
    setLeftTimeB((breakTime+1) * 60)
  }
  }
}
const sessionDecr = () => {
  if (sessionTime> 1 && timerNotRunning) {
  setSessionTime(sesPreVal => sesPreVal - 1)
  setLeftTimeS((sessionTime-1) * 60)
  }
}
const sessionIncr = () => {
  if (sessionTime < 60 && timerNotRunning) {
  setSessionTime(sesPreVal => sesPreVal + 1)
  setLeftTimeS((sessionTime+1) * 60)
  }
}
useEffect(() => {
  if (leftTimeS === 0 ) {
    setSessionActive(preSessionState => !preSessionState)
  }
}, [leftTimeS])
useEffect(() => {
  if (leftTimeB === 0 ) {
    setSessionActive(preSessionState => !preSessionState)
  }
}, [leftTimeB])

useEffect(() => {
  if (sessionActive) {
    setTimerLabel("Session");
    setLeftTimeS(sessionTime * 6); // ?????
   } else {
    setTimerLabel("Break");
    setLeftTimeB(breakTime * 6); // ???
   }

}, [sessionActive])



const formatTime = ((totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
})
const startStop = () => {
  
  if (sessionActive && timerNotRunning) {
    setIntervalID(setInterval(() => {
          setLeftTimeS(leftinSec => leftinSec - 1);
        }, 1000));

    settimerNotRunning(false);

   } else if (!sessionActive && timerNotRunning) {
      setIntervalID(setInterval(() => {
            setLeftTimeB(leftinSec => leftinSec - 1);
          }, 1000));

   } else {
    // setLeftTime(breakTime)
    clearInterval(intervalID);
    settimerNotRunning(true);

  }
}

  const resetHandle = () => {
  // ??? any running timer should be stopped
  setBreakTime(5);
  setSessionTime(25);
  setLeftTimeS(25*60);
  setLeftTimeB(5*60);
  settimerNotRunning(true);
  clearInterval(intervalID);

// ??? the element with id="time-left" should reset to its default state.
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
        <div id="time-left">{sessionActive ? formatTime(leftTimeS) : formatTime(leftTimeB) }</div>  {/* paused or running alwas be displayed  mm:ss */}
      </div>
      <div className="controls">
        <div id="start_stop"  onClick={startStop}><i className="fa-solid fa-play"></i><i className="fa-solid fa-pause"></i></div>
        <div id="reset" onClick={resetHandle}><i className="fa-solid fa-rotate fa-rotate-90"></i></div>
      </div>

     
     
    
      {/* #24: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun. */}
      {/* #25: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element. */}
      {/* #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep". */}
      {/* #27: The audio element with id="beep" must be 1 second or longer. */}
      {/* #28: The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked. */}


      <p id="author">Designed and Coded by Ahmet Oksuz</p>

    </div>
  );
}

export default App;
