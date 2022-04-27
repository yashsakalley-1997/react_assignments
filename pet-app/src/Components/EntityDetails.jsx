
import * as React from "react";
import { useParams,useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


export const EntityDetails = ()=>{
    let { id } = useParams();
    const { entities,loggedIn_user } = useSelector((state)=>state.entity);
    const [entity,setEntity] = React.useState([]);

    const Navigate = useNavigate();

    React.useEffect(()=>{
        filter();
    },[])
    
    const filter = ()=>{
        let arr = entities.filter((elem)=>{
            return elem['_id'] === id
        })
        console.log(arr)
        setEntity(arr)
    }
    
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 800,margin:"auto","margin-top":"50px" }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Weight Category</TableCell>
                        <TableCell align="right">Supervision Level</TableCell>
                        <TableCell align="right">Buffer Place</TableCell>
                        <TableCell align="right">Sleeping Place</TableCell>
                        <TableCell align="right">Poo Breaks</TableCell>
                        <TableCell align="right">Walks Per Day</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {entity.map((row,id) => (
                        <TableRow
                        key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align='right'>{id+1}</TableCell>
                        <TableCell align="right">{row.weight}</TableCell>
                        <TableCell align="right">{row.supervision_level}</TableCell>
                        <TableCell align="right">{row.buffer_place}</TableCell>
                        <TableCell align="right">{row.sleeping_place}</TableCell>
                        <TableCell align="right">{row.poo_breaks}</TableCell>
                        <TableCell align="right">{row.walks_per_day}</TableCell>
                        
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Grid item xs={12}>
                <Button 
                sx={{ mt: 3, ml: 1 }}
                onClick={()=>{
                    Navigate(`/book/${loggedIn_user["_id"]+"_"+id}`)
                }}
                variant="contained">Book</Button>
            </Grid>
        </>
    
    )
}