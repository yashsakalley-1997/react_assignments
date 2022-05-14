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
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';


import ReactPaginate from "react-paginate";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { v4 as uuidv4 } from 'uuid';


import { useDispatch,useSelector } from 'react-redux';
import { getCities,cityPagination,filterCity,sortCities,deleteCity,getCountries,updateCity } from '../Redux/actions';

export const Display = ()=>{
    const [modalData,setModalData] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const [country,setCountry] = React.useState("");
    const [pageNumber,setPageNumber] = React.useState(1);

    

    const dispatch = useDispatch();
    let {cities,pageCities,loading,error,countries,deleteLoading,deleteError} = useSelector((state)=>state.city_app)
  

    React.useEffect(()=>{
        getData()
        dispatch(cityPagination({"start":firstIndex,"end":lastIndex}))
    },[])

    const getData = ()=>{
        dispatch(getCities())

    }

    const handleCountryChange = (e)=>{
      setCountry(e.target.value);
    }

    const cityPerPage = 2;
    let lastIndex = pageNumber*cityPerPage;
    let firstIndex = lastIndex - cityPerPage;
    
    const pageChange = (e,value)=>{
      setPageNumber(value)
      lastIndex = value*cityPerPage;
      firstIndex = lastIndex - cityPerPage;
      dispatch(cityPagination({"start":firstIndex,"end":lastIndex}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        const formData = {
          city_name:data.get("city_name"),
          population:data.get("population"),
          country:data.get("country_name")
        }
        const payload = {...modalData,...formData}
        if(!payload['country']){
          payload['country'] = modalData['country']
        }
        dispatch(updateCity(payload))    
        setOpen(false)
    }
    
    const handleSearch = (e)=>{
        if(e.key === "Enter"){
            dispatch(filterCity(e.target.value))
        }
    }


    const sortData = (value)=>{
        dispatch(sortCities(value))
    }

    const handleModal = (data)=>{
        dispatch(getCountries())
        setOpen(true)
        setModalData(data)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (payload) => {
        dispatch(deleteCity(payload['id']))
    }



    return loading?(
        <h1>Loading the Data....</h1>
      ):error?(
        <h1>Error while fetching the data</h1>
      ):(
        <>
        <Grid item xs={12} sm={6}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    label="Search by Country"
                    sx={{ mt: 1, ml: 1 }}
                    type="text"
                    onKeyPress={handleSearch}
                    id="supervision_level"
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <Button
                    variant="contained"
                    sx={{ mt: 1, ml: 1 }}
                    onClick={()=>{
                        sortData("ascending")
                    }}
                >
                    Population Ascending
                </Button>

                <Button
                    variant="contained"
                    sx={{ mt: 1, ml: 1 }}
                    onClick={()=>{
                        sortData("descending")
                    }}
                >
                    Population Descending
                </Button>
            </Grid>
        </Grid>
        
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 800,margin:"auto" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">Country</TableCell>
                <TableCell align="right">Population</TableCell>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pageCities.map((row,id) => (
                <TableRow
                  key={uuidv4()}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align='right'>{id+1}</TableCell>
                    <TableCell align="right">{row.city_name}</TableCell>
                    <TableCell align="right">{row.country}</TableCell>
                    <TableCell align="right">{row.population}</TableCell>
                    <TableCell align="right">
                    <Button
                        variant="contained"
                        sx={{ mt: 1, ml: 1 }}
                        onClick={()=>{
                            handleModal(row)
                        }}
                    >
                        Edit
                    </Button>
                    </TableCell>
                    <TableCell align="right">
                    <Button
                        variant="contained"
                        sx={{ mt: 1, ml: 1 }}
                        onClick={()=>{
                            handleDelete(row)
                        }}
                        disabled={(deleteLoading['id'] === row['id'] || deleteError['id'] === row['id'])?true:false}
                    >
                        Delete
                    </Button>
                    </TableCell>
                </TableRow>
              ))}
              
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2}>
          <Pagination 
          onChange={pageChange}
          count={Math.ceil([...cities].length/cityPerPage)} />
        </Stack>

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >


            <DialogContent>
            <Box component="form" onSubmit={handleSubmit} sx={{mt:3}}>
                  <Grid container spacing={2}>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="city_name"
                      label="City_Name"
                      type="text"
                      defaultValue={modalData.city_name}
                      id="city_name"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      label="population"
                      type="number"
                      defaultValue={modalData.population}
                      id="population"
                      name="population"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                          id="country_name"
                          name="country_name"
                          select
                          value={country}
                          helperText="Select Countries"
                          onChange={handleCountryChange}
                          >
                          {countries.map((option,i) => (
                              <MenuItem key={i} value={option.country_name}>
                              {option.country_name}
                              </MenuItem>
                          ))}
                      </TextField>
                  </Grid> 
                  
                                
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      type='submit'
                      sx={{ mt: 2, ml: 1 }}
                    >
                        Update City
                    </Button>
                  </Grid>

                </Grid>
            </Box>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
        </Dialog>
        </>
      );


}