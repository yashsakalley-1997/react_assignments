

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
import MenuItem from '@mui/material/MenuItem';

import { v4 as uuidv4 } from 'uuid';  


import { useDispatch, useSelector } from "react-redux";

import { getEntities,filterEntity, sortEntities } from "../Redux/action";
import { useNavigate } from 'react-router-dom';


export const Display  = () => {
    const { entities,loading,error,loggedIn_user } = useSelector((state)=>state.entity);
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const [cost,setCoust] = React.useState("");
    const [rating,setRating] = React.useState("");
    const [verified,setVerified] = React.useState("");

    React.useEffect(()=>{
      getData()
    },[])

    const getData = ()=>{
      dispatch(getEntities())
    }

    const handleSearch = (e)=>{
        if(e.key === "Enter"){
            dispatch(filterEntity({
              by:e.target.id,
              value:e.target.value
            }));
        }
    }

  
    const handleChange = (e)=>{
      setCoust(e.target.value)
      dispatch(sortEntities(['cost_per_day',e.target.value]))
    }

    const handleChange1 = (e)=>{
      setRating(e.target.value)
      dispatch(sortEntities(['rating',e.target.value]))
    }

    const handleChange2 = (e)=>{
      setVerified(e.target.value)

      dispatch(filterEntity({
        by:"status",
        value:e.target.value
      }));
    }
    
  return loading?(
    <h1>Loading the Data....</h1>
  ):error?(
    <h1>Error while fetching the data</h1>
  ):(
    <>
    <Grid>
            <Grid>
                <TextField
                    required
                    label="Search by City"
                    id='city'
                    sx={{ mt: 1, ml: 1 }}
                    type="text"
                    onKeyPress={handleSearch}
                />
            </Grid>

            <div className='buttons'>
                <Grid mt={2}>
                    <TextField
                        select
                        helperText="Sort by Cost per Day"
                        label="Sort by Cost"
                        value={cost}
                        onChange={handleChange}
                        >
                          <MenuItem value="desc">Descending</MenuItem>
                          <MenuItem value="asc">Ascending</MenuItem>
                    </TextField>

                    <TextField
                        select
                        helperText="Sort by Rating"
                        value={rating}
                        label="Sort by Rating"
                        onChange={handleChange1}
                        >
                          <MenuItem value="desc">Descending</MenuItem>
                          <MenuItem value="asc">Ascending</MenuItem>
                    </TextField>

                    <TextField
                        select
                        helperText="Filter by Verified"
                        onChange={handleChange2}
                        value={verified}
                        id='status'
                        label="Sort by Verified"
                        >
                          <MenuItem value="Verified">Verified</MenuItem>
                          <MenuItem value="Not Verified">Not Verified</MenuItem>
                    </TextField>
                </Grid>
            </div>
        </Grid>
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 800,margin:"auto"}} aria-label="simple table">
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
              key={uuidv4()}
              onClick= {()=>{
                (loggedIn_user['user_type'] === "user")?Navigate(`/details/${row['_id']}`):console.log()
              }}
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
