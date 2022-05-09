import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';

import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createPet, getPets } from '../Redux/action';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const theme = createTheme();

export const PetDetails = ()=>{
    const [pet,setPet] = React.useState("Dogs")
    const [food,setFood] = React.useState("Veg");


    const dispatch = useDispatch();

    const {pets,loggedIn_user} = useSelector((state)=>state.entity);
    React.useEffect(()=>{
      getData()
    },[])
    
    const getData = ()=>{
      dispatch(getPets(loggedIn_user['_id']))
    }
    // const handleChange = (e)=>{
    //     const {id,value} = e.target;
    //     setForm(
    //         {
    //             ...formData,
    //             [id]:value
    //         }
    //     )
    // }

    const handleSubmit = (e)=>{
      e.preventDefault();
        const data = new FormData(e.currentTarget);
        const formData = {
          "pet_type":data.get("pet_type"),
          "food_type":data.get("food_type"),
          "weight":data.get("weight"),
          "pet_name":data.get("pet_name"),
          "user_id":loggedIn_user._id
        }
        dispatch(createPet(formData))
    }

    const pet_cats = [
        {
            value:"Dogs",
            label:"Dogs"
        }
        ,
        {
            value:"Cats",
            label:"Cats"
        }
        ,
        {
            value:"Rabits",
            label:"rabits"
        }
    ]

    const foodTypes = [
        {
            value:"Veg",
            label:"Veg"
        }
        ,
        {
            value:"Non Veg",
            label:"Non Veg"
        }
    ]

    const handleChangePet = (event) => {
        setPet(event.target.value)
    }

    const handleChangeFood = (event) =>{
        setFood(event.target.value);
    }

    return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={1
                }>
                  <Grid item xs={12} sm={6}>
                    <TextField
                        id="pet_type"
                        name="pet_type"
                        select
                        value={pet}
                        helperText="Select accepted pet types"
                        onChange={handleChangePet}
                        >
                        {pet_cats.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                  </Grid>
    
    
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="pet_name"
                      name='pet_name'
                      label="Name"
                      type="text"
                    />
                    
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      label="Weight."
                      type="number"
                      id="weight"
                      name='weight'
                    />
                  </Grid>
                
                  <Grid item xs={12} sm={6}>
                    <TextField
                        id="food_type"
                        name="food_type"
                        select
                        value={food}
                        onChange={handleChangeFood}
                        helperText="Select accepted pet types"
                        >
                        {foodTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                  </Grid>


                  <Grid item xs={12}>
                    <Button 
                    type='submit'
                    variant="contained">Add</Button>
                  </Grid>
                  
                  <Grid item xs = {12}>
                  <TableContainer component={Paper}>
                      <Table sx={{ maxWidth: 800,margin:"auto"}} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Weight</TableCell>
                            <TableCell align="right">Food Type</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {pets.map((row,id) => (
                            <TableRow
                              key={id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell align='right'>{id+1}</TableCell>
                              <TableCell align="right">{row.pet_type}</TableCell>
                              <TableCell align="right">{row.pet_name}</TableCell>
                              <TableCell align="right">{row.weight}</TableCell>
                              <TableCell align="right">{row.food_type}</TableCell>
                              
                            </TableRow>
                          ))}
                        </TableBody>
                    </Table>
                  </TableContainer>
                  </Grid>
                </Grid>
                
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
    }
