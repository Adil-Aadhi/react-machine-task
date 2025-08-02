import React from "react";

function NavBar(){
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand" style={{borderRadius:"10px"}}>
            <div className="container-fluid" style={{width:"100%"}}>
                <a className="navbar-brand" href="#">
                    <i className="bi bi-journal-bookmark-fill me-2"></i>
                    Todo List
                </a>
                <button type="button" className="btn btn-danger"><i className="bi bi-list"></i></button>
            </div>
        </nav>
    )
}
export default NavBar;