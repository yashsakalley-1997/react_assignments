import { useState } from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import axios from "axios";



export const AddCities = ()=>{
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
        axios.post("http://localhost:8080/cities",formData).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log("some error ocurred")
        })
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="country_name" onChange={formChange}>
                        <Form.Label>Please Enter the Contry Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Country Name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="city_name" onChange={formChange}>
                    <Form.Label>Please Enter the City Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter City Name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="city_population" onChange={formChange}>
                    <Form.Label>Please Enter the Population of the city</Form.Label>
                    <Form.Control type="number" placeholder="Enter City population"/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={submit}
                disabled={(Object.keys(formData).length === 3)?false:true}
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}