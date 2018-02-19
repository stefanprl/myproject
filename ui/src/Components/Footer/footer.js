import React, {Component} from 'react';
import './footer.css';

class Footer extends Component{
    render() {
    
        let currDate = new Date();
        let year = currDate.getFullYear();
        
    return(
    <div className="footer-style">
        
       <p>Parlea Stefan Marian. AROBS ReactJS Internship. {year.toString()}</p>
            
    </div>
    );
  }
}

export default Footer;