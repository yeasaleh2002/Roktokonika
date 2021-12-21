import { Alert, Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { NavLink  , useLocation, useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../Shared/Header/Navigation/Navigation';
import Footer from  '../../Shared/Footer/Footer';
import loginForm from '../../image/loginForm.jpg';
import './Login.css';

const Login = () => {

    const [loginData , setLoginData] = useState({})

     const {user , loginUser, isLoading, authError} = useAuth();

     //  redirect after login
      const location = useLocation();
      const navigate = useNavigate();


    const handleOnChange = event => {

        const field = event.target.name;
        const value = event.target.value;

        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = event => {
         
        loginUser(loginData.email, loginData.password , location, navigate);
        event.preventDefault();
    }
 


    return (
        <div>
               <Navigation></Navigation>
             <Container>
                 <Grid sx={{my: 8}} container spacing={2}>
                   
                    <Grid sx={{mb: 5, p: 3}} item xs={12} md={6}>
                        <img  style={{width: "100%", height: "100%", borderRadius: '5px'}}  src={loginForm} alt="login"/>
                     </Grid>

                     <Grid className='login' item xs={12} md={6}>
                       <Typography sx={{fontSize: '40px', fontWeight: 'bold' , color: 'gray', textAlign: "center"}}  variant="body1" gutterBottom>Login Page</Typography>  

                       <form onSubmit={handleLoginSubmit}>
                      
                          <TextField 
                           sx={{width: '75%', m:1}}
                           required
                           id="standard-basic"
                           label="Your Email" 
                           name="email"
                           type="email"
                           onChange={handleOnChange}
                           variant="standard" 
                           />

                          <TextField 
                            sx={{width: '75%', m:1}}
                            required
                            id="standard-basic"
                            label="Password" 
                            type="password"
                            autoComplete="current-password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" 
                         /> 
     
                         <br/>
                         <Button sx={{width: '75%', m:1}} type="submit" variant="contained" color="error"> Login </Button> <br/>
                         <NavLink style={{textDecoration: 'none'}} to="/register">  <Button variant="text" color="success">New user? Please Register</Button> </NavLink>
                       </form>
                        
                         {/* is loading using */}
                       {isLoading && <CircularProgress />}
                     
                     {/* success fully login and register message */}
                     {user?.email && <Alert severity="success">User Login Successfully</Alert>}
                 
                     {/* error message */}
                     {authError && <Alert severity="error">{authError}</Alert> }
                     
                     </Grid>


                 </Grid>
             </Container>
             <Footer></Footer>
        </div>
    );
};

export default Login;