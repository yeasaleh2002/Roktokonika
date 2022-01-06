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
    imgPath: 'https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/269627867_3073426722922977_2692702674766646725_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8631f5&_nc_eui2=AeE4Xb0BF6FA5znUUSdAUrs6-jdSiLQhYIv6N1KItCFgi5OayODM2KdJcd4G8pdrcT8us719kyGpipQm5xyNMzl3&_nc_ohc=SqHzQab6lz4AX8kFydB&tn=5luqzDoOS606bjhz&_nc_ht=scontent.fjsr8-1.fna&oh=00_AT_f1ZBX4qOLcITG0vuRpreSyJoCqhsKIw3cmTad2_vf5w&oe=61DBD8FC'
  },
  {
    // imgPath: {support1}
    imgPath: 'https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-6/263034689_441827677508987_4515360456735515423_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=b9115d&_nc_eui2=AeEJFriCeaNv_93Me-8nc3-rIUAY9Zbvck8hQBj1lu9yT9pGdOwByOug4bnbB0SuR9fKDyLTAvJjyNDfmB7sKtpz&_nc_ohc=xTJ24Gv2bMMAX9wJPAo&_nc_ht=scontent.fdac134-1.fna&oh=00_AT8w0594ErR2WTkUYMSEgrpYHb2VhRNJW4O6lLqn8lLECw&oe=61DB6A13'

  },
  {
    // imgPath: {support2}
    imgPath: 'https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-6/270174318_3079335092332140_7903246285836668751_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=b9115d&_nc_eui2=AeF7d6XL4EdRD6fPMy1GPKZLj0qCciSEhEWPSoJyJISERcEXzF-4TNm294QZJ2b9C7bxJT1A9PbbuKY9YnrD0CqY&_nc_ohc=i2WXglV3pboAX_mM7Ml&_nc_ht=scontent.fdac134-1.fna&oh=00_AT8cFRIzXUZL78T_IfIgKjCyRROTEqT4ncRxpVMTnlGc3A&oe=61DCBE55'

  },
  {
    // imgPath: {support3}
    imgPath: 'https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-6/266349875_426890712258476_3380541203826989172_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=b9115d&_nc_eui2=AeHZl2uebULjk2viI1LaZ7qufT5KfZiOi5R9Pkp9mI6LlI8HdPj14r6yA-JKpKujR6FvTjyNci4mo_5J1qQdMSik&_nc_ohc=-AGyQyNU_XEAX9sWD9y&_nc_ht=scontent.fdac134-1.fna&oh=00_AT-D4K26ve0MttPeFpINUUIF-cvwDhwr4Jo4AH1p1nkc5Q&oe=61DB7A31'

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
                     <Typography sx={{color: 'gray'}} variant="h5"> *** If a soul lives in my blood then why don't I donate blood !! ***</Typography>
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
