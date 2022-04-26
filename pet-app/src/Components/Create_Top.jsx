import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useDispatch } from 'react-redux'; 
import { createEntity } from "../Redux/action";

import { Create } from "./Create";
import { CreateBasic } from "./Create_Basic";

const steps = ['General Details', 'Pet Details'];


const theme = createTheme();

export const CreateTop  = () => {
    const [formData,setFormData] = React.useState({});
    const [activeStep, setActiveStep] = React.useState(0);

    const dispatch = useDispatch();

    const getForm = (form_data)=>{
        setFormData(form_data)
    }
    function getStepContent(step) {
        switch (step) {
            case 0:
            return <CreateBasic func={getForm}/>;
            case 1:
            return <Create props={[formData,getForm]}/>;
            case 2:
            return <Create />;
            default:
            throw new Error('Unknown step');
        }
    }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = ()=>{
    dispatch(createEntity(formData))
  }
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Insert Entity
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 2, pb: 2 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                
                {activeStep === steps.length - 1 ? <Button
                    disabled={(Object.keys(formData).length!==17)?true:false}
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ mt: 3, ml: 1 }}
                  >
                      Submit
                  </Button> :
                <Button
                disabled={(Object.keys(formData).length!==6)?true:false}
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                  Next
              </Button>}
                    
                </Box>
              </React.Fragment>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}