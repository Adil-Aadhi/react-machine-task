
import {Link} from 'react-router-dom'

function Nav(){
    return(
        <div>
            <nav className="navbar navbar bg-dark text-light p-3" style={{borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}>
                <div>
                    <Link className="navbar-brand text-white">BLOGS SPOT!</Link>
                </div>
                <div style={{display:"flex",gap:"20px",padding:"10px"}}>
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/blogs">blog</Link>
                </div>
                
            </nav>
        </div>
    )
}

export default Nav