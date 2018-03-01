import React from 'react';
import Gif from '../../Media/loading.gif';

function Loading() {
    return(
        <div>
            <img src={Gif} alt="loading animation"/>
        </div>
    );
}

export default Loading;
