import { Box,  Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
// import bannar from '../../../image/banner.jpg';
// import support1 from '../../../image/support1.jpg';
// import support2 from '../../../image/support2.jpg';
// import support3 from '../../../image/support3.jpg';
import Typical from 'react-typical'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    // imgPath: {bannar}
    imgPath: 'https://i.ibb.co/CvH4gkn/donate3.jpg'

  },
  {
    // imgPath: {support1}
    imgPath: 'https://i.ibb.co/vktkBdw/support2.jpg'

  },
  {
    // imgPath: {support2}
    imgPath: 'https://i.ibb.co/hfcvFTg/donate6.jpg'

  },
  {
    // imgPath: {support3}
    imgPath: 'https://i.ibb.co/tmhjCxL/donate1.jpg'

  },
];

const Banner = () => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };

    useEffect(() => {
        Aos.init({ duration: 2500 })
     }, []);

    return (
        <Box sx={{backgroundColor: '#F7E4EA'}} >
        
            <Grid data-aos="fade-up" sx={{p: 5}} container spacing={2}>
               

                <Grid  item  xs={12} md={6}>
                    <Box sx={{p: 2}}>
                        <Typography variant="h3" sx={{mb: 2, color: 'red'}}>
                         Welcome ,
                        </Typography>
                        <Typography variant="h4" sx={{fontWeight: "bold", color: "Tomato"}}>
                         "Roktokonika" Family
                        </Typography>
                        <Typography variant="h5"  sx={{ my: 3,  fontWeight: 'bold', color: '#EA3188' }}>
                         We Organization,{' '}
                    
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    'Roktokonika Blood Fund.',
                                    2000,
                                    'Roktokonika Support Humanity.',
                                    2000,
                                    'Roktokonika Clean Team.',
                                    2000,
                                   
                                ]}
                          /> 

                         </Typography>
                     <Typography sx={{color: 'gray'}} variant="h5"> --- If a soul lives in my blood then why don't I donate blood !! --- </Typography>
                    </Box>
                </Grid>

             
                <Grid  item xs={12} md={6} >
                    {/* <img data-aos="zoom-in" style={{ width: '100%', borderRadius: '10%' }} src={roktokonikaLogo}  alt="saleh" /> */}
                    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
                        <Paper
                            square
                            elevation={0}
                            sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                            pl: 2,
                            bgcolor: 'background.default',
                            }}
                        >
                        </Paper>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {images.map((step, index) => (
                            <div  key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                    borderRadius: '10px',
                                    height: '100%',
                                    display: 'block',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    width: '100%',
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                                ) : null}
                            </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                            <Button  
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                                {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                                ) : (
                                <KeyboardArrowRight />
                                )}
                            </Button>
                            }
                            backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                                ) : (
                                <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                            }
                        />
                        </Box>
                </Grid>
            </Grid>

        </Box>
    );
};

export default Banner;
