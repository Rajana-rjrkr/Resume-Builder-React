import React from 'react'
import { Link } from 'react-router-dom'
Link
function PageNotFound() {
  return (
    <>
     <div style={{height:'85vh'}} className="d-flex flex-column justify-content-center align-items-center">
      <img style={{width:'30%'}} src="https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif" alt="gif" />
      <h1>Page Not Found</h1>
      <h5 className='my-4'>Sorry, we couldn't find the page</h5>
      <Link to={'/*'} className='btn text-white fw-bold' style={{backgroundColor:"#4a148c"}}>Goto Home</Link>
     </div>
    </>
  )
}

export default PageNotFound
