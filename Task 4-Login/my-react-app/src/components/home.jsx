import {useNavigate} from 'react-router-dom'

function Home(){
    const navigate=useNavigate()
    return(
        <div className="home">
            <nav className="navbar navbar bg-light">

            </nav>
            <div className="container" style={{border:"2px solid black"}}>
            <h1>Welcome to Home</h1>
            <p>Hi everyOne, Thanks for login</p>
            <button className="btn btn-danger" onClick={()=>navigate("/")}>Log-Out</button>
        </div>
        </div>
    )
}

export default Home