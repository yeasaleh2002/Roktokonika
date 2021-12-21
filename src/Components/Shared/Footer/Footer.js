import { Divider, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import { NavLink } from 'react-router-dom';


const Footer = () => {

   
useEffect(() => {
   Aos.init({ duration: 2500 })
}, []);


    return (
        <Box  sx={{ color: 'white' , background: '#363736' }}>
          
             <Box  data-aos="flip-left">
           
             <Grid   sx={{paddingLeft: "20px", paddingRight: "20px" }} container spacing={1}>

                   {/* contact info part */}
                <Grid item xs={12} md={6}>                   
                     <Typography variant="h5" sx={{ mb: 5, mt: 2  }} style={{ color: 'whitesmoke' }}>
                         CONTACT INFO
                     </Typography>
                     <Typography style={{ color: 'white' }}>
                     <b  style={{ color: '#FBFCFC', fontSize: '25px' }}>Address : </b>  Pangsha , Rajbari , Dhaka
                     </Typography>
                     <Typography variant="h6" sx={{ my: 2 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                     <b  style={{ color: '#FBFCFC', fontSize: '25px' }}>Phone : </b> 012 345 6789
                     </Typography>
                     <Typography variant="h6" sx={{ my: 2 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                     <b  style={{ color: '#FBFCFC', fontSize: '25px' }}>Email : </b> roktokonika707@gmail.com
                     </Typography>                    
                </Grid>
         

                 {/* how to buy part */}
                <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ mb: 4, mt: 2 }} style={{ color: 'whitesmoke' }}>
                           Quice To Access
                        </Typography>
                       
                        <Typography variant="h6" > Post
                        {/* <NavLink style={{ color: 'white', textDecoration: 'none' }} to="/home">Home</NavLink>   */}
                        </Typography>
                       
                        <Typography variant="h6" > Voluenter
                        {/* <NavLink style={{ color: 'white', textDecoration: 'none' }} to="/products">Products</NavLink>   */}
                        </Typography>
                       
                        <Typography variant="h6" > About
                        {/* <NavLink style={{ color: 'white', textDecoration: 'none' }} to="/contact">Contact</NavLink>   */}
                        </Typography>
                       
                        <Typography variant="h6" > Login
                        {/* <NavLink style={{ color: 'white', textDecoration: 'none' }} to="/login">Login</NavLink>   */}
                        </Typography>                       
                </Grid>
                 
                </Grid>              
              
              <Divider sx={{background: "white"}}/>
           </Box>
             
                {/* footer last part */}
             <Box  data-aos="flip-right" sx={{paddinTop: '20px'}}> 
                <Typography variant="h6" style={{ color: 'white' , padding: '15px' , textAlign: 'center' }}>
                 COPYRIGHT © 2021 ROKTOKONIKA & YEASALEH. ALL RIGHTS RESERVED. 
                </Typography>
                <Typography p={2} textAlign={'end'}>Develop and design by <Link target={'blank'} sx={{color: "tomato"}} href="https://yeasaleh-portfolio.web.app/" underline="hover">
                  {'Yeasaleh'}
                  </Link>
                </Typography>
            </Box>
       </Box>
    );
};

export default Footer;