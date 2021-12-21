import { CardContent, CardMedia, Grid,  Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import  './Post.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Post = ({post}) => {

    
    const { name, posts, picture } = post || '';

    useEffect(() => {
        Aos.init({ duration: 2500 })
     }, []);


    return (
        <>
        <Grid  item xs={0}  md={0} lg={2}>

        </Grid>

        <Grid  sx={{ my: 2}} item xs={12}  md={12} lg={8}>
                   <Box className='post' data-aos="fade-left" >
                        <CardContent>
                        <Typography sx={{color: 'red'}} gutterBottom component="div">
                             Posted by {name}
                        </Typography>                                  
                        <Typography gutterBottom component="div">
                                {posts}
                        </Typography>    
                                                      
                        </CardContent>
                        <CardMedia
                            data-aos="zoom-out-down"
                            component="img"
                            style={{ borderRadius: '10px', width: '100%', height: '100%', margin: '0 auto' }}
                            image={picture}
                            className="team-member"
                            alt="green iguana"
                        />
                  </Box>
            
            </Grid>
            <Grid   item xs={0}  md={0} lg={2}>

            </Grid>
            </>
    );
};

export default Post;