import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar';
import MainBody from './components/TodoList';
import Footer from './Footer';

function App() {

  return (
  <>
    <div className="app-wrapper">
      <NavBar/>
      <main className="main-content">
        <MainBody/>
      </main>
      <Footer/>
    </div>
  </>
  )
}

export default App
