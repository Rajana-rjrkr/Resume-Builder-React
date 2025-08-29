import React, { useState } from 'react'
import Steps from '../Components/Steps'
import Preview from '../Components/Preview'

function UserForm() {
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
  //state for finish
  const [finish, setFinish] = useState(false)
  
  //state for storing id of created resume
  const [resumeId, setResumeId] = useState("")

  return (
    <>
      {
        finish ?
          <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <Preview setUserInput={setUserInput} resumeId={resumeId} userInput={userInput} finish={finish}/>
          </div>
          :
          <div className="container">
            <div className="row p-5">
              <div className="col-lg-6">
                <Steps setResumeId={setResumeId} userInput={userInput} setUserInput={setUserInput} setFinish={setFinish} />
              </div>
              <div className="col-lg-6">
                <Preview userInput={userInput} finish={finish} />
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default UserForm
