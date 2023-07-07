import React from 'react'
import Navbar from "../Navbar/navbar"
import SectionOne from "../section1/section"
import SectionTwo from '../section2/section'
import SectionThree from "../section3/section"
import SectionFour from '../section4/section'
import SectionFive from "../section5/section"
import SectionSix from '../section6/section'
import SectionSeven from '../section7/section'
import "./homepage.css"
// import SectionEight from '../section8/section'

function Homepage() {
    return (
        <div className='home-page-container'>
            <div className='page-section' >
            <Navbar />
            </div>
            <div className='home-page-body'>
                <div className='page-section'>
                <SectionOne/>
                </div>
                <div className='page-section'>
                    <SectionTwo/>
                </div>
                <div className='page-section'>
                    <SectionThree/>
                </div> 
                <div className='page-section'>
                    <SectionFour/>
                </div> 
                <div className='page-section'>
                    <SectionFive/>
                </div> 
                <div className='page-section'>
                    <SectionSix/>
                </div>
                <div className='page-section'>
                    <SectionSeven/>
                </div>
                
            </div>
        </div>
    )
}

export default Homepage