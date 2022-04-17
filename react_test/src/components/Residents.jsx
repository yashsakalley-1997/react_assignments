import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export const Residents = ()=>{
    let { id } = useParams();
    id = id.replace(":", "");
    const [data,setData] = useState([]);
    useEffect(()=>{
        getData()
    },[])
    const getData = ()=>{
        axios.get(`http://localhost:8080/residents?id=${id}`).then((res)=>{
            setData(res.data)
        })
    }

    if(data.length == 0){
        return (
            <h1>No tenants as of now in the flat</h1>
        )
    }
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((elem,i)=>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{elem['name']}</td>
                            <td>{elem['gender']}</td>
                            <td>{elem['age']}</td>
                        </tr>
                    ))}
                </tbody>
                </Table>
        </div>
    )
}