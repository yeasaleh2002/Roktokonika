import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Header/Navigation/Navigation';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Box } from '@mui/system';

const Volunteers = () => {

    
useEffect(() => {
    Aos.init({ duration: 2500 })
 }, []);

    return (
        <div>
            <Navigation></Navigation>
              <Box sx={{textAlign: 'center' , fontSize: '50px'}}>
              <Button sx={{backgroundColor: 'pink', m: '15px', p: '25px'}} data-aos="fade-left"><NavLink  style={{textDecoration: 'none'}}  to={`/volunteers/roktokonikaBloodDonorTeam`}> <Button color="inherit"><span style={{fontSize : '25px'}}>Blood Donor</span></Button> </NavLink> </Button>  
              <Button sx={{backgroundColor: 'pink', m: '15px', p: '25px'}} data-aos="fade-down"><NavLink  style={{textDecoration: 'none'}}  to={`/volunteers/roktokonikaCleanTeam`}> <Button color="inherit"><span style={{fontSize : '25px'}}>Clean Team</span></Button> </NavLink> </Button> 
              <Button sx={{backgroundColor: 'pink', m: '15px', p: '25px'}} data-aos="fade-right"><NavLink  style={{textDecoration: 'none'}}  to={`/volunteers/roktokonikaSupportHumanityTeam`}> <Button color="inherit"><span style={{fontSize : '25px'}}>Support Team</span></Button> </NavLink></Button> 
       
              </Box>

           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Volunteers;