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

function Preview({ userInput }) {
    // console.log(userInput);

    return (
        <>{
            userInput.personelData.name!="" &&
            <>
            <Stack direction={'row'} sx={{ justifyContent: "flex-end" }}>
                <Stack direction={'row'} sx={{ alignItems: 'center' }}>
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
                    <h3>{userInput.personelData.name}</h3>
                    <h5>{userInput.personelData.jobTitle}</h5>
                    <p><span>{userInput.personelData.location}</span> | <span>{userInput.personelData.email}</span> | <span>{userInput.personelData.phoneNumber}</span></p>
                    <p>
                        <Link href={userInput.personelData.github} >GitHub</Link>| 
                        <Link href={userInput.personelData.linkedin} >Linkedin</Link>| 
                        <Link href={userInput.personelData.portfolio} >Portfolio</Link>| 
                    </p>
                    <Divider sx={{ fontSize: "20px" }}>Summary</Divider>
                    <p className=' text-start'>{userInput.summary}</p>
                    <Divider sx={{ fontSize: "20px", marginBottom: "10px" }}>Education</Divider>
                    <h5>{userInput.education.course}</h5>
                    <p><span>{userInput.education.college}</span> | <span>{userInput.education.university}</span> | <span>{userInput.education.year}</span></p>
                    <Divider sx={{ fontSize: "20px", marginBottom: "10px" }}>Professional Experience</Divider>
                    <h5>{userInput.experience.jobRole}</h5>
                    <p><span>{userInput.experience.companyname}</span> | <span>{userInput.experience.jobLocation}</span> | <span>{userInput.experience.duration}</span></p>
                    <Divider sx={{ fontSize: "20px", marginBottom: "10px" }}>Skills</Divider>
                    <Stack justifyContent={'space-evenly'} direction="row" sx={{ flexWrap: "wrap", gap: "10px" }}>
                        {
                            userInput.skills?.map(skill=>(
                                <Button variant="contained">{skill}</Button>

                            ))
                        }
                    </Stack>
                </Paper>
            </Box>
            </>
            }
        </>
    )
}

export default Preview
