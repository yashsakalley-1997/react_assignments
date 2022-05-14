


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch,useSelector } from 'react-redux';
import { addCity,getCountries } from '../Redux/actions'; 

const theme = createTheme();


export const AddCity = ()=>{
  const [formData,setForm] = React.useState({});
  const [country,setCountry] = React.useState("");
  const { countries,countryLoading,countryError }  = useSelector((state)=>state.city_app)
  const dispatch = useDispatch();

  React.useEffect(()=>{
    getData()
  },[])  


  const handleSubmit = (e)=>{
    e.preventDefault()
    const data = new FormData(e.currentTarget);
    const formData = {
      "city_name":data.get("city_name"),
      "population":data.get("population"),
      "country":data.get("country_name")
    }
    dispatch(addCity(formData))
    window.alert("City Inserted")
  }



  const getData = ()=>{
    dispatch(getCountries())
  }
 
  const handleCountryChange = (e)=>{
    setCountry(e.target.value);
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
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="City_Name"
                  type="text"
                  id="city_name"
                  name="city_name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="population"
                  type="number"
                  id="population"
                  name='population'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                {(countryLoading === true)?<span>Loading the countries</span>:
                <TextField
                      required
                      select
                      value={country}
                      onChange={handleCountryChange}
                      name="country_name"
                      id='country_name'
                      helperText="Select Countries"
                      >
                      {countries.map((option,i) => (
                          <MenuItem 
                          id='country_name'
                          key={i} value={option.country_name}>
                          {option.country_name}
                          </MenuItem>
                      ))}
                  </TextField>}
              </Grid> 
              
                            
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  type='submit'
                  sx={{ mt: 2, ml: 1 }}
                  disabled={(countryLoading === true 
                    || countryError === true )?true:false}
                >
                    Add City
                </Button>
              </Grid>

            </Grid>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}