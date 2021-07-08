import React from 'react'
import {RiPushpin2Fill} from 'react-icons/ri'
import '../internship-routes/style/internship.css'
//import "./flickity.css"

function Training() {
        return (
                <div>
                        <Tracks/>
                       <EnrolToday/> 
                </div>
        )
}

export default Training

//Courses
function Tracks() {
        const courses = ([
                {
                        header:"Frontend Development",
                        body: "This track deals with the aspect of your application that the users interact with. A front-end developer will be able to correctly interpret a given design to the user interface.",
                        footer: "HTML | CSS | JavaScript",
                        color: "#ffe3e1"
                },
                {
                        header:"Backend Development",
                        body: "This track deals with the aspect of the application the user does not directly interact with. It allows the frontend function either by running some back-end code or connecting to the database.",
                        footer: "NodeJS | PHP | Python",
                        color: "#f0dcf8"
                },
                {
                        header:"Design",
                        body: "This track deals with creating a graphic plan for an application. You will learn to convert project documentation into viewable and understandable graphic design for the developers to work with",
                        footer: "UI | UX | Graphics Design",
                        color: "#f0f6f7"
                },
                {
                        header:"Mobile Development",
                        body: "The mobile track contains a list of tools and languages needed for a developer to create mobile applications. A mobile application can be IOS or Android.",
                        footer: "Java | Flutter | Kotlin",
                        color: "#dcf4f8"
                },
                {
                        header:"Cloud",
                        body: "The cloud track is an extension of the backend track. It involves cloud tools that’ll allow the participant to develop in the cloud using AWS or Azure cloud services",
                        footer: "AWS | Azure",
                        color: "#f2ebe9"
                },
                {
                        header:"Frameworks",
                        body: "During the program we will be exploring several useful frameworks to give you an edge in the industry and help you develop complex applications much faster",
                        footer: "Laravel | ReactJS | Django",
                        color: "#f0f6f7"
                },
        ])
        
        return(
                <section className="track_cards training_cards_cage">
                        <div className="scope_of_program">
                                <div className="scope_text">
                                        <div className="for_here about_header">
                                                <p>SCOPE OF THE PROGRAM</p>
                                                <div>
                                                        <h4>Here is the list of areas that will be explored in training.</h4>
                                                        <button>
                                                                View Curriculum
                                                        </button>
                                                </div>
                                                
                                        </div>
                                </div>
                                
                        </div>
                        <div className="courses_card_cage">
                                {
                                        courses.map(course => (
                                                <div className="courses_card training_cards">
                                                        <div style={{display: "flex", margin: '25px 0px', justifyContent: 'space-between', flexWrap: 'nowrap', alignItems: 'center'}}>
                                                                <h3 style={{margin: '0px'}}>{course.header}</h3>
                                                                <RiPushpin2Fill/>
                                                        </div>
                                                        <p>{course.body}</p>
                                                        <hr/>
                                                        <small>{course.footer}</small>
                                                </div>
                                        ))
                                }
                        </div>
                </section>
        )
}


//Get Started

function EnrolToday() {
        return(
                <div className="enrol_today training_today">
                        <div className="enrol_content">
                                <h2>Break into the tech industry like a pro</h2>
                                <button>
                                        Enrol Today
                                </button>
                        </div>
                </div>
        )
}