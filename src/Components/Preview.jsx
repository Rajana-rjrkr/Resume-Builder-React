import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { GrDocumentDownload } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';

function Preview() {
    return (
        <div>
            <Stack direction={'row'} sx={{ justifyContent: "flex-end" }}>
                <Stack direction={'row'} sx={{alignItems:'center'}}>
                    {/* download icon */}
                    <button className='btn fs-3 text-primary'><GrDocumentDownload /></button>
                    {/* edit icon */}
                    <div><Edit /></div>
                    {/* history icon */}
                    <Link to={'/history'}><button className='btn fs-3 text-primary'><FaHistory /></button></Link>
                    {/* Back */}
                    <Link to={'/resumegenerator'}><button className='btn btn-primary'>Back</button></Link>
               </Stack>
            </Stack>
            <Box component="section">
                <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: "center" }}>
                    <h3>Name</h3>
                    <h5>Job Title</h5>
                    <p><span>Location</span> | <span>Email</span> | <span>Phone</span></p>
                    <p>
                        <Link href={""} >GitHub</Link>
                        <Link href={""} >Linkedin</Link>
                        <Link href={""} >Portfolio</Link>
                    </p>
                    <Divider sx={{ fontSize: "20px" }}>Summary</Divider>
                    <p className='fs-5 text-start'>user summary</p>
                    <Divider sx={{ fontSize: "20px", marginBottom: "10px" }}>Education</Divider>
                    <h5>User Education</h5>
                    <p><span>College</span> | <span>University</span> | <span>Year</span></p>
                    <Divider sx={{ fontSize: "20px", marginBottom: "10px" }}>Professional Experience</Divider>
                    <h5>Job Role</h5>
                    <p><span>Company</span> | <span>ComLocation</span> | <span>Duration</span></p>
                    <Divider sx={{ fontSize: "20px", marginBottom: "10px" }}>Skills</Divider>
                    <Stack justifyContent={'space-evenly'} direction="row" sx={{ flexWrap: "wrap", gap: "10px" }}>
                        <Button variant="contained">User Skill</Button>
                    </Stack>
                </Paper>
            </Box>
        </div>
    )
}

export default Preview
