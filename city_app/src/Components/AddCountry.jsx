import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from "react-redux";
import { addCountry } from "../Redux/actions";

const theme = createTheme();

export const AddCountry = ()=>{
  const [formData,setForm] = React.useState({});
  const dispatch = useDispatch();


  const handleChange = (e)=>{
    const {id,value} = e.target;
    setForm(
        {
            ...formData,
            country_id:uuidv4(),
            [id]:value
        }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCountry(formData))
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
            
              <Grid>
                <TextField
                  required
                  name="name"
                  label="name"
                  type="text"
                  onChange={handleChange}
                  id="country_name"
                />
              </Grid>


              <Grid>
                <Button
                    variant="contained"
                    sx={{ mt: 1, ml: 1 }}
                    onClick={handleSubmit}
                >
                    Submit Country
                </Button>
              </Grid>
              
            </Grid>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}