import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/Media/5.jpg'
import aboutimg from '../assets/Media/two.png'
import simpImg from '../assets/Media/3-3.jpg'
import img1 from '../assets/Media/man.jpg'

function LangingPage() {
  return (
    <>
      <section className='container-fluid First' style={{ width: "100%", overflow: "hidden", height: "650px", backgroundImage: `url(${bgImage})`, backgroundPosition: "top", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
        
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 box border rounded py-5 text-center " style={{ backgroundColor: "rgb(255,255,255,0.5)",marginTop:"9%" }}>
            <h4>Designed to get hired</h4>
            <h5>You skills, Your story, Your next <br /> job - all in one</h5>
            <Link to={'/resumegenerator'} >
              <button className="btn text-white fw-bold" style={{ backgroundColor: "#4a148c" }}>Make Your Resume</button>
            </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>

      {/* tools section */}
      <section className="tools p-5">
        <h2 className='text-center fw-bold'>Tools</h2>
        <div className='row align-items-center'>
          <div className="tool-content col-12 col-md-6 " style={{padding:"6%"}}>
            <h5>Resume</h5>
            <p>Create unlimited esumes and easily edit them afterwards.</p>
            <h5>Cover Letters</h5>
            <p>Easily write professional cover letters.</p>
            <h5>Jobs</h5>
            <p>Automatically receive new and relevant job postings. </p>
            <h5>Applications</h5>
            <p>Effortlessly manage and track your applications in organized manner.</p>
          </div>
          <div className="tool-image col-12 col-md-6">
            <img className='image-fluid w-75' src={aboutimg} alt="" style={{marginLeft:"100px"}} />
          </div></div>
      </section>

      {/* Image Section */}
      <section className='second' style={{ width: "100%", overflow: "hidden", height: "650px", backgroundImage: `url(${simpImg})`, backgroundPosition: "top", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
      </section>

      {/* Testimonials Section */}
      <section className="testimony p-5">
        <h2 className='text-center fw-bold'>Testimonial</h2>
        <div className='row align-items-center'>
          <div className="tool-content col-12 col-md-6 " style={{padding:"6%"}}>
            <h3 className='mb-5'>Trusted by Professionals worldwide.</h3>
            <p className='fs-5'>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Et itaque exercitationem iste non alias voluptatum id corrupti, culpa numquam ul. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aut ducimus corporis aliquid laboriosam fugit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur iure illum, vitae nobis culpa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam et, dicta architecto perferendis quas eveniet!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur iure illum, vitae nobis culpa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam et, dicta architecto perferendis quas eveniet!</p>
          </div>
          <div className="tool-image col-12 col-md-6">
            <div className="row my-3">
              <div className="col-3">
                <img src={img1} alt="" className=' img-fluid rounded-circle' />
              </div>
              <div className="col-3">
                <img src={img1} alt="" className=' img-fluid rounded-circle' />
              </div>
              <div className="col-3">
                <img src={img1} alt="" className=' img-fluid rounded-circle' />
              </div>
              <div className="col-3">
                <img src={img1} alt="" className=' img-fluid rounded-circle' />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img src={img1} alt="" className=' img-fluid rounded-circle' />
              </div>
              <div className="col-3">
                <img src={img1} alt="" className=' img-fluid rounded-circle' />
              </div>
              <div className="col-3">
                <img src={img1} alt="" className=' img-fluid rounded-circle' />
              </div>
              <div className="col-3">
                <img src={img1} alt="" className=' img-fluid rounded-circle' />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img src={img1} alt="" className=' img-fluid rounded-circle' />
              </div>
              <div className="col-3">
                <img src={img1} alt="" className=' img-fluid rounded-circle' />
              </div>
              <div className="col-3">
                <img src={img1} alt="" className=' img-fluid rounded-circle' />
              </div>
              <div className="col-3">
                <img src={img1} alt="" className=' img-fluid rounded-circle' />
              </div>
            </div>
          </div>
          </div>
      </section>
    </>
  )
}

export default LangingPage
