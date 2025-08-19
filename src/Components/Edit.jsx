import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Edit() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <button onClick={handleOpen} className='btn fs-2 text-primary'><MdEditDocument /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* Personal Details */}

                        <h3>Personal Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                            <TextField id="standard-basic-title" label="Job Title" variant="standard" />
                            <TextField id="standard-basic-loc" label="Location" variant="standard" />
                        </div>

                        {/* Contact Details */}

                        <h3>Contact Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-mail" label="Email" variant="standard" />
                            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" />
                            <TextField id="standard-basic-github" label="GitHub Profile Link" variant="standard" />
                            <TextField id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" />
                            <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                        </div>

                        {/* Education Details */}
                        <h3>Education Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-course" label="Course Name" variant="standard" />
                            <TextField id="standard-basic-college" label="College Nmae" variant="standard" />
                            <TextField id="standard-basic-university" label="University Name" variant="standard" />
                            <TextField id="standard-basic-year" label="Year of Passout" variant="standard" />

                        </div>
                        {/* Professional Details */}
                        <h3>Professional Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-role" label="Job or Intership" variant="standard" />
                            <TextField id="standard-basic-comname" label="Company Name" variant="standard" />
                            <TextField id="standard-basic-comloc" label="Company Location" variant="standard" />
                            <TextField id="standard-basic-duration" label="Duration" variant="standard" />
                        </div>

                        {/* Skills */}
                        <h3>Skills</h3>
                        <div className="d-flex align-items-center justify-content-between p-3">
                            <TextField sx={{ width: "400px" }} id="standard-basic-skill" label="Add Skills" variant="standard" />
                            <Button variant="text">ADD</Button>
                        </div>
                        <h5>Added Skill :</h5>
                        <div className="d-flex justify-content-between flex-wrap my-3">
                            {/* span must duplicate according to the user added skill */}
                            <span className='btn btn-outline-primary d-flex align-items-center justify-content-center'>REACT <button className='btn text-white ms-2'>X</button></span>
                        </div>

                        {/* Professional Summary */}
                        <h3>Professional Summary</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-name" label="Write a short summary of yourself" multiline rows={4} variant="standard" />

                        </div>
                        
                    </Typography>
                    <Button>UPDATE</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Edit
