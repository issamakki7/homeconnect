import React from 'react';
import './Footer.css';

function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    
    return(
        <footer id='foot' className = "footer">
        <div className = "footercontainer">
        <div className= "footerrow">
            
        <div className = "footer-left">
                {/* Logo Image  */}
                <a className= "company-logo" href="#"><h1>HomeConnect <i class="fas fa-home"></i> </h1> </a>
                <p>Making You Feel At Home</p>
               
        
        </div>


        <div className = "footer-col">
        <h4>Services</h4>
        <ul>
        <li><a href = "#browse">Browse Houses</a></li>
        <li><a href = "#build">Build A Room</a></li>
        <li><a href = "https://issamakki7.github.io/artest3/">AR</a></li>
        </ul>
        </div>
        
        <div className = "footer-col">
        <h4>Contact Information</h4>
        <ul>
        <li> <a href = "https://maps.app.goo.gl/18b2L1ALboRrGkVE8"><i class ="fas fa-map-marker"></i> Bazerkan Bldg., Beirut, Lebanon</a> </li>
        <li><a href = "mailto:issa.makki@lau.edu"><i class="fas fa-envelope"></i> E-mail</a></li>
        <li><a><i class="fas fa-phone-alt"></i> +961 01 444 777</a></li>
        </ul>
        </div>
        
    
        
        <div className = "footer-col">
        <h4>Follow Us</h4>
        <div className = "social-links">
        <a href = "#"> <i className = "fab fa-facebook-f"></i></a>
        <a href = "#"> <i className = "fab fa-instagram"></i></a>
        <a href = "#"> <i className = "fab fa-twitter"></i></a>
        <a href = "#"> <i className = "fab fa-linkedin-in"></i></a>
        </div>
        </div>
        
        
        </div>
        </div>

        <p className = "copyright">Copyright ⓒ {year} HomeConnect</p>
        <a className = "arrow" href="#"><i className="fas fa-arrow-up"></i></a>

        </footer>
        )
    }
    
    
    
    export default Footer;
    