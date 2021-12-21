import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Box,  Container,  Grid, Typography } from '@mui/material';
import logo from '../../../image/favicon.jpg';



const About = () => {

            
        useEffect(() => {
            Aos.init({ duration: 2500 })
        }, []);


    return (
        <div data-aos="fade-left">
              <Container data-aos="fade-right" sx={{ flexGrow: 1 }}>
             <Grid  sx={{p: 5}} container spacing={2}>
              
              
               <Grid  sx={{mt: 4, mb: 3}} item xs={12} md={6} >
                    <img data-aos="zoom-out" style={{ width: '100%', borderRadius: '10px'}} src={logo}  alt="logo" />
                </Grid>

               
                <Grid  item  xs={12} md={6}>
                    <Box data-aos="zoom-in" sx={{p: 2}}>
                        <Typography variant="h4" sx={{mb: 2, color: 'tomato'}}>
                           Mission and Vision
                        </Typography>
                     
                        <Typography  sx={{ my: 1, fontSize: 20, fontWeight: 400}}>
                        Our main purpose is regular blood donation, encouraging people to donate blood, working to find blood in times of crisis. Also, we are always by your side in any kind of humanitarian work. In Sha Allah.
                        We are all for everyone Each of us is the next generation. You will be by my side in my need; you will be by my side in your need. This is a local organization
                        </Typography>
                        
                       
                    </Box>
                </Grid>                
            </Grid>
         </Container>

           
        </div>
    );
};

export default About;