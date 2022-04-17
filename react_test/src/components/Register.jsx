import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";

export const Register = ()=>{

    const Navigate = useNavigate();
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
        console.log(formData)
        axios.post("http://localhost:8080/register",formData).then((res)=>{
            Navigate("/login")
        })
    }

    return (
        <div className="input_form">
            <Form>
                <Form.Group className="mb-3" controlId="name" onChange={formChange}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email" onChange={formChange}>
                    <Form.Label>Email Id</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password" onChange={formChange}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>

                
                <Button variant="primary" type="submit" onClick={submit}
                disabled={(Object.keys(formData).length === 3)?false:true}
                >
                    Register
                </Button>
            </Form>
        </div>
    )
}