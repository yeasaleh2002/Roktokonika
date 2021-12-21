import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import RoktokonikaClean from '../RoktokonikaClean/RoktokonikaClean';
import Aos from 'aos';
import 'aos/dist/aos.css';


const RoktokonikaCleanTeam = () => {
         
        // useState declare
        const [cleanTeams, setCleanTeams ] = useState([]);

        // data load from database
        useEffect(() => {
            fetch(`http://localhost:5000/roktokonikaClean`)
            .then(response => response.json())
            .then(data => setCleanTeams(data))
        }, [])
                    
            useEffect(() => {
                Aos.init({ duration: 2500 })
            }, []);



    return (
        <Container  data-aos="fade-down" sx={{my: 8}}> 
        <Typography sx={{my: 5, color: 'info.main', fontWeight: '400'}} variant="h4">Roktokonika Clean Team Members {cleanTeams.length}</Typography>
                    
            <Grid container spacing={2}>
                {
                   cleanTeams.map(cleanTeam => <RoktokonikaClean
                        key = {cleanTeam._id}
                        cleanTeam = {cleanTeam}  
                                            
                    >
                        
                    </RoktokonikaClean>)
                }
            </Grid>
    </Container>
    );
};


export default RoktokonikaCleanTeam;