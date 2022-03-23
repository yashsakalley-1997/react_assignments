import { useDispatch,useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { addTodo,delTodo,updateTodo } from "../redux/action";
import axios from "axios";

export const Todo = ()=>{

    const [data,setData] = useState([]);
    const [state,setState] = useState({});
    const [text,setText] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((store)=>store.todo);

    useEffect(()=>{
        axios.get("http://localhost:3001/todos").then((res)=>{
            setData(res.data)
        })
    },[state])
    
    const handleInsert = (object)=>{
        setState(object)
        axios.post("http://localhost:3001/todos",object).then((res)=>{
            dispatch(addTodo(object))
        })
    }

    const handleDelete = (object,i)=>{
        setState(object)
        axios.delete(`http://localhost:3001/todos/${object['id']}`,).then((res)=>{
            dispatch(delTodo(object))
        })
    }

    

    return (
        <div>
            <input type="text" onChange={(e)=>{
                setText(e.target.value)
            }} />

            <button onClick={()=>{
                handleInsert({"content":text,"status":"Not Done"})
            }}>Add</button>


            {data.map((e,i)=>(
                <div key={i}>
                {e['content']}
                <p></p>
                <button onClick={()=>{
                    handleDelete(e,i)
                }}>DELETE</button>

                <button onClick={()=>{
                    (e['status'] == "Not Done")?e['status'] = "Done":e['status'] = "Not Done";
                    dispatch(updateTodo({i,e}))
                }}>{e['status']}</button>
                </div>
            ))}
        </div>
    )
}