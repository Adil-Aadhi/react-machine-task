
import { useState } from "react"


function fetching(){
const[state,setState]=useState([])

const Fetch=()=>{
    fetch('')
    .then((res)=>res.json())
    .then ((data)=>setState(data))
}


    return(
        <div>
            <button onClick={Fetch}>Click</button>
            <ul>
                {state.map(x=>{
                    return <li key={x.id}>{x.name}{x?.data.color}</li>
                })}
            </ul>
        </div>
    )
}