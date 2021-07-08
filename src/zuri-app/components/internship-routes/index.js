import React from 'react'
import '../internship-routes/style/internship.css'



//Image
import About1 from '../../assets/images/about1.png'
import About2 from '../../assets/images/about2.png'
import About3 from '../../assets/images/about3.png'

function InternHome() {
        return (
                <section>
                        <About/>
                        <Tracks/>
                        <EnrolToday/>
                </section>
        )
}

export default InternHome





//About


function About() {
        const enrolOne = 
        <article>
                <p>There are 10 stages, you are required to complete all the 10 stages (which becomes increasingly more difficult as you go higher), after which you become Finalist. Being a finalist is a mark of honour - it shows that you have grit, perseverance, and can solve various problems successfully.</p>
                <p>The program is designed to surface the very best of candidates - that means that even though an unlimited number of people can start, only a small percentage of those who start will complete the program. Typically, this is less than 10%.</p>
                <p>A finalist is someone we can firmly recommend to any company for employment - because they have shown that they have what it takes.</p>
        </article>

        const enrolTwo = 
        <article>
                <p>Each Internship cohort is slightly different, even though we follow the same basic pattern. The current iteration is a follow-on phase for the ZurixIngressive Training, as well as the Reskill Americans training. It is open to everyone to join, but requires a bit of pre-knowledge.</p>
                <ul>
                        <li>If you have prior coding or design skills / knowledge</li>
                        <li>If you are a professional looking to connect with others</li>
                        <li>If you are looking for a challenge</li>
                </ul>
                <p>The internship is a fun-filled experience that runs like a game, join us, and we promise you'll come out better, even if you're unable to complete the program.</p>
        </article>

        const enrolThree =      
                <article>
                        <p>We allow anybody and everybody to enter the workspace. The workspace will have more than 10,000 people active in it at the beginning. There are 10 stages - and as you progress, those who do not make it through are removed from the workspace. The first three stages are a basic filter stage.</p>
                        <p>You will be given tasks that are more focused with real world experiences. They typically involve a real world task which aims at identifying the most committed/driven interns and helping them harness their skills better.</p>
                        <p>We also give rewards as you deliver on tasks. Rewards are usually in difference forms including cash and premium courses.</p>
                </article>

        const internAbout = ([
                {
                        topic: "How the program runs",
                        body: enrolOne,
                        img: About1
                },
                {
                        topic: "Who Should Apply",
                        body: enrolTwo,
                        img: About2
                },
                {
                        topic: "Grow your portfolio",
                        body: enrolThree,
                        img: About3
                },
        ])



        return(
                <section className="about_internship">
                        <div className="about_value">
                                <div className="about_header">
                                        <p>ABOUT ZURI INTERNSHIP</p>
                                        <h4>Zuri Internship runs internships that are designed to surface the very best of candidates out of a large pool of participants.</h4>
                                </div>
                                {
                                        internAbout.map(internss => (
                                                <div className={`indice_about ${internss.topic == 'Who Should Apply' && 'flip_about'}`}>
                                                        <div className="ad_img">
                                                                <img src={internss.img} alt={internss.topic} />
                                                        </div>
                                                        <div className="ad_text">
                                                                <h2>{internss.topic}</h2>
                                                                <div>{internss.body}</div>
                                                                <a href="">
                                                                        Enrol Now {'>'}
                                                                </a>
                                                        </div>
                                                        
                                                </div>
                                        ))
                                }
                        </div>
                </section>
        )
}


//Tracks


function Tracks() {
        const courses = ([
                {
                        header:"Frontend Development",
                        body: "In our client side track, participants are required to have prior knowledge of basic web languages, and most popular frameworks and libraries",
                        footer: "HTML | CSS | JavaScript | ReactJS",
                        color: "#ffe3e1"
                },
                {
                        header:"Backend Development",
                        body: "Our backend consist of industry most popular languages. This allows you explore your options and makes it easier for you to get your dream job.",
                        footer: "NodeJS | PHP | Go | Python",
                        color: "#f0dcf8"
                },
                {
                        header:"UI/UX Design",
                        body: "We only allow a very limited number of participants join the UI/UX track. However, you'll get a chance to switch to another track mid program",
                        footer: "Figma",
                        color: "#f0f6f7"
                },
                {
                        header:"Mobile Development",
                        body: "We do cross platform development using Flutter. You should already have basic skills and the computer to develop mobile applications",
                        footer: "Dart | Flutter",
                        color: "#dcf4f8"
                },
                {
                        header:"Enterpreneur Track",
                        body: "We are introducing the Enterpreneur track. A few participants will be allowed into the Enterpreneurship track. A team is selected and funded.",
                        footer: "Enterpreneur",
                        color: "#f2ebe9"
                },
                {
                        header:"Digital Marketing",
                        body: "The digital marketing track has very little design and no coding at all, but participants will be required to show results.",
                        footer: "SEO | Analytics",
                        color: "#f0f6f7"
                },
        ])
        
        return(
                <section className="track_cards">
                        <div className="scope_of_program">
                                <div className="scope_text">
                                        <div className="about_header">
                                                <p>SCOPE OF THE PROGRAM</p>
                                                <div>
                                                        <h4>These are the tracks available in the Internship</h4>
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
                                                <div className="courses_card" style={{backgroundColor: `${course.color}`}}>
                                                        <h3>{course.header}</h3>
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
                <div className="enrol_today">
                        <div className="enrol_content">
                                <h2>Break into the tech industry like a pro</h2>
                                <button>
                                        Enrol Today
                                </button>
                        </div>
                </div>
        )
}