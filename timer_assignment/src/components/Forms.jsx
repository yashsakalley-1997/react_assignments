import { useState } from "react";

export const Forms= () =>{
    const [formData,formChange] = useState({});

    const handleChange = (e)=>{
        const {id,value} = e.target;
        formChange({
            ...formData,
            [id]:value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
    }
    return (
        <form>
            <input 
            type="text" 
            id="name" 
            onChange={handleChange}
            placeholder="Enter your name"/>

            <input 
            type="number" 
            id="age"
            placeholder="age"
            onChange={handleChange}/>

            <input type="submit" 
            name="submit"
            onClick={handleSubmit}/>
        </form>
    )
}