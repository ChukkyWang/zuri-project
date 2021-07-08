import React, {useState} from 'react'
import './style/training-header-style/training-header.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {NavLink, Link, useLocation, useHistory} from 'react-router-dom'
import TrainingLogo from '../../assets/images/traininglogo.png'
import InternshipLogo from '../../assets/images/internshiplogo.svg'
import IntImg from '../../assets/images/internshiphero.png'
import TraImg from '../../assets/images/hero.png'
import { CONTACT, CURRICULUM, ENROL, INTERNSHIP, TRAINING } from '../utils/routes'

function TrainingHeader() {
        

        //Location
        const location = useLocation();

        const atHome = location.pathname === TRAINING;

        const atInternship = location.pathname === INTERNSHIP;

        const thatIncludesHome = location.pathname.includes(TRAINING);

        const thatIncludesInternship = location.pathname.includes(INTERNSHIP)

        const atContact = location.pathname.includes(CONTACT);

        const atCurriculum = location.pathname.includes(CURRICULUM);

        const atEnrol = location.pathname.includes(ENROL)


        //Toggle Switch
        const [show, setShow] = useState(false);


        return (
                <section className="training_header">
                        <nav className={`all_nav ${atInternship && 'atInternship_nav'}`}>
                                <div className="logo">
                                        <Link to={thatIncludesHome ? TRAINING : INTERNSHIP}>
                                                <img src={thatIncludesHome ? TrainingLogo : InternshipLogo} alt="Zuri - Training" />
                                        </Link>
                                </div>
                                <div onClick={() => setShow(!show)} className="toggle_button">
                                        <GiHamburgerMenu/>
                                </div>
                                <NavClass thatIncludesHome={thatIncludesHome} atInternship={atInternship}/>
   
                        </nav>
                        {show && <NavClass  thatIncludesHome={thatIncludesHome} atInternship={atInternship}/>}
                        <div className={`bold_welcome ${atInternship && 'atInternship'}`}>
                                <div className={`welcome_text_others ${!atContact && !atCurriculum && !atEnrol && "welcome_text_training"}`}>
                                        {
                                                atHome || atInternship ?
                                                <TrainingInternshipHeader atHome={atHome} atInternship={atInternship}/> : 
                                                <div>
                                                        <p>
                                                                {atContact ? 'CONTACT US' : 
                                                                atCurriculum ? 'PROGRAM CURRICULUM' : 
                                                                atEnrol ? 'ENTER YOUR DETAILS TO JOIN OUR WAITLIST' : 
                                                                 ''}
                                                        </p>
                                                        <h2>
                                                                {atContact ? 'Gain enough knowledge to help scale through the tech industry for free.' : 
                                                                atCurriculum ? 'Gain enough knowledge to help you get started in the tech industry for free' : 
                                                                atEnrol ? 'Enrollment for 2021 cohort has ended, you can register to join our waitlist' : 
                                                                ''}   
                                                        </h2>
                                                </div>
                                        }
                                </div>
                                
                        </div>   
                </section>
        )
}

export default TrainingHeader



//Nav Bar
function NavClass({thatIncludesHome, atInternship, show}) {
        return(
                        <div className={`nav_content ${show && 'show_nav'}`}>
                                <NavLink exact end as={Link} to={thatIncludesHome ? TRAINING : INTERNSHIP}>
                                        Home
                                </NavLink>
                                <NavLink exact as={Link} to={thatIncludesHome ? CURRICULUM : INTERNSHIP}>
                                        Curriculum
                                </NavLink>
                                {
                                        atInternship && 
                                        <NavLink exact as={Link} to={thatIncludesHome ? CURRICULUM : INTERNSHIP}>
                                                FAQ
                                        </NavLink> 
                                }
                                <NavLink exact as={Link} to={thatIncludesHome ? CONTACT : INTERNSHIP}>
                                        Contact
                                </NavLink>
                                <NavLink exact as={Link} to={thatIncludesHome ? ENROL : INTERNSHIP}>
                                        <button>
                                                {atInternship ? 'Enroll' : 'Join Zuri Training'}
                                        </button>
                                </NavLink>

                        </div>  
        )
};




function TrainingInternshipHeader({atHome, atInternship}) {
        return(
                <section className="header_class">
                        <div className="header_class_component">
                                <div className={`welcome_bold_texts ${atInternship && "internship_flex"}`}>
                                        <h2 className={`hero_bold_text ${atInternship && 'intership_bold_text'}`}>
                                                {
                                                        atHome ? 'Gain enough knowledge to help scale through the tech industry for free.' : 'Sign up for HNG Internship 8 - Operated by Zuri.'
                                                }
                                        </h2>
                                        <p className={`key_text ${atInternship && 'intership_key_text'}`}>
                                                {
                                                        atHome ? <span style={{textTransform: 'unset'}}>Basic introduction to software development and design aimed at complete beginners which anyone can join. Each week you'll be given course content, have opportunity to attend live classes and work on tasks to help you understand each topic better...<span>Read More</span></span> : 'HNG Internship is a long running, large scale virtual internship for people learning to code and design. It focuses on the post-training phase, and creates a virtual work environment for participants. It is fast paced and challenging, and helps people learn how to work in teams, deal with pressure and quickly expand their knowledge.'
                                                }
                                                
                                        </p>

                                        {
                                                atHome ? 
                                                <div className="ingressive_enrol">
                                                        <div className="img_ing">
                                                                <p className="powered">Powered by</p>
                                                                <img src="https://ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png" alt="Ingressive" />
                                                        </div>

                                                        <button className="ing_button">
                                                                Enroll Today
                                                        </button>
                                                </div> :
                                                <div className={`ingressive_enrol ${atInternship && 'internship_flex'}`}>
                                                        <button className="ing_button at_button">
                                                                Enroll Today
                                                        </button>

                                                        <div className="img_ing">
                                                                <p className="powered">In Partnership with...</p>
                                                                <img src="https://ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png" alt="Ingressive" />
                                                        </div>

                                                        
                                                </div>
                                        }

                                </div>
                                <div className="welcome_bold_images">
                                        
                                                <img className="internship_hero" src={atInternship ? IntImg : TraImg} alt="Zuri Internship" />
                                        
                                </div>
                        </div>
                </section>
        )
}




