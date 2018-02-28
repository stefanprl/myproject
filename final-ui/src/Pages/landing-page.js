import React from 'react';
import Image from '../Media/jobsmag-cover.jpg';
import '../Components/Layout/layout.css';

function LandingPage(props) {
    return(

                <div className="landing-page">
                    <h1>The best place to find jobs!</h1>
                    <img src={Image} alt="Jobs" width="100%" />
                </div>

    );
}

export default LandingPage;