import './App.css'
import Register from './components/register'
import Login from './components/login'
import {Route,Routes} from 'react-router-dom'
import Home from './components/home'

function App() {
  return (
    <>
      <div>
          <Routes>
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />

            
        </Routes>
      </div>
    </>
  )
}

export default App
