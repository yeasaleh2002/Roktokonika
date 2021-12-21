import { Button, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllRoktokonikaSupportHumanityTeam = () => {
        // useState declare
        const [manageSupportTeamMembers, setManageSupportTeamMembers ] = useState([]);


        // data load from database
        useEffect(() => {
            fetch(`http://localhost:5000/roktokonikaSupport`)
            .then(response => response.json())
            .then(data => setManageSupportTeamMembers(data))
        }, [])



        const handleManageOrder = (id) => {
           
            const proceed = window.confirm('Are you sure, you want to delete?');
            if (proceed) {
            fetch(`http://localhost:5000/roktokonikaSupport/${id}`, {
              method: "DELETE"
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  alert ('Delete Team Member')
                  const remaining = manageSupportTeamMembers.filter(row => row._id !==id);
                  setManageSupportTeamMembers(remaining);
                }
              });
            };
          }; 
      
      
return (
    <Container sx={{my: 8}}> 
    <Typography sx={{my: 5, color: 'info.main', fontWeight: '400'}} variant="h4">Total Support Team Members {manageSupportTeamMembers.length}</Typography>
        <Grid container spacing={2}>
       
            {
               manageSupportTeamMembers.map(manageSupportTeamMember => <Grid item xs={12} sm={6} md={4}
                    key = {manageSupportTeamMember._id}
                    manageSupportTeamMember = {manageSupportTeamMember}  
                    
                                        
                >
                    
                
             <Paper elevation={3} sx={{py: 1}}>
       
             <CardMedia
                            component="img"
                            style={{ width: '250px', height: '250px',borderRadius: '50%', margin: '0 auto' }}
                            image={manageSupportTeamMember.picture}
                            className="team-member"
                            alt="green iguana"
                        />

                        <CardContent>
                        <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                                {manageSupportTeamMember.name}
                        </Typography>
                        <Typography gutterBottom component="div">
                             Position : {manageSupportTeamMember.address}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Email : {manageSupportTeamMember.email}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Phone : {manageSupportTeamMember.phone}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Gender : {manageSupportTeamMember.gender}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Age : {manageSupportTeamMember.age}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Blood Group : {manageSupportTeamMember.bloodGroup}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                         Is Clean team member? : {manageSupportTeamMember.clean}
                        </Typography>                                    
                 
                    
                        {/* delete button */}
                            <Button onClick={() => handleManageOrder(manageSupportTeamMember._id)} variant="contained">Delete</Button>

                     </CardContent>       
            </Paper>                                         
          </Grid>)                      
            }

         </Grid>                
</Container>
    );
};

export default ManageAllRoktokonikaSupportHumanityTeam;