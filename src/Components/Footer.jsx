import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import Button from '@mui/material/Button';
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <div className="container-fluid p-4 text-white" style={{backgroundColor:"#4a148c"}}>
                <div className="row">
                    <div className="col-4" style={{fontFamily:"Libertinus Sans"}}>
                        <h1>rBuilder</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa delectus commodi a eius nulla expedita exercitationem eligendi officia accusantium?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cum adipisci commodi labore corporis a voluptatem soluta, accusantium nihil nostrum.</p>
                    </div>
                    <div className="col-4">
                        <h1>Quick Links</h1>
                        <ul>
                            <li>Home</li>
                            <li>Resume Creator</li>
                            <li>History</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h1>Contact Us</h1>
                        <form action="">
                            <div className="d-flex justify-content-between align-items-center">
                                <input type="text" className='form-control me-3' placeholder='Enter Your Email' />
                                <Button variant="outlined" color="white" className='py-1 px-4 text-light'>
                                    Send
                                </Button>
                            </div>
                        </form>
                        <div className="d-flex justify-content-between align-items-center mt-5">
                            <IoLogoFacebook className='fs-2'/>
                            <AiFillInstagram className='fs-2'/>
                            <FaLinkedin className='fs-2'/>
                            <FaSquareXTwitter className='fs-2'/>
                        </div>
                    </div>
                </div>
                <p className='text-center mt-3'>Designed & Built with ❤️ using React</p>
            </div>
        </>


    )
}

export default Footer
