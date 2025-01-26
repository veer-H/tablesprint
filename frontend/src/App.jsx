import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/login.jsx'
import Home from './Components/home.jsx'
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
