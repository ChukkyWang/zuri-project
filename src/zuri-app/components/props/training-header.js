import React from 'react'
import './style/training-header-style/training-header.css'
import {NavLink, Link, useLocation, useHistory} from 'react-router-dom'
import TrainingLogo from '../../assets/images/traininglogo.png'
import { CONTACT, CURRICULUM, ENROL, TRAINING } from '../utils/routes'

function TrainingHeader() {
        const location = useLocation();

        //const atHome = location.pathname.inludes(TRAINING);

        const atContact = location.pathname.includes(CONTACT);

        const atCurriculum = location.pathname.includes(CURRICULUM);

        const atEnrol = location.pathname.includes(ENROL)

        return (
                <section className="training_header">
                        <nav>
                                <div className="logo">
                                        <img src={TrainingLogo} alt="Zuri - Training" />
                                </div>
                                <div className="nav_content">
                                        <NavLink exact end as={Link} to={TRAINING}>
                                                Home
                                        </NavLink>
                                        <NavLink exact as={Link} to={CURRICULUM}>
                                                Curriculum
                                        </NavLink>
                                        <NavLink exact as={Link} to={CONTACT}>
                                                Contact
                                        </NavLink>
                                        <NavLink exact as={Link} to={ENROL}>
                                                <button>
                                                        Join Zuri Training
                                                </button>
                                        </NavLink>

                                </div>     
                        </nav>
                        <div className="bold_welcome">
                                <div className={`welcome_text_others ${!atContact && !atCurriculum && !atEnrol && "welcome_text_training"}`}>
                                        <p>
                                                {atContact ? 'CONTACT US' : 
                                                atCurriculum ? 'PROGRAM CURRICULUM' : 
                                                atEnrol ? 'ENTER YOUR DETAILS TO JOIN OUR WAITLIST' : 
                                                "Home"}
                                        </p>
                                        <h2>
                                                {atContact ? 'Gain enough knowledge to help scale through the tech industry for free.' : 
                                                atCurriculum ? 'Gain enough knowledge to help you get started in the tech industry for free' : 
                                                atEnrol ? 'Enrollment for 2021 cohort has ended, you can register to join our waitlist' : 
                                                "Home"}   
                                        </h2>

                                </div>
                                
                        </div>   
                </section>
        )
}

export default TrainingHeader
