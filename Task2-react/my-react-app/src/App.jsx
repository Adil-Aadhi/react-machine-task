import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
    const [msg,setMsg]=useState([])

    useEffect(()=>{
         fetch('https://dummyjson.com/quotes')
        .then(res=>res.json())
        .then(data=>setMsg(data.quotes.slice(0,10)))
    })
    return(
        <div>
            <div>
            {msg.map(x=>{
               return <h3 key={x.id}>{x.quote}</h3>
            })}
            </div>
        </div>
    )
}



export default App
