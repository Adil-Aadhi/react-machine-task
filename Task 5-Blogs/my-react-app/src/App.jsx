import {Routes,Route} from 'react-router-dom'
// import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css'
import Home from './component/home'
import Nav from './component/nav'
import BlogsTitle from './component/blogs'
import Content from './component/content'

function App() {

  return (
    <>
    <div>
      <Nav/>
    </div>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blogs" element={<BlogsTitle/>}></Route>
        <Route path='/content/:id/:title/:body' element={<Content/>}/>
      </Routes>
    </div>
      
    </>
  )
}

export default App
