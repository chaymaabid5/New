import React from 'react'

import Common from './Common'
import about from "../images/about.svg";


const About = () => {
    return (
        <>
            <Common 
                name='Welcome to About Page' 
                imgsrc={about} 
                visit='/contact' 
                btnname="Contact Now" 
            />
        </>
    )
}

export default About
