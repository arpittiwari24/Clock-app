import { useTimer } from "react-timer-hook";
import "../App.css"


function MyTimer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      hours,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, autoStart:false ,onExpire: () => console.warn('onExpire called') });
  
  
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{fontSize: '100px'}}>
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300)
          restart(time)
        }}>Restart</button>
      </div>
    );
  }
  
  export default function App() {
    const time1 = new Date();
    time1.setSeconds(time1.getSeconds() + 600) // 10 minutes timer

    const time2 = new Date();
    time2.setSeconds(time2.getSeconds() + 300);

    const time3 = new Date();
    time3.setSeconds(time3.getSeconds() + 180);

    const time4 = new Date();
    time4.setSeconds(time4.getSeconds() + 60);
    return (
     <div>
        <h1>Timer</h1>

        <div className="buttons">
        <div className="digital">
        <MyTimer  expiryTimestamp={time1} />
      </div>
      <div className="digital">
        <MyTimer  expiryTimestamp={time2} />
      </div>
      <div className="digital">
        <MyTimer  expiryTimestamp={time3} />
      </div>
      <div className="digital">
        <MyTimer  expiryTimestamp={time4} />
      </div>
      </div>
     </div>
    );
  }