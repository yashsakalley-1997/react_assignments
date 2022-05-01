import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



import { TableComponent } from "../TableComponent/TableComponent";


// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';


import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "../../Redux/action";

import Typography from '@mui/material/Typography';


export const Display = ()=>{

    const [open, setOpen] = React.useState(false);
    
    const [data,setData] = React.useState([])

    const { flights,loading,error } = useSelector((state)=>state.flight);
    const dispatch = useDispatch();

    React.useEffect(()=>{
        getData()
    },[])

    const getData = () =>{
        dispatch(getFlights())
    }

    const handleModal = (data)=>{
        setOpen(!open)
        setData(data)
    }

    const handleClose = () => {
        setOpen(false);
    };
    return loading?(
        <h1>Loading the data...</h1>
    ):error?(
        <h1>Error while fetching the data...</h1>
    ):(flights.length > 0)?
    (
        <div>  
                <TableComponent props={{flights,handleModal}}></TableComponent>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >

                <DialogTitle id="alert-dialog-title">
                {`Flight Routes for`}
                </DialogTitle>

                <DialogContent>
                    <TableComponent props={{flights:data}}></TableComponent>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
                </Dialog>
    </div>
    ):""
}