import {useState} from 'react';
import './App.css';

function App() {

  const [breakTime, setBreakTime] = useState(5)
  const [sessionTime, setSessionTime] = useState(25)
  const [leftTime, setLeftTime] = useState(25)
  const [sessionActive, setSessionActive] =useState(true)
  // const [started, setStarted] = useState(false)
  const [timerRunning, settimerRunning] = useState(false)


const breakDecr = () => {
  if (breakTime> 1 && !timerRunning) {
  setBreakTime(brkPreVal => brkPreVal - 1)
  // setLeftTime(preLeft => preLeft - 1)
  }
}
const breakIncr = () => {
  if (breakTime < 60 && !timerRunning) {
  setBreakTime(brkPreVal => brkPreVal + 1)
  // setLeftTime(preLeft => preLeft + 1)
  }
}
const sessionDecr = () => {
  if (sessionTime> 1 && !timerRunning) {
  setSessionTime(sesPreVal => sesPreVal - 1)
  setLeftTime(preLeft => preLeft - 1)
  }
}
const sessionIncr = () => {
  if (sessionTime < 60 && !timerRunning) {
  setSessionTime(sesPreVal => sesPreVal + 1)
  setLeftTime(preLeft => preLeft + 1)
  }
}


const formatTime = ((totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
})

const startStop = () => {
  // first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length"
  if (sessionActive && !timerRunning) {
    setLeftTime(sessionTime) 
    settimerRunning(true);
    setInterval(() => {
      
    }, 1000);
   } else {
      setLeftTime(breakTime)
      // ?????
  }

}

  const resetHandle = () => {
  // ??? any running timer should be stopped
  setBreakTime(5);
  setSessionTime(25);
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
        <div id="timer-label">Session</div>
        <div id="time-left">{formatTime(leftTime * 60)}</div>  {/* paused or running alwas be displayed  mm:ss */}
      </div>
      <div className="controls">
        <div id="start_stop"  onClick={startStop}><i className="fa-solid fa-play"></i><i className="fa-solid fa-pause"></i></div>
        <div id="reset" onClick={resetHandle}><i className="fa-solid fa-rotate fa-rotate-90"></i></div>
      </div>

      {/* #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms). */}
      {/* #20: If the timer is running and I click the element with id="start_stop", the countdown should pause. */}
      {/* #21: If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused. */}
      {/* #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun. */}
      {/* #23: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element. */}
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
