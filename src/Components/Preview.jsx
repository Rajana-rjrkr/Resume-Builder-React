import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { GrDocumentDownload } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { addDownloadHistoryAPI } from '../services/allAPI';

function Preview({ userInput, setUserInput, finish, resumeId }) {
    // console.log(userInput);

    const [downloadStatus, setDownloadStatus] = useState(false)


    const downloadCV = async () => {
        // get element for taking screenshot
        const input = document.getElementById("result")
        const canvas = await html2canvas(input, { scale: 2 })
        const imgURL = canvas.toDataURL('image/png')

        const pdf = new jsPDF()
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = pdf.internal.pageSize.getHeight()

        pdf.addImage(imgURL, 'PNG', 0, 0, pdfWidth, pdfHeight)
        pdf.save('resume.pdf')

        // get date
        const localTimeDate = new Date()
        const timeStamp = `${localTimeDate.toLocaleDateString()}, ${localTimeDate.toLocaleTimeString()}`
        // console.log(timeStamp);


        // add downloaded CV to history json using api call
        try {
            const result = await addDownloadHistoryAPI({ ...userInput, imgURL, timeStamp })
            console.log(result);
            setDownloadStatus(true)

        } catch (err) {
            console.log(err);

        }
    }



    return (
        <>
            {
                userInput.personelData.name != "" &&
                <div className='flex flex-column my-5'>
                    {
                        finish &&

                        <div className="d-flex justify-content-center align-items-center" style={{ paddingTop: "110px" }}>
                            {/* download icon */}
                            <button onClick={downloadCV} className='btn fs-3 text-primary'><GrDocumentDownload /></button>
                            {/* edit icon */}
                            <div><Edit setUpdateUserInput={setUserInput} resumeId={resumeId}/></div>
                            {
                                downloadStatus &&
                                <>
                                    {/* history icon */}
                                    <Link to={'/history'}><button className='btn fs-3 text-primary'><FaHistory /></button></Link>

                                </>
                            }
                            {/* Back */}
                            <Link to={'/resumegenerator'}><button className='btn ms-2 btn-primary'>Back</button></Link>
                        </div>

                    }
                    <Box component="section">
                        <Paper id="result" elevation={3} sx={{ my: 4, p: 5, textAlign: "center", width: "600px" }}>
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
                                    userInput.skills?.map(skill => (
                                        <Button variant="contained">{skill}</Button>

                                    ))
                                }
                            </Stack>
                        </Paper>
                    </Box>
                </div>
            }
        </>
    )
}

export default Preview
