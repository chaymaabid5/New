import React from 'react';

import Common from './Common';
import home from "../images/home.svg";


const Home = () => {
    return (
        <>
            <Common 
                name='Grow your business with' 
                imgsrc={home} 
                isCompName={true}
                compName="Company Name"
                visit='/services' 
                btnname="Get Started" 
            />
        </>
    )
}

export default Home;