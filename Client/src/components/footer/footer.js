import React from "react";
import './footer.css'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="footer" id="5" >
       
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h2>Admin</h2>
                        <a style={{"color":"white"}} href="https://www.linkedin.com/in/saurabh-thapliyal-3a84bb250/">
                            <BsLinkedin /> LinkedIn
                        </a>
                        <a style={{"color":"white"}} href="https://github.com/Saurabhthapliyal">
                            <BsGithub /> GitHub
                        </a>
                    </div>
                    
                
                    {/* <div className="sb_footer-links_div">
                        <h4>View Website in</h4>
                        <p>English</p>
                    </div> */}
                    {/* <div className="sb_footer-links_div">
                        <h4>Need Help?</h4>
                        <a href="/helpcentre">
                            <p>Visit Help Centre</p>
                        </a>
                        <a href="/feedback">
                            <p>Share Feedback</p>
                        </a>
                    </div> */}
                    
                </div>
                <hr></hr>

                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} STAR. All Rights Reserved.
                        </p>
                    </div>
                    {/* <div className="sb_footer-below-links">
                        <a href="/terms"><div><p>Terms of use</p></div></a>
                        <a href="/policy"><div><p>Privacy Policy</p></div></a>
                        <a href="/faq"><div><p>FAQ</p></div></a>
                    </div> */}
                </div>

            </div>
        </div>
    );
}
 
export default Footer;