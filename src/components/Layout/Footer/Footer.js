import React from 'react'
import './Footer.css'
import Logo from '../../Logo/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
         <footer className="py-4 pb-0">
            <div className="container py-md-3">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className='text-center text-md-start'>
                            <Logo size='30px' />
                            <p className='my-3 ps-1'>The main purpose here is to make you able to find and communicate with gym trainer in a professional way.</p>
                            <p className="ps-1 w-75 mx-auto mx-md-0"> 
                                <FontAwesomeIcon icon={faCode} className="pe-2"/>
                                Developed by
                                <a target="_blank" className='ps-1 text-decoration-none' href="http://github.com/TouhidZaman" rel="noreferrer"> 
                                    Muhammad Touhiduzzaman 
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                        <div className="social text-center">
                            <h4 className='mb-3 text-primary'>Follow me</h4>
                            <ul className="d-flex justify-content-center">
                                <li className="me-2">
                                    <a href="#facebook">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li className="mx-sm-2 me-2">
                                    <a href="#twitter">
                                        <FontAwesomeIcon icon={faTwitter} />
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                </li>
                                <li className="mx-sm-2 me-2">
                                    <a href="#Linkedin">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                        <span className="fa fa-linkedin-in"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright mt-md-4">
                    <p className="text-center">
                        <small>
                            Health Coach 
                            <FontAwesomeIcon icon={faCopyright} className="px-1"/>
                            {currentYear} | All rights reserved 
                        </small>
                    </p>
                </div>
            </div>
        </footer>
    )
}
