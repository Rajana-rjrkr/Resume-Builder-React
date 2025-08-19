import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

function Header() {
  const projectIntro = "A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#4a148c"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
           <img style={{width:"45px"}} src="https://cdn-icons-png.freepik.com/512/3452/3452274.png" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:'600', fontFamily:"Libertinus Sans" }}>
           <Link to={'/'} className='text-white text-decoration-none' > rBuilder</Link>
          </Typography>
          <Tooltip title={projectIntro} ><Button sx={{fontWeight:'600', fontFamily:"Libertinus Sans"}} color="inherit">ABOUT US</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header
