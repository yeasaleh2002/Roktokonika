import { Button, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllPosts = () => {

   // useState declare
   const [managePosts, setManagePosts ] = useState([]);


   // data load from database
   useEffect(() => {
       fetch(`http://localhost:5000/posts`)
       .then(response => response.json())
       .then(data => setManagePosts(data))
   }, [])



   const handleManageOrder = (id) => {
      
       const proceed = window.confirm('Are you sure, you want to delete?');
       if (proceed) {
       fetch(`http://localhost:5000/posts/${id}`, {
         method: "DELETE"
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.deletedCount) {
             alert ('Delete Post')
             const remaining = managePosts.filter(row => row._id !==id);
             setManagePosts(remaining);
           }
         });
       };
     }; 
 


    return (
        <Container sx={{my: 8}}> 
        <Typography sx={{my: 5, color: 'info.main', fontWeight: '400'}} variant="h4">Total Posts {managePosts.length}</Typography>
            <Grid container spacing={2}>
           
                {
                   managePosts.map(managePosts => <Grid item xs={12} md={12} lg={6}
                        key = {managePosts._id}
                        managePosts = {managePosts}  
                        
                                            
                    >
                        
                            <CardContent>
                                <Typography  gutterBottom component="div">
                                    {managePosts.posts}
                                </Typography>
                                <CardMedia
                                        component="img"
                                        style={{ width: '100%', height: '100%', borderRadius: '10px', margin: '0 auto' }}
                                        image={managePosts.picture}
                                        alt="green iguana"
                                    />
                        
                            {/* delete button */}
                                <Button onClick={() => handleManageOrder(managePosts._id)} variant="contained">Delete</Button>

                         </CardContent>       
                                             
              </Grid>)                      
                }

             </Grid>                
    </Container>
    );
};

export default ManageAllPosts;