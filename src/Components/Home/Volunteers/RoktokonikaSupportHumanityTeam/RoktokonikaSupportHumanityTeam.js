import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import RoktokonikaSupportHumanity from '../RoktokonikaSupportHumanity/RoktokonikaSupportHumanity';
import Aos from 'aos';
import 'aos/dist/aos.css';


const RoktokonikaSupportHumanityTeam = () => {
         
        // useState declare
        const [supportTeams, setSupportTeams ] = useState([]);

        // data load from database
        useEffect(() => {
            fetch(`http://localhost:5000/roktokonikaSupport`)
            .then(response => response.json())
            .then(data => setSupportTeams(data))
        }, [])

        useEffect(() => {
            Aos.init({ duration: 2500 })
         }, []);
        
        
    return (
        <Container data-aos="fade-up" sx={{my: 8}}> 
        <Typography sx={{my: 5, color: 'info.main', fontWeight: '400'}} variant="h4">Support Humanity Team Members {supportTeams.length}</Typography>
                    
            <Grid container spacing={2}>
                {
                   supportTeams.map(supportteam => <RoktokonikaSupportHumanity
                        key = {supportteam._id}
                        supportteam = {supportteam}  
                                            
                    >
                        
                    </RoktokonikaSupportHumanity>)
                }
            </Grid>
    </Container>
    );
};


export default RoktokonikaSupportHumanityTeam;