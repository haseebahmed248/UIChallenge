import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import axios from 'axios'
import { Grid, TextField, Button, Typography, Paper, useTheme, useMediaQuery } from '@mui/material'
import { styled } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import PersonIcon from '@mui/icons-material/Person';
import user from './Assets/pic.png'




const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 20,
  },
});

function Login() {
  const navigate = useNavigate();
  const [username,setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error,setError] = React.useState("");
  
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/users/signup/",{
        username: username,
        email: email,
        password: password
    }).then((res) => {
        console.log(res);
        navigate("/");
        })
        .catch((err) => {
            console.log(err);
            setError("Invalid Email or Password");
        })
}
  
  return (
    <Grid container justify="center" alignItems="center" style={{ height: isSmallScreen ? 'auto' : '100vh', display: 'flex', justifyContent: 'center' }}>
<Grid 
  item 
  xs={12} 
  md={6} 
  style={{ 
    height: isSmallScreen ? 'auto' : '100%', 
    backgroundColor: 'rgba(229,252,228,255)', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' 
  }}
>
  <img 
    src={user} 
    alt="description" 
    style={{ 
      width: isSmallScreen ? '10%' : '30%', 
      height: isSmallScreen ? 'auto' : '40vh', 
      display: isSmallScreen ? 'block' : 'inline', 
      margin: isSmallScreen ? '0 auto' : '0' 
    }} 
  />
</Grid>
  <Grid item xs={12} md={6} style={{ height: isSmallScreen ? 'auto' : '98vh', display: 'flex', justifyContent: 'center', alignItems:'center', textAlign:'center'}}>
    <Paper elevation={3} style={{ borderRadius: '10px', padding: '20px', height: isSmallScreen ? 'auto' : '95.8vh' ,width:'100%'}}>
      <Grid item xs={12} md={6} style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center',margin:'auto' }}>
        <form onSubmit={handleSubmit} style={{ marginTop: '25%', width: '100%' }}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcxDKwAx2HELkBWAYrKzHIbEwuWSWWl9sh-xgVJwGrw&s" 
                alt="logo" 
                style={{width: isSmallScreen ? '80px' : '100px', backgroundColor: 'white'}}
              />
              <Typography variant={isSmallScreen ? "h4" : "h2"}>LEAF</Typography>
            </div>
              <Typography variant="h4" align="center" style={{marginTop:40}}>SignUP</Typography>
              <CustomTextField 
                label="Enter Username" 
                type="text"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                variant='outlined'
                margin='normal'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              /><br />
              <CustomTextField 
                label="Enter Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                variant='outlined'
                margin='normal'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              /><br />
              <CustomTextField 
                label="Enter Password" 
                type="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                variant='outlined'
                margin='normal'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              /><br />
                
                <Typography color="error">{error}</Typography>
                <Button 
                  type="submit" 
                  variant="contained"  
                  fullWidth 
                  style={{marginTop: '40px', marginBottom: '10px', borderRadius: '20px', backgroundColor:'#6a915a'
                  ,height: '50px', fontSize: '20px'}}
                >
                  SignUp
                </Button>
                <Grid container spacing={2} justifyContent="center" style={{marginTop: '20px', marginBottom:'20px'}}>
                  <Grid item >
                    <GoogleIcon fontSize="large" sx={{ color: 'lightgreen', cursor:'pointer' }}/>
                  </Grid>
                  <Grid item>
                    <FacebookIcon fontSize="large" sx={{ color: 'darkblue',cursor:'pointer' }}/>
                  </Grid>
                  <Grid item>
                    <AppleIcon fontSize="large" sx={{ color: 'black',cursor:'pointer' }}/>
                  </Grid>
                </Grid>
                <Typography>Click here to <Link component={RouterLink} to="/" underline="none">Login</Link></Typography>
              </form>
            </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Login