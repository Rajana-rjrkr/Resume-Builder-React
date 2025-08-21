import React from 'react'
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
  return (
    <>
      <div className="container">
        <div className="row p-5">
          <div className="col-lg-6">
            <Steps userInput={userInput} setUserInput={setUserInput}/>
          </div>
          <div className="col-lg-6">
            <Preview userInput={userInput}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserForm
