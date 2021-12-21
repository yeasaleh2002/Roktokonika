import { Box, Grid, Typography } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../../../Shared/Header/Banner/Banner';
import Navigation from '../../../Shared/Header/Navigation/Navigation';
import Post from '../Post/Post';

const Posts = () => {

  
        // useState declare
        const [posts, setPosts ] = useState([]);

        // data load from database
        useEffect(() => {
            fetch(`https://boiling-cove-07763.herokuapp.com/posts`)
            .then(response => response.json())
            .then(data => setPosts(data))
        }, [])

        
    useEffect(() => {
        Aos.init({ duration: 2500 })
     }, []);

    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Box data-aos="fade-right" sx={{my: 6 , mx: 4}}> 
        <Typography sx={{my: 5,  color: 'gray', fontWeight: '400'}} variant="h4">Total Post : {posts.length}</Typography>
                    
            <Grid container spacing={2}>
                {
                   posts.map(post => <Post
                        key = {post._id}
                        post = {post}  
                                            
                    >
                        
                    </Post>)
                }
            </Grid>
    </Box>
            <Footer></Footer>
       
        </div>
    );
};

export default Posts;