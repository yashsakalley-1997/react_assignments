import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Switch from "@mui/material/Switch";

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();


export const CreateBasic = ({func})=>{
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [formData,setForm] = React.useState({});
  const [status,setStatus] = React.useState("Verified");

  const handleChange = (e)=>{
    const {id,value} = e.target;
    setForm(
        {
            ...formData,
            [id]:value
        }
    )
    func({...formData,...{status}})
    const data = new FormData(e.currentTarget);

  }

  const handleSwitch = ()=>{
      (status === "Verified")?setStatus("Not Verified"):setStatus("Verified")
      func({...formData,...{status}})
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
          <Box component="form" 
          onChange={handleChange}
          noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="name"
                  label="name"
                  type="text"
                  onChange={handleChange}
                  id="name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="city"
                  type="text"
                  onChange={handleChange}
                  id="city"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="address"
                  label="Address"
                  onChange={handleChange}
                  type="text"
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Cost Per Day"
                  type="text"
                  id="cost_per_day"
                  onChange={handleChange}
                />
              </Grid>
            

              <Grid item xs={12} sm={6}>
                <Switch {...label} defaultChecked onChange={handleSwitch}/>
                {status}
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Rating"
                  type="number"
                  id="rating"
                  onChange={handleChange}
                />
              </Grid>
              
            </Grid>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}