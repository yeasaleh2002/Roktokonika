import { Button, Container, Divider, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import 'aos/dist/aos.css';
import {  NavLink } from 'react-router-dom';


const Footer = () => {

   
  
    return (
        <Box  sx={{ color: 'white' , background: '#363736' }}>
          
             <Container>
           
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
                       
                        <NavLink  style={{textDecoration: 'none', color: 'white'}}  to="/posts"> <Button color="inherit">Post</Button> </NavLink> <Divider sx={{background: 'white', width: '25%'}}></Divider>
                    <NavLink  style={{textDecoration: 'none', color: 'white'}}  to="/volunteers"> <Button color="inherit">Volunteers</Button> </NavLink><Divider sx={{background: 'white', width: '25%'}}></Divider>
                    <NavLink  style={{textDecoration: 'none', color: 'white'}}  to="/contact"> <Button color="inherit">Contact</Button> </NavLink><Divider sx={{background: 'white', width: '25%'}}></Divider>
                    <NavLink  style={{textDecoration: 'none', color: 'white'}}  to="/teams"> <Button color="inherit">Team</Button> </NavLink><Divider sx={{background: 'white', width: '25%'}}></Divider>
                           
                </Grid>
                 
                </Grid>              
              
           </Container>
           <Divider sx={{background: "white"}}/>

             
                {/* footer last part */}
             <Box  sx={{paddinTop: '20px'}}> 
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