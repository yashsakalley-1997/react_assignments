

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';

const theme = createTheme();


export const Create = ({props})=>{



  const [weight, setWeight] = React.useState('1-5 kg');
  const [pet,setPet] = React.useState("Dogs")
  const [formData,setForm] =  React.useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({...formData,...{weight,pet}})
  };

  const handleChange = (e)=>{
    const {id,value} = e.target;
    setForm(
        {
            ...formData,
            [id]:value
        }
    )
    props[1]({...props[0],...formData,...{weight,pet}})
  }
  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleChangePet = (event) => {
    setPet(event.target.value)
  }

  const currencies = [
    {
      value: '1-5 kg',
      label: '1-5 kg',
    },
    {
      value: '5-10 lg',
      label: '5-10 kg',
    },
    {
      value: '20-40 kg',
      label: '20-40 kg',
    },
    {
      value: '40+ kg',
      label: '40+ kg',
    },
  ];

  const pets = [
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                    id="pet_category"
                    name="pet_category"
                    select
                    value={pet}
                    onChange={handleChangePet}
                    helperText="Select accepted pet types"
                    >
                    {pets.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    id="pet_weight_category"
                    select
                    value={weight}
                    onChange={handleChangeWeight}
                    helperText="Select pet weight category"
                    >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="pet_numbers"
                  name='pet_numbers'
                  onChange={handleChange}
                  label="Pet Capacity"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Supervision level"
                  type="text"
                  onChange={handleChange}
                  id="supervision_level"
                />
              </Grid>
            
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="buffer_place"
                  label="If they are left unsupervised?"
                  type="text"
                  onChange={handleChange}
                  id="buffer_place"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Sleeping Place"
                  type="text"
                  onChange={handleChange}
                  id="sleeping_place"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="poo_breaks"
                  label="Poo Breaks"
                  onChange={handleChange}
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Number of Walks per day."
                  type="number"
                  onChange={handleChange}
                  id="walks_per_day"
                />
              </Grid>
            
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Type of the house"
                  type="text"
                  id="house_type"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Outdoor area size"
                  type="text"
                  id="area_size"
                  onChange={handleChange}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  label="Emergency Transport"
                  type="text"
                  id="emergency_transport"
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