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
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = {
      country_name:data.get("country_name"),
      country_id:uuidv4()
    }
    dispatch(addCountry(formData))
    window.alert("Country Added")
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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            
              <Grid>
                <TextField
                  required
                  label="name"
                  type="text"
                  id="country_name"
                  name="country_name"
                />
              </Grid>


              <Grid>
                <Button
                    type='submit'
                    variant="contained"
                    sx={{ mt: 1, ml: 1 }}
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