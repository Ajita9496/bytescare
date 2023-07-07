import React from 'react'
import "./section.css"
import background from "../../Assets/icons/Background Vector.svg"
import Logo from '../../Assets/icons/g196.svg'

function SectionSeven() {
    return (
        <div>
            <div className='block7'>
                <div className='background'>
                    <img className="section7-image" src={background} alt="background"></img>
                </div>
                <div className='section7-content'>
                    <div className='section7-text'>
                        <p>Convinced? Confused? Have Ideas?</p>
                    </div>
                    <div className='section7-header'>
                        <p>Let’s talk how Bytescare can help you and your business.</p>
                    </div>
                </div>
                <div className='section7-button'>
                    <button>Request Demo</button>

                </div>
            </div>
            <div className='block-8'>
                <div className='block8-rows'>
                    <div className='block8-coloumn1'>
                        <div className='block8-logo'>
                        <img src={Logo} alt="logo"></img>
                        </div>
                        
                        <div className='block8-content' >
                        <p>2055 Limestone Rd, STE 200-C, Wilmington, New Castle, DE 19808</p>
                        <p>Phone: +91 8756-621035
                            Email: contact@bytescare.com</p></div>
                    </div>
                    <div className='block8-coloumn1'>
                        <div className='block8-header'>
                            <p>Useful Links</p>
                        </div>
                        <div className='block8-content'>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Product & Services</p>
                            <p>Blog</p>
                            <p>FAQ’s</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                    <div className='block8-coloumn1'>
                        <div className='block8-header'>
                            <p>Key Services</p>
                        </div>
                        <div className='block8-content'>
                            <p>Web Monitoring</p>
                            <p>E-Commerce Monitoring</p>
                            <p>Content Security Audit</p>
                            <p>Text Maker</p>
                            <p>Image Identifier</p>
                        </div>
                    </div>
                    <div className='block8-coloumn1'>
                        <div className='block8-header'>
                        <p>Join Our Community</p>
                        </div>
                        <div className='block8-content'>
                        <p>Stay up to date with our products and offerings</p>
                        </div>
                        <div className='block8-input'>
                        <input className='block8-input-text' type='text' placeholder='Enter email address'>
                        </input>
                        <div>
                        <button className='block8-button'>Join Us</button>
                        </div>
                        </div>
                       
                       
                    </div>
                </div>

                <div className='section7-footer'>
                    <p>© Copyright 2022 Bytescare Inc. All rights reserved</p>
                </div>

            </div>

        </div>

    )
}

export default SectionSeven