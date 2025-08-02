import { useState } from "react";
import ListOut from "./List";

function MainBody(){

    const [task,setTask]=useState('');
    const [todolist,setTodolist]=useState([]);
    const [editList,setEdit]=useState(null)
    const HandleTask=(e)=>{
        setTask(e.target.value)
    }

    const HandleList=()=>{
        if(task.trim() !==""){
            if(editList!==null){
                const updatedList=[...todolist];
                updatedList[editList]=task;
                setTodolist(updatedList);
                setEdit(null);
            }
            else{
                    setTodolist([...todolist,task])
            }
            setTask("");
        }
    };

    const HandleDelete=(index)=>{
        const newList=todolist.filter((_,i)=> i!==index);
        setTodolist(newList);
    }


    const HandleEdit=(index)=>{
        setTask(todolist[index]);
        setEdit(index);
    }

    return(
        <main className="container mt-5">
            <div className="input-group">
                        <input type="text" className="form-control" placeholder="Write task...." 
                                        onChange={HandleTask} value={task} onKeyDown={(e)=>{if(e.key==="Enter"){HandleList()}}}>
                        </input>
                        <button className="btn btn-primary" style={{width:"200px"}} onClick={HandleList}>{editList !==null ?"Update":"Add"}</button>
            </div>         
            <div className="container mt-5">
                <ListOut todos={todolist} onDelete={HandleDelete} onEdit={HandleEdit}/>
            </div>
        </main>
    )
}

export default MainBody