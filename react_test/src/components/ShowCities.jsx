import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import Table from "react-bootstrap/Table";

export const ShowCities = ()=>{
    const [data,setData] = useState([]);
    const [idData,setIdData] = useState({});

    const [countries,setCountries] = useState([]);

    const [show, setShow] = useState(false);

    const [formData,setForm] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        getData()
        getCountries()
    },[])

    const getData = ()=>{
        axios.get("http://localhost:8080/cities").then((res)=>{
            setData(res.data)
        })
    }

    const handleChange = (e)=>{
        axios.get(`http://localhost:8080/cities?country_name=${e.target.value}`).then((res)=>{
            setData(res.data)
        })
    }

    const getCountries = ()=>{
        axios.get("http://localhost:8080/countries").then((res)=>{
            setCountries(res.data)
        })
    }

    const handleDelete = (id)=>{
        axios.delete(`http://localhost:8080/cities/${id}`).then((res)=>{
            getData()
        }).then((err)=>{
            console.log(err)
        })
    }

    const handleEdit = (id)=>{
        handleShow()
        axios.get(`http://localhost:8080/cities/${id}`).then((res)=>{
            setIdData(res.data)
        })
    }

    function handleSort(str){
        if(str === "ascending"){
            data.sort(function(a,b){
                return a['city_population']-b['city_population']
            })
            setData(data)
        }
        else if(str === "descending"){
            data.sort(function(a,b){
                return Number(b['city_population'] - a['city_population'])
            })
            setData(data)
        }
    }
    
    const handleForm = (e)=>{
        const {id,value} = e.target;
        setForm(
            {
                ...formData,
                [id]:value
            }
        )
    }

    const submitEdit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8080/cities/${idData['id']}`,formData).then((res)=>{
            getData(res.data)
        })
    }
    return (
        <div>
            <button onClick={()=>{
                handleSort("descending")
            }}>Sort by Population Descending</button>

            <button onClick={()=>{
                handleSort("ascending")
            }}>Sort by Population Ascending</button>
            <select onChange={handleChange}>
                {countries.map((elem,i)=>(
                    <option key={i} value={elem['country_name']} >{elem['country_name']}</option>
                ))}
            </select>   
            
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <input type="text" placeholder="country_name" id="country_name" defaultValue={idData['country_name']} onChange={handleForm}/>
                <input type="text" placeholder="city_name" id="city_name" defaultValue={idData['city_name']} onChange={handleForm}/>
                <input type="number" placeholder="city_population" id="city_population" defaultValue={idData['city_population']} onChange={handleForm}/>
                
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Population</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((elem,i)=>(
                        <tr key={i}>
                            <td>{elem['id']}</td>
                            <td>{elem['country_name']}</td>
                            <td>{elem['city_name']}</td>
                            <td>{elem['city_population']}</td>
                            <td>
                                <span onClick={()=>{
                                    handleEdit(elem['id'])
                                }}>Edit</span>
                            </td>
                            <td>
                                <span onClick={()=>{
                                    handleDelete(elem['id'])
                                }}>Delete</span>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
                </Table>
        </div>
    )
}