import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoDownload } from "react-icons/io5";
import { Link } from 'react-router-dom';

function ResumeGenerator() {
  return (
    <>
      <div className='container-fluid'>
        <h4 className=' mt-5 text-center'>Create a job winning Resume in Minutes</h4>
        <div className='row justify-content-center align-items-center' style={{height:"65vh"}}>
          <div className='col-4 border rounded p-5 shadow text-center'>
          <IoDocumentTextOutline className='text-primary fs-1 mb-3' />
          <h5>Add your Information</h5>
          <p>Add pre-written examples to each section</p>
          <h6>Step 1</h6>
        </div>
        <div className="col-1"></div>
        <div className='col-4 border rounded p-5 shadow text-center'>
          <IoDownload className='text-danger fs-1 mb-3' />
          <h5>Download your Resume</h5>
          <p>Download and Start Applying</p>
          <h6>Step 2</h6>
        </div>
        </div>
        <div className="text-center mb-5">
          <Link to={'/form'}><button className='btn text-white fw-bold' style={{backgroundColor:"#4a148c"}}>
            LET'S START
          </button></Link>
        </div>
      </div>
    </>
  )
}

export default ResumeGenerator
