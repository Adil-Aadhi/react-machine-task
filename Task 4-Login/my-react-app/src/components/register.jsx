import Login from "./login"
import {useNavigate} from 'react-router-dom'

function Register(){
    const navigate=useNavigate()
    return(
        <div>
            <div className="container p-4" style={{ maxWidth: "500px", backgroundColor: "#333", borderRadius: "10px" }}>
                <div className="mb-3">
                    <h1>Register</h1>
                </div>
                <div className="filed">
            <div className="mb-3">
                <input className="form-control" type="text" placeholder="Enter Email...."></input><br></br>
                <input className="form-control" type="password" placeholder="Enter Password..."></input>
            </div>
                </div>
            <div className="mt-3">
                <button className="btn btn-primary" onClick={()=>navigate('/login')}>Register</button>
            </div>
            </div>
        </div>
    )
}
export default Register