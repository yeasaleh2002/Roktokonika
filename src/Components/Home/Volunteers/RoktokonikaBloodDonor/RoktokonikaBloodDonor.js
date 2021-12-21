import { CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './RoktokonikaBloodDonor.css';

const RoktokonikaBloodDonor = ({bloodTeam}) => {

    const { address, phone, email ,name, picture,  bloodGroup,totalBloodDonate,  lastDonateDate } = bloodTeam || '';

    useEffect(() => {
     Aos.init({ duration: 2500 })
    }, []);
 
    return (
        <Grid data-aos="fade-right" item xs={12} sm={6} md={4}>
             
              <Paper className='bloodDonor' data-aos="fade-up" elevation={3} sx={{py: 1}}>
               
              <CardMedia
                     data-aos="zoom-in"
                     component="img"
                     style={{ width: '250px', height: '250px',borderRadius: '50%', margin: '0 auto' }}
                     image={picture}
                     className="team-member"
                     alt="green iguana"
                 />

                 <CardContent data-aos="zoom-out">
                 <Typography sx={{color: '#18E1F0', fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                         {name}
                 </Typography>
                 <Typography gutterBottom component="div">
                      Address: {address}
                 </Typography>                                    
                 <Typography  gutterBottom component="div">
                      Email: {email}
                 </Typography>                                    
                 <Typography  gutterBottom component="div">
                      Phone: {phone}
                 </Typography>                                    
                 <Typography  gutterBottom component="div">
                      Blood Group: {bloodGroup}
                 </Typography>                                    
                 <Typography  gutterBottom component="div">
                      Total Blood Donate: {totalBloodDonate}
                 </Typography>                                    
                 <Typography  gutterBottom component="div">
                      Last Donate Date: {lastDonateDate}
                 </Typography>   
             </CardContent>
         
              </Paper>  
            </Grid>
    );
};

export default RoktokonikaBloodDonor;