import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App(){
    const [color,setColor]=useState(false);
    const HandleColor=()=>{
        setColor((prev)=>!prev)
        document.body.style.backgroundColor=color?"black":"white";
        document.body.style.transition="background-color 0.5s ease";
    }
    return(
        <div>
            <div style={{
                 height: "100vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            }}>
                <button style={{width:"100px",
                    height:"50px",backgroundColor:color?"black":"white",color:color?"white":"black"}}  onClick={HandleColor}>{color?"Dark":"Light"}</button>
            </div>
        </div>
    )
}
export default App
