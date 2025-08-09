import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function Home(){

    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [state,setState]=useState('')

    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        if (title.trim() === '' || body.trim() === '') {
        return setState("Please enter something first!")
        
  }

        const newBlog={title,body}

        fetch('http://localhost:3000/Blogs',{
            method:"POST",
            header:{"Content-Type":"application/json"},
            body:JSON.stringify(newBlog)
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log("added",data);
            setTitle('');
            setBody('');
        })
        .catch((e)=>console.log("error",e))

            alert("submited successfully")
                navigate('/blogs')


    }



    return(
        <div>
            <div className="container mt-5 mb-5">
                 <h1>Welcome to Blogs Spot!</h1>
                <p className="mt-3">write your creativity:-</p>
            </div>
            <form onSubmit={handleSubmit} style={{width:"800px", margin: "0 auto"}}>
            <div>
            <input className="form-control " id="text" type="text" placeholder="Title:" onChange={(e)=>setTitle(e.target.value)} value={title}/><br/>
            </div>
            <div style={{marginBottom:"10px"}}>
            <textarea  className="form-control" placeholder="Content:" onChange={(e)=>setBody(e.target.value)} value={body} ></textarea>
            </div>
            <button type="submit" className="btn btn-success mt-3" >Submit</button>
            </form>
            <div>
                <p className="mt-5 text-danger fs-3" style={{fontFamily:"Poppins"}}>{state}</p>
            </div>
        </div>
    )
}

export default Home