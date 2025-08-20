import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const steps = ['Basic Informations', 'Contact Details', 'Education Details', 'Professional Details', 'Skills & Certifications', 'Review & Submit'];


function Steps() {
  const skillSuggestionArray = ['NODE JS', 'EXPRESS', 'CSS', 'MONGODB', 'REACT', 'GIT', 'ANGULAR', 'NEXT JS', 'BOOTSTRAP', 'TAILWIND']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  //state for storing user input data
  const [userInput, setUserInput] = React.useState({
    personelData: {
      name: '',
      jobTitle: '',
      location: '',
      email: '',
      phoneNumber: '',
      github: '',
      linkedin: '',
      portfolio: ''
    },
    education: {
      course: '',
      college: '',
      university: '',
      year: ''
    },
    experience: {
      jobRole: '',
      companyname: '',
      jobLocation: '',
      duration: ''
    },
    skills: [],
    summary: ''

  })

  const userSkillRef = React.useRef()

  console.log(userInput);


  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //add skill
  const addSkill = (inputSkill) => {
    if (inputSkill) {
      if (userInput.skills.includes(inputSkill)) {
        alert('Given skill is already existing!!! Add another ')
      } else {
        setUserInput({ ...userInput, skills: [...userInput.skills, inputSkill] })
      }
    }
  }

  const removeSkill = (skill) => {
    setUserInput({ ...userInput, skills: userInput.skills.filter(item => item != skill) })
  }

  // render the content corresponding to array index
  const renderStepArrayContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-name" label="Full Name" variant="standard" value={userInput.personelData.name} onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, name: e.target.value } })} />
            <TextField id="standard-basic-title" label="Job Title" variant="standard" value={userInput.personelData.jobTitle} onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, jobTitle: e.target.value } })} />
            <TextField id="standard-basic-loc" label="Location" variant="standard" value={userInput.personelData.location} onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, location: e.target.value } })} />
          </div>
        </div>
      )
      case 1: return (
        <div>
          <h3>Contact Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-mail" label="Email" variant="standard" value={userInput.personelData.email} onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, email: e.target.value } })} />
            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" value={userInput.personelData.phoneNumber} onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, phoneNumber: e.target.value } })} />
            <TextField id="standard-basic-github" label="GitHub Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, github: e.target.value } })} value={userInput.personelData.github} />
            <TextField id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, linkedin: e.target.value } })} value={userInput.personelData.linkedin} />
            <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" onChange={e => setUserInput({ ...userInput, personelData: { ...userInput.personelData, portfolio: e.target.value } })} value={userInput.personelData.portfolio} />
          </div>
        </div>
      )
      case 2: return (
        <div>
          <h3>Education Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-course" label="Course Name" variant="standard" value={userInput.education.course} onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, course: e.target.value } })} />
            <TextField id="standard-basic-college" label="College Nmae" variant="standard" value={userInput.education.college} onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, college: e.target.value } })} />
            <TextField id="standard-basic-university" label="University Name" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, university: e.target.value } })} value={userInput.education.university} />
            <TextField id="standard-basic-year" label="Year of Passout" variant="standard" value={userInput.education.year} onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, year: e.target.value } })} />

          </div>
        </div>
      )
      case 3: return (
        <div>
          <h3>Professional Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-role" label="Job or Intership" variant="standard" value={userInput.experience.jobRole} onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })} />
            <TextField id="standard-basic-comname" label="Company Name" variant="standard" value={userInput.experience.companyname} onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, companyname: e.target.value } })} />
            <TextField id="standard-basic-comloc" label="Company Location" variant="standard" value={userInput.experience.jobLocation} onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} />
            <TextField id="standard-basic-duration" label="Duration" variant="standard" value={userInput.experience.duration} onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} />
          </div>
        </div>
      )
      case 4: return (
        <div>
          <h3>Skills & Certifications</h3>
          <div className="d-flex align-items-center justify-content-between p-3">
            {/* <TextField sx={{width:"400px"}} id="standard-basic-skill" label="Add Skills" variant="standard" /> */}
            <input ref={userSkillRef} type="text" className='form-control' placeholder='Add Skills' />
            <Button onClick={() => addSkill(userSkillRef.current.value)} variant="text">ADD</Button>
          </div>
          <h5>Suggestions :</h5>
          <div className="d-flex justify-content-between flex-wrap my-3">
            {
              skillSuggestionArray.map(userSkill => (
                <Button onClick={() => addSkill(userSkill)} className='m-1' key={userSkill} variant="outlined">{userSkill}</Button>
              ))
            }
          </div>
          <h5>Added Skill :</h5>
          <div className="d-flex justify-content-between flex-wrap my-3">
            {/* span must duplicate according to the user added skill */}
            {
              userInput.skills.length > 0 ?
                userInput.skills.map(skill => (
                  <span key={skill} className='btn btn-primary d-flex align-items-center justify-content-center my-1'>{skill} <button className='btn text-white ms-2' onClick={()=>removeSkill(skill)}>X</button></span>
                ))
                :
                <span>NIL</span>
            }
          </div>
        </div>
      )
      case 5: return (
        <div>
          <h3>Professional Summary</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-name" label="Write a short summary of yourself" multiline rows={7} defaultValue={'Highly motivated MERN Stack developer with strong skills in React and Node.js, eager to build scalable and user-friendly web applications. Skilled in problem-solving, API integration, and responsive design with a focus on clean, maintainable code. Passionate about continuous learning and applying new technologies to create impactful solutions. Strong communication and teamwork abilities, with a drive to contribute effectively in fast-paced, collaborative environments while delivering high-quality results.'} variant="standard" value={userInput.summary} onChange={e => setUserInput({ ...userInput, summary: e.target.value })} />

          </div>
        </div>
      )
      default: return null
    }
  }



  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

          {/* view of each steps */}
          <Box>
            {renderStepArrayContent(activeStep)}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export default Steps
