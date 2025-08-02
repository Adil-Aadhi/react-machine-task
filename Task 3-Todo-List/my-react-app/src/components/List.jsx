import { useState } from "react";


function ListOut({todos,onDelete,onEdit}){
    return(
        <div>
        <ul>{todos.map((x,i)=>{
            return <div >
                <li className="d-flex justify-content-between align-items-center" 
                             key={i}  style={{listStyleType:"disc", textAlign:"left"}}>
                                <span><i className="bi bi-arrow-right-circle-fill me-2 text-success"></i>{x}</span>
                    <div>
                        <button className="btn btn-warning me-2" onClick={()=>onEdit(i)}><i className="bi bi-pen"></i></button>
                        <button className="btn btn-danger" onClick={()=>onDelete(i)}><i className="bi bi-trash"></i></button>
                    </div>
            
                </li>
                    <hr style={{color:"red"}}></hr>
                </div>
        })}</ul>
        
        </div>
    )
}
export default ListOut