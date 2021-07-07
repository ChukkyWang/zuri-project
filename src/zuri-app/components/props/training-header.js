import React from 'react'
import './style/training-header-style/training-header.css'
import {NavLink, Link, useLocation, useHistory} from 'react-router-dom'
import TrainingLogo from '../../assets/images/traininglogo.png'
import InternshipLogo from '../../assets/images/internshiplogo.svg'
import { CONTACT, CURRICULUM, ENROL, INTERNSHIP, TRAINING } from '../utils/routes'

function TrainingHeader() {
        const location = useLocation();

        const atHome = location.pathname === TRAINING;

        const atInternship = location.pathname === INTERNSHIP

        const thatIncludesHome = location.pathname.includes(TRAINING);

        const thatIncludesInternship = location.pathname.includes(INTERNSHIP)

        const atContact = location.pathname.includes(CONTACT);

        const atCurriculum = location.pathname.includes(CURRICULUM);

        const atEnrol = location.pathname.includes(ENROL)

        return (
                <section className="training_header">
                        <nav className={`all_nav ${atInternship && 'atInternship_nav'}`}>
                                <div className="logo">
                                        <Link to={thatIncludesHome ? TRAINING : INTERNSHIP}>
                                                <img src={thatIncludesHome ? TrainingLogo : InternshipLogo} alt="Zuri - Training" />
                                        </Link>
                                </div>
                                <div className="nav_content">
                                        <NavLink exact end as={Link} to={thatIncludesHome ? TRAINING : INTERNSHIP}>
                                                Home
                                        </NavLink>
                                        <NavLink exact as={Link} to={CURRICULUM}>
                                                Curriculum
                                        </NavLink>
                                        {
                                                atInternship && 
                                                <NavLink exact as={Link} to={CURRICULUM}>
                                                        FAQ
                                                </NavLink> 
                                        }
                                        <NavLink exact as={Link} to={CONTACT}>
                                                Contact
                                        </NavLink>
                                        <NavLink exact as={Link} to={ENROL}>
                                                <button>
                                                        {atInternship ? 'Enrol' : 'Join Zuri Training'}
                                                </button>
                                        </NavLink>

                                </div>     
                        </nav>
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






function TrainingInternshipHeader({atHome, atInternship}) {
        return(
                <section className="header_class">
                        {atHome ? <Link to={INTERNSHIP}>
                                Internship
                        </Link> : <Link to={TRAINING}>
                                Training
                        </Link>}
                        <div className="header_class_component">
                                <div className="welcome_bold_texts">
                                        <h2>
                                                Gain enough knowledge to help scale through the tech industry for free.
                                        </h2>
                                </div>
                                <div className="welcome_bold_images">

                                </div>
                        </div>
                </section>
        )
}




