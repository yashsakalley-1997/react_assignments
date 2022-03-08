import { useState } from "react";


export const GroceryInput = ({addGrocery}) =>{
    const [text,setText] = useState("");
    return <>
    <input type="text" onChange={(e)=>(
        setText(e.target.value)
    )}/>

        <button onClick={()=>(
            addGrocery(text)
        )}>
            ADD
        </button>
    </>
}

