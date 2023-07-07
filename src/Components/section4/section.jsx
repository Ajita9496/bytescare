import React from 'react'
import image1 from "../../Assets/icons/Piracysolutions.svg"
import "./section.css"
import upArrow from "../../Assets/icons/Dropdown1.svg"
import downArrow from "../../Assets/icons/Dropdown2.svg"

function SectionFour() {
  return (
    <div className='block4'>
    <div className='block4-image-container'>
            <img className='block4-image' src={image1} alt="learning"></img>
        </div>
        <div className='block4-text-container'>
        <div className='block4-header'>
        <p>Products & Services</p>
    </div>
            <div className='block4-drop-down'>
            <div className='block4-subheading'>
                <p>Pre-Piracy Solutions</p>
                <img src={upArrow} alt="dropdown1"></img>
            </div>
            <div className='block4-content'>
                <p>It is a prevention phase that comes into play before publishing the
content. It helps creators to prevent their original content from piracy
attacks and publish authorized, encrypted, and original content. Pre-Piracy solutions include watermarking and digital rights management, evaluating existing technologies for loopholes, implementing extra measures to stop leakages within the team, etc.
                </p>
            </div>
            </div>
            <div  className='block4-drop-down'>
            <div className='block4-subheading'>
                <p>Post-Piracy Solutions</p>
                <img src={downArrow} alt="dropdown1"></img>
            </div>
            </div>
            <div  className='block4-drop-down'>
            <div className='block4-subheading'>
                <p>Brand & Reputation Management</p>
                <img src={downArrow} alt="dropdown1"></img>
            </div>
            </div>
    </div>
</div>
  )
}

export default SectionFour