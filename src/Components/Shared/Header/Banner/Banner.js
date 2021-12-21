import { Box,  Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import roktokonikaLogo from '../../../image/favicon.jpg';
import Typical from 'react-typical'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {


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

             
                <Grid  sx={{mt: 7, mb: 3}} item xs={12} md={6} >
                    <img data-aos="zoom-in" style={{ width: '100%', borderRadius: '10%' }} src={roktokonikaLogo}  alt="saleh" />
                </Grid>
            </Grid>

        </Box>
    );
};

export default Banner;