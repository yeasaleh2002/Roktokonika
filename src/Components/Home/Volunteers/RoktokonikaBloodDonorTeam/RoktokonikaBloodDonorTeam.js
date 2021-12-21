import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import RoktokonikaBloodDonor from '../RoktokonikaBloodDonor/RoktokonikaBloodDonor';
import Aos from 'aos';
import 'aos/dist/aos.css';


const RoktokonikaBloodDonorTeam = () => {
         
        // useState declare
        const [bloodTeams, setBloodTeams] = useState([]);

        // data load from database
        useEffect(() => {
            fetch(`https://boiling-cove-07763.herokuapp.com/roktokonikaBlood`)
            .then(response => response.json())
            .then(data => setBloodTeams(data))
        }, [])

        
        useEffect(() => {
            Aos.init({ duration: 2500 })
        }, []);

    return (
        <Container data-aos="zoom-in" sx={{my: 8}}> 
        <Typography sx={{my: 5, color: '#F70FFA ', fontWeight: '400'}} variant="h4">Total Blood Donors :{bloodTeams.length}</Typography>
                    
            <Grid container spacing={2}>
                {
                   bloodTeams.map(bloodTeam => <RoktokonikaBloodDonor
                        key = {bloodTeam._id}
                        bloodTeam = {bloodTeam}  
                                            
                    >
                        
                    </RoktokonikaBloodDonor>)
                }
            </Grid>
    </Container>
    );
};


export default RoktokonikaBloodDonorTeam;