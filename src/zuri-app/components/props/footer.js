import React from 'react'
import LogoFooter from '../../assets/images/zuri-logo-full.svg'
import './style/footer/footer.css'
import {useLocation} from 'react-router-dom'
import TrainingLogo from '../../assets/images/traininglogo.png'
import InternshipLogo from '../../assets/images/internshiplogo.svg'


//Socials
import Facebook from '../../assets/images/fb.png'
import Twitter from '../../assets/images/twitter.png'
import LinkedIn from '../../assets/images/in.png'
import Instagram from '../../assets/images/IG.png'
import { HOME, INTERNSHIP, TRAINING } from '../utils/routes'

function ZuriFooter() {

    const location = useLocation();

    const thatIncludesHome = location.pathname.includes(TRAINING);

    const thatIncludesInternship = location.pathname.includes(INTERNSHIP)
        
        const socials = ([
            {
                img: Facebook,
                link: "https://web.facebook.com/thezuriteam" ,
                alt: "Facebook"
            },
            {
                img: Twitter,
                link: "https://twitter.com/theZuriTeam",
                alt: "Twitter"
            },
            {
                img: Instagram,
                link: "https://www.instagram.com/thezuriteam/",
                alt: "Instagram"
            },
            {
                img: LinkedIn,
                link: "#",
                alt: "LinkedIn"
            },
        ])
        return(
            <section className="footer_zuri">
                <div className="contact_links">
                    <ul>
                        <li>
                            <img src={thatIncludesHome ? TrainingLogo: thatIncludesInternship ? InternshipLogo : LogoFooter} alt="" />
                        </li>
                        <li>
                            <h4 className="footer_heading">
                                Links
                            </h4>
                            <p className="items">
                                <a href="https://flutterwave.com/store/zuriteam">Store</a>
                            </p>
                            <p className="items">
                                <a href={HOME}>Blog</a>
                            </p>
                        </li>
                        <li>
                            <h4 className="footer_heading">
                                Contact 
                            </h4>
                            <p className="items">
                            8 Jubliee-CMD Road, Magodo, <br/> Lagos State
                            </p>
                            <p className="items">
                                <a href="mailto:hello@zuri.com">
                                    hello@zuri.com
                                </a>
                            </p>
                        </li>
                        <li>
                            <h4 className="footer_heading">
                                Follow Us
                            </h4>
                            <p className="items socials_class">
                                {
                                    socials.map(social => (
                                        <a key={social.alt} href={social.link}>
                                            <img className="social_tags" src={social.img} alt={social.alt} />
                                        </a>
                                    ))
                                }
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
    
                </div>
            </section>
        )
    }

export default ZuriFooter
