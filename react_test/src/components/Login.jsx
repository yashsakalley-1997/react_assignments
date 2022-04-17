import { useState } from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import axios from "axios";

import { useNavigate } from "react-router-dom";



export const Login = ()=>{

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
        axios.post("http://localhost:8080/login",formData).then((res)=>{
            if(res.status == 200){
                console.log(res)
                Navigate("/");
            }
        }).catch((err)=>{
            console.log("some error ocurred")
        })
    }

    return (
        <div className="input_form">
            <Form>
                <Form.Group className="mb-3" controlId="email" onChange={formChange}>
                        <Form.Label>Enter Email</Form.Label>
                        <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password" onChange={formChange}>
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>


                <Button variant="primary" type="submit" onClick={submit}
                disabled={(Object.keys(formData).length === 2)?false:true}>
                    Login
                </Button>
            </Form>
        </div>
    )
}