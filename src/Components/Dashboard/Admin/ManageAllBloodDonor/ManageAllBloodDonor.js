import { Button, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllBloodDonor = () => {
        // useState declare
        const [manageBloodDonors, setManageBloodDonors ] = useState([]);


        // data load from database
        useEffect(() => {
            fetch(`https://boiling-cove-07763.herokuapp.com/roktokonikaBlood`)
            .then(response => response.json())
            .then(data => setManageBloodDonors(data))
        }, [])



        const handleManageOrder = (id) => {
           
            const proceed = window.confirm('Are you sure, you want to delete?');
            if (proceed) {
            fetch(`https://boiling-cove-07763.herokuapp.com/roktokonikaBlood/${id}`, {
              method: "DELETE"
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  alert ('Delete Blood Donor?')
                  const remaining = manageBloodDonors.filter(row => row._id !==id);
                  setManageBloodDonors(remaining);
                }
              });
            };
          }; 
      
      
return (
    <Container sx={{my: 8}}> 
    <Typography sx={{my: 5, color: 'info.main', fontWeight: '400'}} variant="h4">Total Blood Donors {manageBloodDonors.length}</Typography>
        <Grid container spacing={2}>
       
            {
               manageBloodDonors.map(manageBloodDonor => <Grid item xs={12} sm={6} md={4}
                    key = {manageBloodDonor._id}
                    manageBloodDonor = {manageBloodDonor}  
                    
                                        
                >
                    
                
             <Paper elevation={3} sx={{py: 1}}>
       
             <CardMedia
                            component="img"
                            style={{ width: '250px', height: '250px',borderRadius: '50%', margin: '0 auto' }}
                            image={manageBloodDonor.picture}
                            className="team-member"
                            alt="green iguana"
                        />

                        <CardContent>
                        <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                                {manageBloodDonor.name}
                        </Typography>
                        <Typography gutterBottom component="div">
                             Position: {manageBloodDonor.address}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Email: {manageBloodDonor.email}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Phone: {manageBloodDonor.phone}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Blood Group: {manageBloodDonor.bloodGroup}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Total Blood Donate: {manageBloodDonor.totalBloodDonate}
                        </Typography>                                    
                        <Typography  gutterBottom component="div">
                             Last Donate Date: {manageBloodDonor.lastDonateDate}
                        </Typography>  
                                    
                    
                        {/* delete button */}
                            <Button onClick={() => handleManageOrder(manageBloodDonor._id)} variant="contained">Delete</Button>

                     </CardContent>       
            </Paper>                                         
          </Grid>)                      
            }

         </Grid>                
</Container>
    );
};

export default ManageAllBloodDonor;