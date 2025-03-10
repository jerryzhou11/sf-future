import Landing from './Pages/Landing'
import Story from './Pages/Story'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/story" element={<Story/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
