import './App.css'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Room from './pages/room/Room'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/:roomId" element={<Room/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
