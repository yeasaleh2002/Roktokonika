import { Button, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllRoktokonikaCleanTeam = () => {
        // useState declare
        const [manageCleanTeamMembers, setManageCleanTeamMembers ] = useState([]);


        // data load from database
        useEffect(() => {
            fetch(`http://localhost:5000/roktokonikaClean`)
            .then(response => response.json())
            .then(data => setManageCleanTeamMembers(data))
        }, [])



        const handleManageOrder = (id) => {
           
            const proceed = window.confirm('Are you sure, you want to delete?');
            if (proceed) {
            fetch(`http://localhost:5000/roktokonikaClean/${id}`, {
              method: "DELETE"
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  alert ('Delete Clean Team Member?')
                  const remaining = manageCleanTeamMembers.filter(row => row._id !==id);
                  setManageCleanTeamMembers(remaining);
                }
              });
            };
          }; 
      
      
return (
    <Container sx={{my: 8}}> 
    <Typography sx={{my: 5, color: 'info.main', fontWeight: '400'}} variant="h4">Total Clean Team Members {manageCleanTeamMembers.length}</Typography>
        <Grid container spacing={2}>
       
            {
               manageCleanTeamMembers.map(manageCleanTeamMember => < Grid item xs={12} sm={6} md={4}
                    key = {manageCleanTeamMember._id}
                    manageCleanTeamMember = {manageCleanTeamMember}                                                            
                >                    
                
             <Paper elevation={3} sx={{py: 1}}>
       
             <CardMedia
                            component="img"
                            style={{ width: '250px', height: '250px',borderRadius: '50%', margin: '0 auto' }}
                            image={manageCleanTeamMember.picture}
                            className="team-member"
                            alt="green iguana"
                        />

                        <CardContent>
                        <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                                {manageCleanTeamMember.name}
                        </Typography>
                        <Typography gutterBottom component="div">
                             Position : {manageCleanTeamMember.address}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Email : {manageCleanTeamMember.email}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Phone : {manageCleanTeamMember.phone}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Gender : {manageCleanTeamMember.gender}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Age : {manageCleanTeamMember.age}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Blood Group : {manageCleanTeamMember.bloodGroup}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                         Is Clean team member? : {manageCleanTeamMember.clean}
                        </Typography>                                    
                        
                    
                        {/* delete button */}
                            <Button onClick={() => handleManageOrder(manageCleanTeamMember._id)} variant="contained">Delete </Button>

                     </CardContent>       
            </Paper>                                         
          </Grid>)                      
            }

         </Grid>                
</Container>
    );
};

export default ManageAllRoktokonikaCleanTeam;