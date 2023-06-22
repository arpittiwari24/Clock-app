import { useEffect, useState } from 'react'

const StopWatch = () => {
    const [time,setTime] = useState(0)

    const [running, setRunning] = useState(false)
  
    useEffect ( () => {
      let intervalID 
  
      if(running) {
        intervalID = setInterval(()=> setTime(time+1),10)
      }
  
      return () => clearInterval(intervalID)
    },[running,time])
  
    const hours = Math.floor(time/360000)
  
    const minutes = Math.floor((time%360000)/6000)
  
    const seconds = Math.floor((time%6000)/100)
  
    const milliseconds = time%100
  
    const startonclick = () => {
      setRunning(!running)
    }
  
    const reset = () => {
      setTime(0);
    }
  
    return (
      <>
       <div>
       <h1>
        {hours}:{minutes.toString().padStart(2,"0")}:{seconds.toString().padStart(2,"0")}:{milliseconds.toString().padStart(2,"0")}
       </h1>
       </div>
       <div className='buttons'>
        <button className='btn btn-success' onClick={startonclick}>{ running ? "Stop" : "Start"}</button>
        <button className='btn btn-danger' onClick={reset}>Reset</button>
       </div>
      </>
    )
}

export default StopWatch