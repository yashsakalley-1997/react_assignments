import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

export const ShowFlats = ()=>{
    const Navigate = useNavigate();
    const [data,setData] = useState([]);
    const [formData,setForm] = useState({});
    const [page,setPage] = useState(1);


    const formSet = (e)=>{
        const {id,value} = e.target;
        setForm(
            {
                ...formData,
                [id]:value
            }
        )
    }

    const search = (e)=>{
        e.preventDefault()
        axios.get(`http://localhost:8080/block?block_name=${formData.block_name}`).then((res)=>{
            axios.get(`http://localhost:8080/flats?block=${res.data["_id"]}`).then((res1)=>{
                setData(res1.data)
            })
        })
    }

    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
        axios.get(`http://localhost:8080/flats?page=${page}`).then((res)=>{
            setData(res.data)
        })
    }

    const handleIncrement = (value)=>{
        if(page+value < 1){
            return
        }
        console.log(page+value)
        // console.log(data.length)
        // else if(page+value >= data.length){
        //     return
        // }
        setPage(page+value);
        getData();
    }

    const handleChange = (e)=>{
        axios.get(`http://localhost:8080/flats?type=${e.target.value}`).then((res)=>{
            setData(res.data)
        })
    }

    function handleSort(str){
        axios.get(`http://localhost:8080/flats/sort?value=${str}`).then((res)=>{
            setData(res.data)
        })
    }
    

    return (
        <div>
            <div className="top_buttons">
                <button onClick={()=>{
                    handleSort("desc")
                }}>Sort by Flat Number Descending</button>

                <button onClick={()=>{
                    handleSort("asc")
                }}>Sort by Flat Number Ascending</button>

                <select onChange={handleChange}>
                    <option value="Owner">Owner</option>
                    <option value="Tenant">Tenant</option>
                </select>    

                <form>
                    <input type="text" id="block_name" placeholder="Enter block name"
                    onChange={formSet}
                    onKeyDown={(e)=>{
                        if(e.key === "Enter"){
                            search(e)
                        }
                    }}/>
                </form>
            </div>   
            
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Block</th>
                    <th>Flat Number</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((elem,i)=>(
                        <tr onClick={()=>{
                            Navigate(`/residents/:${elem['_id']}`)
                        }} key={i}>
                            <td>{i+1}</td>
                            <td>{elem['type']}</td>
                            <td>{elem['block']['block_number']}</td>
                            <td>{elem['flat_number']}</td>
                        </tr>
                    ))}
                </tbody>
                </Table>

                <div className="pagination">
                    <button onClick={()=>{
                        handleIncrement(-1);
                    }}>Previous Page</button>

                    <span>{page}</span>

                    <button onClick={()=>{
                        handleIncrement(1)
                    }}>Next Page</button>
                </div>
        </div>
    )
}