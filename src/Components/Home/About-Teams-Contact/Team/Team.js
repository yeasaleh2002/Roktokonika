import { CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import './Team.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Team = ({team}) => {

    const { name, picture, title, email, phone} = team || '';

    
     useEffect(() => {
         Aos.init({ duration: 2500 })
      }, []);

    return (
        <Grid  item xs={12} sm={6} md={4}>
              <Paper style={{backgroundColor: 'whitesmoke'}} elevation={3} sx={{py: 1}}>
               
                      <CardMedia
                            data-aos="zoom-out"
                            component="img"
                            style={{ width: '220px', height: '220px',borderRadius: '50%', margin: '0 auto' }}
                            image={picture}
                            className="team-member"
                            alt="green iguana"
                        />

                        <CardContent data-aos="zoom-in">
                        <Typography sx={{color: '#F72CFA ', fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                                {name}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                             Position: {title}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Email: {email}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Phone: {phone}
                        </Typography>                                    
                        </CardContent>
         
              </Paper>  
            </Grid>

    );
};

export default Team;