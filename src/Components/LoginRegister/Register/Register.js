import { Button, Container, Grid, Typography,CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../Shared/Header/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import RegisterForm from '../../image/registerForm.jpg';
import './Register.css';


const Register = () => {
  
    /* login data state declare */
    const [loginData , setLoginData] = useState({})
   
    // redirect for register user -- to posts page
    const navigate = useNavigate();

     const { user,authError, registerUser, isLoading } = useAuth();


     /* handleOnBlur part */
    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
      
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }


    /* handleLoginSubmit part */
    const handleLoginSubmit = event => {
          if(loginData.password !== loginData.password2) {
              alert('password did not match')
              return
          }
         registerUser(loginData.email, loginData.password, loginData.name, navigate)
        event.preventDefault();
    }



    return (
        <div>
            <Navigation></Navigation>
            {/* register form */}
              <Container>
                 <Grid  sx={{my: 8}} container spacing={2}>
                     
                     {/* register side bar image */}
                     <Grid sx={{mb: 5, p: 3}} item xs={12} md={6}>
                        <img style={{width: "100%", height: "100%", borderRadius: '5px'}}  src={RegisterForm} alt="register"/>
                     </Grid>

                     <Grid className='register' item xs={12} md={6}>
                         <Typography sx={{fontSize: '40px', fontWeight: 'bold', color: '#EE51C0', textAlign: 'center' }} variant="body1"  gutterBottom>Register Page</Typography>  

                            {  !isLoading && <form onSubmit={handleLoginSubmit}>                   
                                <TextField 
                                sx={{width: '75%', m:1}}
                                required
                                id="standard-basic"
                                label="Your Name" 
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard" 
                                />

                                <TextField 
                                sx={{width: '75%', m:1}}
                                required
                                id="standard-basic"
                                label="Your Email" 
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
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
                                    onBlur={handleOnBlur}
                                    variant="standard" 
                                />
                                
                                                    

                                <TextField 
                                    sx={{width: '75%', m:1}}
                                    required
                                    id="standard-basic"
                                    label="Confirm Password" 
                                    type="password"
                                    autoComplete="current-password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    variant="standard" 
                                /> 
                                
                                
                                <br/>
                                <Button sx={{width: '75%', m:1}} type="submit" variant="contained" color="success"> Register </Button>
                                <NavLink style={{textDecoration: 'none'}} to="/login">  <Button color="error"  variant="text">Already An User? Please Login</Button> </NavLink>
                            </form>}
                                
                                {/* is loading using */}
                                {isLoading && <CircularProgress />}
                            
                                {/* success fully login and register message */}
                                {user?.email && <Alert severity="success">User Register Successfully</Alert>}
                            
                                {/* error message */}
                                {authError && <Alert severity="error">{authError}</Alert> }
                        
                        </Grid>


                 </Grid>
             </Container>
            <Footer></Footer>
        </div>
    );
};

export default Register;





