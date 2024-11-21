import './App.css'
import './index.css'
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Landing from './pages/Landing.jsx'
import Chat from './pages/Chat.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/chat" element={<Chat/>}/>
    </Routes>
  )
}

export default App
