
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useDispatch,useSelector } from "react-redux";
import  "./BookHouse.css";

import { getPets } from "../Redux/action";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { createBooking } from "../Redux/action";

import * as React from 'react';

export const BookHouse = ()=>{
    const { data } = useParams();
    const { pets,loggedIn_user,bookings } = useSelector((state)=>state.entity);
    console.log(bookings)
    const [ formData,setForm ] = React.useState({});

    const [pet,setPet] = React.useState("")

    const dispatch = useDispatch();
    React.useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
        dispatch(getPets(loggedIn_user['_id']))
    }

    const handleChange = (e)=>{
        const {id,value} = e.target;
        setForm(
            {
                ...formData,
                [id]:value
            }
        )
    }


    const handleChangePet = (e)=>{
        setPet(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        let payload = {...formData,
            pet_id:pet,
            user_id:data.split('_')[0],
            pet_home_id:data.split("_")[1],
            status:"Pending"
        };
        dispatch(createBooking(payload))
    }
    

    return (
        <>
        
            <form>
                <div className="form_inputs">
                    <TextField
                    id="start_date"
                    label="Start Date"
                    type="datetime-local"
                    InputLabelProps={{
                        shrink: true
                    }}
                    onChange={handleChange}
                    />

                    <TextField
                        id="end_date"
                        label="End Date"
                        type="datetime-local"
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={handleChange}
                    />

                    <TextField
                        id="pet_category"
                        name="pet_category"
                        select
                        value={pet}
                        onChange={handleChangePet}
                        helperText="Select accepted pet types"
                        >
                        {pets.map((option,i) => (
                            <MenuItem key={i} value={option._id}>
                            {option.pet_name}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                    >Book</Button>
                </div>
            </form>
        </>
    )
}