import { Container,  Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Header/Navigation/Navigation';
import Team from '../Team/Team';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Teams = () => {

        
        // useState declare
        const [teams, setTeams ] = useState([]);

        // data load from database
        useEffect(() => {
            fetch(`https://boiling-cove-07763.herokuapp.com/teams`)
            .then(response => response.json())
            .then(data => setTeams(data))
        }, [])

        useEffect(() => {
            Aos.init({ duration: 2500 })
         }, []);

    return (
        <div style={{backgroundColor: 'whitesmoke'}}>
    <Navigation></Navigation>
        <Container data-aos="fade-up" sx={{my: 6 }}> 
        <Typography sx={{my: 5, color: 'goldenrod', fontWeight: '400'}} variant="h4">Team Members {teams.length}</Typography>
                    
            <Grid container spacing={4}>
                {
                   teams.map(team => <Team
                        key = {team._id}
                        team = {team}  
                                            
                    >
                        
                    </Team>)
                }
            </Grid>
    </Container>
    <Footer></Footer>
    </div>
    );
};

export default Teams;