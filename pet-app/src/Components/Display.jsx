

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


import { useDispatch, useSelector } from "react-redux";

import { filterEntity } from '../Redux/action';


export const Display  = () => {
    const { entities } = useSelector((state)=>state);
    // const [data,setData] = React.useState([]);

    const dispatch = useDispatch();


    const handleSearch = (e)=>{
        if(e.key === "Enter"){
            const action = filterEntity(e.target.value);
            let data = dispatch(action);
            console.log(data)
        }
    }
  return (
    <>
    <Grid item xs={12} sm={6}>
        <Grid item xs={12} sm={6}>
            <TextField
                required
                label="Search by City"
                type="text"
                onKeyDown={handleSearch}
            //   onChange={handleChange}
                id="supervision_level"
            />
        </Grid>
    </Grid>
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 800,margin:"auto","margin-top":"50px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Capacity</TableCell>
            <TableCell align="right">Cost Per Day</TableCell>
            <TableCell align="right">Verified</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entities.map((row,id) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='right'>{id+1}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.pet_numbers}</TableCell>
              <TableCell align="right">{row.cost_per_day}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
