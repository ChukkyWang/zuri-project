import React from 'react'
import LogoFooter from '../../assets/images/zuri-logo-full.svg'
import './style/footer/footer.css'
//Socials
import Facebook from '../../assets/images/fb.png'
import Twitter from '../../assets/images/twitter.png'
import LinkedIn from '../../assets/images/in.png'
import Instagram from '../../assets/images/IG.png'

function ZuriFooter() {
        
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
                            <img src={LogoFooter} alt="" />
                        </li>
                        <li>
                            <h4 className="footer_heading">
                                Links
                            </h4>
                            <p className="items">
                                <a href="https://flutterwave.com/store/zuriteam">Store</a>
                            </p>
                            <p className="items">
                                <a href="https://blog.zuri.team/">Blog</a>
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
