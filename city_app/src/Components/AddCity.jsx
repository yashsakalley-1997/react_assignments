


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
  const { countries }  = useSelector((state)=>state.city_app)
  const dispatch = useDispatch();

  React.useEffect(()=>{
    getData()
  },[])  

  const handleChange = (e)=>{
    const {id,value} = e.target;
    setForm(
        {
            ...formData,
            [id]:value
        }
    )
  }

  const handleCountryChange = (e)=>{
    e.preventDefault();
    setCountry(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addCity({...formData,country}))
  }

  const getData = ()=>{
    dispatch(getCountries())
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
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="city_name"
                  label="City_Name"
                  type="text"
                  onChange={handleChange}
                  id="city_name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="population"
                  type="number"
                  onChange={handleChange}
                  id="population"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                      id="country_name"
                      name="country_name"
                      select
                      value={country}
                      onChange={handleCountryChange}
                      helperText="Select Countries"
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
                  sx={{ mt: 2, ml: 1 }}
                  onClick={handleSubmit}
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