import {Link, Outlet} from "react-router-dom"
import Clock from "react-simple-clock"
import "./App.css"


const HomePage = () => {

  const currentTime = new Date().toLocaleTimeString()

  return (
    <div>
      <h1>Clock</h1>
      <div className="buttons ">
        <Clock live={true} hourMarkFormat="number" className="clock" />
      </div>
      <div className="buttons">
      <Link to= "/stopwatch" className="btn btn-primary">Stopwatch</Link>
      <Link to= "/timer" className="btn btn-primary">Timer</Link>
      </div>
      <Outlet />  
    </div>
  )
}

export default HomePage