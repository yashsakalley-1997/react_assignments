import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";

export const AddCountries = ()=>{

    const [formData,setForm] = useState({});

    const formChange = (e)=>{
        const {id,value} = e.target;
        setForm(
            {
                ...formData,
                [id]:value
            }
        )
    }


    const submit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/countries",formData).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log("some error ocurreds")
        })
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="country_name" onChange={formChange}>
                    <Form.Label>Please Enter the Contry Name</Form.Label>
                    <Form.Control type="Country Name" placeholder="Enter Country Name"/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={submit}
                disabled={(formData['country_name'] !== undefined)?false:true}
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}