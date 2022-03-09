import axios from "axios";
import { useState } from "react"
import { useEffect } from "react";

import { GroceryInput } from "./GroceryInput"
import { GroceryList } from "./GroceryList";

export const Grocery = () =>
{   
    const [groceries,setGroceries] = useState([]);
    const [page,setPage] = useState(1);
    
    useEffect(()=>{
        getData()
    },[page])

    const pageCounter = (value)=>{
        if(page+value>0){
            setPage(page+value)
        }
    }

    const addGrocery = (data)=>{
        axios.post("http://localhost:3001/groceries",{"title":data}).then((res)=>{
        });
        getData()
    }

    const getData = ()=>{
        axios.get(`http://localhost:3001/groceries?_limit=5&_page=${page}`).then((res)=>{
        if(res.data.length>0)
            setGroceries(res.data)
        });
    }

    const deleteFunction = (data)=>{
        axios.delete(`http://localhost:3001/groceries/${data['id']}`).then((res)=>{
        })
        getData();
    }

    
    return <>
    <h1>Grocery Management System</h1>
    <GroceryInput addGrocery={addGrocery}></GroceryInput>
    <GroceryList items={groceries} pageCounter={pageCounter}
    deleteFunction = {deleteFunction}></GroceryList>
    </>
}