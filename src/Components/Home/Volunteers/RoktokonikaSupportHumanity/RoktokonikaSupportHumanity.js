import { CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './RoktokonikaSupportHumanity.css';


const RoktokonikaSupportHumanity = ({supportteam}) => {
    const { name, picture, address, email, phone, gender, age, bloodGroup, support} = supportteam || '';

    useEffect(() => {
     Aos.init({ duration: 2500 })
     }, []);
 
    return (
        <Grid data-aos="fade-left" item xs={12} sm={6} md={4}>
              <Paper className='supportTeam' elevation={3} sx={{py: 1}}>
               
                      <CardMedia
                            data-aos="fade-in"
                            component="img"
                            style={{ width: '250px', height: '250px',borderRadius: '50%', margin: '0 auto' }}
                            image={picture}
                            className="team-member"
                            alt="green iguana"
                        />

                        <CardContent data-aos="fade-out">
                        <Typography sx={{color: 'red', fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                                {name}
                        </Typography>
                        <Typography gutterBottom component="div">
                             Position : {address}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Email : {email}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Phone : {phone}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Gender : {gender}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Age : {age}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Blood Group : {bloodGroup}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                         Is support team member? : {support}
                        </Typography>                                    
                        </CardContent>
         
              </Paper>  
            </Grid>
    );
};

export default RoktokonikaSupportHumanity;