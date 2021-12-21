import { CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './RoktokonikaClean.css';


const RoktokonikaClean = ({cleanTeam}) => {
    const { name, picture, address, email, phone, gender, age, bloodGroup, clean} = cleanTeam || '';

    useEffect(() => {
     Aos.init({ duration: 2500 })
     }, []);

  
    return (
        <Grid data-aos="fade-down" item xs={12} sm={6} md={4}>
              <Paper className='cleanTeam' elevation={3} sx={{py: 1}}>
               
                      <CardMedia
                            data-aos="fade-out"
                            component="img"
                            style={{ width: '250px', height: '250px',borderRadius: '50%', margin: '0 auto' }}
                            image={picture}
                            className="team-member"
                            alt="green iguana"
                        />

                        <CardContent data-aos="fade-in">
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
                         Is Clean team member? : {clean}
                        </Typography>                                    
                        </CardContent>
         
              </Paper>  
            </Grid>
    );
};

export default RoktokonikaClean;