import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import {
  Link,
  Outlet
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';



const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

 
  
  // import admin from useAuth
  const { admin, logOut } = useAuth(); 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{backgroundColor: '#FBCCCF', color: 'blue'}}>
      
      <Toolbar />
      <Divider />


      <Link  style={{textDecoration: 'none'}}  to="/posts"> <Button color="inherit">Home</Button> </Link><Divider />
       {  !admin && <Box>       
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/addPost`}> <Button color="inherit">Write Post</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/roktokonikaSupportHumanityTeamRegistration`}> <Button color="inherit">Register Support</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/roktokonikaCleanTeamRegistration`}> <Button color="inherit">Register Clean</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/bloodDonorRegistration`}> <Button color="inherit">Register Donor</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/managePosts`}> <Button color="inherit">Manage Posts</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/payNOw`}> <Button color="inherit">Donation</Button> </Link><Divider />
           </Box>
         }
          
          { admin &&  <Box>                  
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/roktokonikaSupportHumanityTeamRegistration`}> <Button color="inherit">Register Support</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/roktokonikaCleanTeamRegistration`}> <Button color="inherit">Register Clean</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/bloodDonorRegistration`}> <Button color="inherit">Register Donor</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/payNOw`}> <Button color="inherit">Donation</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/addPost`}> <Button color="inherit">Write Post</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/managePosts`}> <Button color="inherit">Manage Posts</Button> </Link><Divider />
           
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/addBanner`}> <Button color="inherit">Add Banner</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/manageBannerPost`}> <Button color="inherit">Manage Banner Post</Button> </Link><Divider />
 
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/makeAdmin`}> <Button color="inherit">Make Admin</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/manageAllPosts`}> <Button color="inherit">Manage All Post</Button> </Link><Divider />
               
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/addTeamMembers`}> <Button color="inherit">Add Team Member</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/manageTeamMembers`}> <Button color="inherit">Manage Team</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/updateAddTeamMembers`}> <Button color="inherit">Update Team</Button> </Link><Divider />
                
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/manageAllBloodDonor`}> <Button color="inherit">Manage Blood Donor</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/manageAllRoktokonikaCleanTeam`}> <Button color="inherit">Manage clean Team</Button> </Link><Divider />
                <Link  style={{textDecoration: 'none'}}  to={`/dashboard/manageAllRoktokonikaSupportHumanityTeam`}> <Button color="inherit">Manage Supporters</Button> </Link><Divider />
      
               
         </Box>
       } 
      
      <Divider />
        <Link  style={{textDecoration: 'none'}}  to="/posts"> <Button onClick={logOut} color="inherit">Log Out</Button> </Link><Divider />
       <Divider />
   
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: '#B48FE3',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        
      >
        <Toolbar>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
     
     
        <Outlet></Outlet>

      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;