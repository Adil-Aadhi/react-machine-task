import {useNavigate} from 'react-router-dom'

function Login(){
    const navigate=useNavigate();
    return(
        <div>
            <div className="container p-4" style={{ maxWidth: "500px", backgroundColor: "#333", borderRadius: "10px" }}>
                <div className="mb-3">
                    <h1>Login</h1>
                </div>
                <div className="filed">
            <div className="mb-3">
                <input className="form-control" type="text" placeholder="Email...."></input><br></br>
                <input className="form-control" type="password" placeholder="Password..."></input>
            </div>
                </div>
            <div className="mt-3">
                <button className="btn btn-success" onClick={()=>navigate("/home")}>Login</button>
            </div>
            </div>
        </div>
    )
}
export default Login