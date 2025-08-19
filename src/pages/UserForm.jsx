import React from 'react'
import Steps from '../Components/Steps'
import Preview from '../Components/Preview'

function UserForm() {
  return (
    <>
      <div className="container">
        <div className="row p-5">
          <div className="col-lg-6">
            <Steps/>
          </div>
          <div className="col-lg-6">
            <Preview/>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserForm
