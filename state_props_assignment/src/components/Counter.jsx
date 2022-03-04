import { useState } from "react";

export function Counter(props){
    const [counter,setCounter] = useState(props['value']);

    const handleChange = (value)=>{
        setCounter(counter+value);
    }

    const double = ()=>{
        setCounter(counter*2);
    }
    return (
        <>
            <h1>Counter: {counter}</h1>
            <h3>Flag: {props['flag'] ? "True" : "False"}</h3>
            {props.list.map((elem)=>(
                <li>{elem}</li>
            ))}
            <div className="buttons">
                <p>
                <button onClick={()=>{
                    handleChange(1);
                }}>Add 1</button>
                </p>

                <p>
                <button onClick={()=>{
                    if(counter >= 1){
                        handleChange(-1)
                    }
                }}>Subtract 1</button>
                </p>

                <p>
                <button onClick={()=>{
                    double()
                }}>Double</button>
                </p>
            </div>
        </>
    )
}
