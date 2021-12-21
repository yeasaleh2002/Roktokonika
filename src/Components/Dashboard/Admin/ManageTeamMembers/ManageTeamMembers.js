import { Button, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageTeamMembers = () => {



            // useState declare
            const [manageTeamMembers, setManageTeamMembers ] = useState([]);


            // data load from database
            useEffect(() => {
                fetch(`http://localhost:5000/teams`)
                .then(response => response.json())
                .then(data => setManageTeamMembers(data))
            }, [])



            const handleManageOrder = (id) => {
               
                const proceed = window.confirm('Are you sure, you want to delete?');
                if (proceed) {
                fetch(`http://localhost:5000/teams/${id}`, {
                  method: "DELETE"
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.deletedCount) {
                      alert ('Delete Team Member')
                      const remaining = manageTeamMembers.filter(row => row._id !==id);
                      setManageTeamMembers(remaining);
                    }
                  });
                };
              }; 
          
          
    return (
        <Container sx={{my: 8}}> 
        <Typography sx={{my: 5, color: 'info.main', fontWeight: '400'}} variant="h4">Team Member {manageTeamMembers.length}</Typography>
            <Grid container spacing={2}>
           
                {
                   manageTeamMembers.map(manageTeamMembers => <Grid item xs={12} sm={6} md={4}
                        key = {manageTeamMembers._id}
                        manageTeamMembers = {manageTeamMembers}  
                        
                                            
                    >
                        
                    
                 <Paper elevation={3} sx={{py: 1}}>
           
                                <CardMedia
                                        component="img"
                                        style={{ width: '250px', height: '250px',borderRadius: '50%', margin: '0 auto' }}
                                        image={manageTeamMembers.picture}
                                        alt="green iguana"
                                    />

                            <CardContent>
                                <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                                    {manageTeamMembers.name}
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div">
                                    Position: {manageTeamMembers.title}
                                </Typography>                                    
                                <Typography  gutterBottom component="div">
                                    Email: {manageTeamMembers.email}
                                </Typography>                                    
                                <Typography  gutterBottom component="div">
                                    Phone: {manageTeamMembers.phone}
                                </Typography>   
                                        
                        
                            {/* delete button */}
                                <Button onClick={() => handleManageOrder(manageTeamMembers._id)} variant="contained">Delete</Button>

                         </CardContent>       
                </Paper>                                         
              </Grid>)                      
                }

             </Grid>                
    </Container>
    );
};

export default ManageTeamMembers;