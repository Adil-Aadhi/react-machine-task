import { useState,useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'





function BlogsTitle(){

    const [state,setState]=useState([])

    const Fetching=()=>{
        fetch('http://localhost:3000/Blogs')
        .then((res)=>res.json())
        .then((data)=>setState(data))
        .catch((e)=>console.log("error",e))
    }

    useEffect(()=>{
        Fetching()
    },[])

    return (
        <div style={{backgroundImage:"linear-gradient(to bottom,white,#ebeed7ff)"}}>
             <div className="container mt-4 mb-5">
            <h1 className="display-5">CONTENT:-</h1>
        </div>
        <div className="container" style={{borderRadius:"20px",backgroundColor:"#ebeed7ff"}}>
        <div className="container text-start p-5">
        {state.map(x=>{
          return  <div>

                <Link className="nav-link mb-4" to={`/content/${x.id}/${x.title}/${x.body}`} key={x.id}><h5 className="fw-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
                 <i className="bi bi-pen  me-5 fs-6"></i>
                 {x.title} <i className="bi bi-trash text-danger ms-4"></i>
                 </h5></Link>
                 
                 </div>

        })}
        </div>
        </div>
        </div>
       
    )
}
export default BlogsTitle