import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import TextField from '@mui/material/TextField';
import { editResumeAPI, getAResumeAPI } from '../services/allAPI';
import swal from 'sweetalert';

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

function Edit({ resumeId, setUpdateUserInput }) {
    const [userSkill, setUserSkill] = React.useState("")
    const [userInput, setUserInput] = React.useState({})
    const [open, setOpen] = React.useState(false);
    // console.log(resumeId);
    console.log(userInput);


    React.useEffect(() => {
        resumeId && getEditResumeDetails()
    }, [resumeId])


    const getEditResumeDetails = async () => {
        try {
            const result = await getAResumeAPI(resumeId)
            setUserInput(result?.data)
        } catch (err) {
            console.log(err);

        }
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addSkill = () => {
        if (userSkill) {
            if (userInput?.skills.includes(userSkill)) {
                alert("Given skill is already existing!!! Add another..")
            } else {
                //userInput.skills.push(inputSkill) 
                setUserInput({ ...userInput, skills: [...userInput?.skills, userSkill] })
            }
            // to clear the skill textbox
            setUserSkill("")
        }
    }

    const removeSkill = (skill) => {
        setUserInput({ ...userInput, skills: userInput.skills.filter(item => item != skill) })
    }

    const handleResumeUpdate = async () => {
        try {
            const result = await editResumeAPI(userInput?.id, userInput)
            setUpdateUserInput(result?.data)
            swal("Success!", "Resume Added Successfully", "success");
            handleClose()
        } catch (err) {
            console.log(err);

        }
    }
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
                            <TextField id="standard-basic-name" label="Full Name" variant="standard" value={userInput?.personelData?.name} onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, name: e.target.value } })} />
                            <TextField id="standard-basic-title" label="Job Title" variant="standard" value={userInput?.personelData?.jobTitle} onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, jobTitle: e.target.value } })} />
                            <TextField id="standard-basic-loc" label="Location" variant="standard" value={userInput?.personelData?.location} onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, location: e.target.value } })} />
                        </div>

                        {/* Contact Details */}
                        <h3>Contact Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-mail" label="Email" variant="standard" value={userInput?.personelData?.email} onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, email: e.target.value } })} />
                            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" value={userInput?.personelData?.phoneNumber} onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, phoneNumber: e.target.value } })} />
                            <TextField id="standard-basic-github" label="GitHub Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, github: e.target.value } })} value={userInput?.personelData?.github} />
                            <TextField id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, linkedin: e.target.value } })} value={userInput?.personelData?.linkedin} />
                            <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, portfolio: e.target.value } })} value={userInput?.personelData?.portfolio} />
                        </div>

                        {/* Education Details */}
                        <h3>Education Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-course" label="Course Name" variant="standard" value={userInput?.education?.course} onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, course: e.target.value } })} />
                            <TextField id="standard-basic-college" label="College Name" variant="standard" value={userInput?.education?.college} onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, college: e.target.value } })} />
                            <TextField id="standard-basic-university" label="University Name" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, university: e.target.value } })} value={userInput?.education?.university} />
                            <TextField id="standard-basic-year" label="Year of Passout" variant="standard" value={userInput?.education?.year} onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, year: e.target.value } })} />
                        </div>
                        {/* Professional Details */}
                        <h3>Professional Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-role" label="Job or Intership" variant="standard" value={userInput?.experience?.jobRole} onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })} />
                            <TextField id="standard-basic-comname" label="Company Name" variant="standard" value={userInput?.experience?.companyname} onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, companyname: e.target.value } })} />
                            <TextField id="standard-basic-comloc" label="Company Location" variant="standard" value={userInput?.experience?.jobLocation} onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} />
                            <TextField id="standard-basic-duration" label="Duration" variant="standard" value={userInput?.experience?.duration} onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} />
                        </div>

                        {/* Skills */}
                        <h3>Skills</h3>
                        <div className="d-flex align-items-center justify-content-between p-3">
                            <TextField onChange={e => setUserSkill(e.target.value)} sx={{ width: "400px" }} id="standard-basic-skill" label="Add Skills" variant="standard" />
                            <Button onClick={addSkill} variant="text">ADD</Button>
                        </div>
                        <h6>Selected Skills : </h6>
                        {/* span must duplicate according to the user added skill */}
                        <div className='d-flex my-2 flex-wrap'>
                            {
                                userInput?.skills?.length > 0 &&
                                userInput?.skills?.map(item => (
                                    <span className='btn btn-outline-primary d-flex align-items-center justify-content-center me-2 mt-2'>{item}<button onClick={() => removeSkill(item)} className='btn text-white ms-2'>X</button>
                                    </span>
                                ))

                            }
                        </div>

                        {/* Professional Summary */}
                        <h3>Professional Summary</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-name" label="Write a short summary of yourself" multiline rows={4} variant="standard" value={userInput?.summary} />

                        </div>

                    </Typography>
                    <Button onClick={handleResumeUpdate} className='btn btn-primary'>UPDATE</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Edit
