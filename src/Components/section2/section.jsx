import React from 'react'
import learningImage from "../../Assets/icons/E-learning image.jpg"
import leftArrow from "../../Assets/icons/leftArrow.svg"
import rightArrow from "../../Assets/icons/rightArrow.svg"
import "./section.css"

function SectionTwo() {
    return (
        <div className='block2'>
            <div className='block2-header'>
                <p>Industries We Serve</p>
            </div>
            <div className='block2-container'>
                <div className='block2-text-container'>
                    <div className='block2-subheading'>
                        <p>E-Learning</p>
                    </div>
                    <div className='block2-content'>
                        <p>With the advancement of the digital world, E-learning is the new normal,
                            and books on laptop is of utmost demand. This may attract the pirates to
                            download & publish your original content on unauthorized platforms. But
                            Bytescare is at your doorstep to protect your content from infringements.
                            The tools & technologies used by us prevent the pirates from illegally
                            downloading the content and publishing it on unauthorized platforms.
                            <br />
                            <br />
                            Thereby, hindering content piracy, financial loss and protecting brand
                            reputation, thus uplifting the E-learning culture.
                            <br />
                            <br />
                            E-learning content includes:
                            <ul className='list-options'>
                                <li>Audio & Video Tutorials</li>
                                <li>Study Materials including text and images</li>
                                <li>Quiz & Mocks</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='block2-image-container'>
                    <img className='block2-image' src={learningImage} alt="learning"></img>
                </div>
            </div>
            <div className='block2-arrows'>
                <div className='left-arrow'>
                    <img src={leftArrow} alt="leftArrow"></img>
                </div>
                <div className='right-arrow'>
                    <img src={rightArrow} alt="rightArrow"></img>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo