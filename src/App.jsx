
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import StopWatch from './components/StopWatch'
import Timerr from './components/Timerr'

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
    <Route index element= {<HomePage />} />
    <Route path='/stopwatch' element= {<StopWatch />} />
    <Route path='/timer' element= {<Timerr />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

