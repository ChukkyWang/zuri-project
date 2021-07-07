import React from 'react'
import '../assets/style/home/style.css'
import Logo from '../assets/images/zuri-logo-full.svg'


//Product Images
import Training from '../assets/images/training.svg'
import Internship from '../assets/images/internship.svg'
import Talent from '../assets/images/talent.svg'
import { HOME, INTERNSHIP, TRAINING } from './utils/routes'


function Home() {
    return (    
        <div className="zuri_home">
           <Buzz/>
           <Products/>
        </div>
    )
}

export default Home



//Zuri Homepage Components

//Welcome

function Buzz() {
    return(
        <section className="buzz_welcome">
            <div className="buzz_content">
                <img src={Logo} alt="Zuri Logo"/>
                <h2>Learn, Build, Grow.</h2>
                <p>Unlock your Brilliance with our hands-on <a href="">beginner</a> and <a href="">expert training</a>. Zuri Team has been immensely successful in creating a global network of a highly adept intelligent workforce that can help your company achieve their mission-critical <a href="">projects and goals</a></p>
                <div className="welcome_btns">
                    <button className="new_button">
                        I'm new in the Industry
                    </button>
                    <button className="new_industry">
                        I need Industry experience
                    </button>
                </div>
            </div>
        </section>
    )
}



//Zuri Product


function Products() {
    const products = ([
        {
            item: 'Zuri Training',
            logo: Training,
            long: "We understand a complete beginner cannot become a professional after a few weeks, the aim here is to get you familiar enough with each the tools such that you’ll be able to continue learning on your own with minimal support.",
            click: "I want to be trained >",
            url: TRAINING
        },
        {
            item: 'Zuri Internship',
            logo: Internship,
            long: "We place you in a work simulation. We give you tasks every week, the tasks ranges from easy to hard as you progress from stage to stage, making it to the final stage means you are ready for actual work.",
            click: "I want to join the internship >",
            url: INTERNSHIP
        },
        {
            item: 'Zuri Talent',
            logo: Talent,
            long: "Keeping pace with projects and being on the look out for the extremely talented individuals has become ever more challenging. Here is where Zuri Team comes into play to bring the best suited talent for your company",
            click: "I am looking for talent >",
            url: HOME
        }
    ])
    return(
        <section className="product_itself">
            <div className="product_header">
                <h5>BY ZURI Team</h5>
                <h3>We cater for every level of <br/> expertise and needs in the industry.</h3>
            </div>
            <div className="product_specifics">
                {
                    products.map((product) => (
                        <div key={product.item} className="product_type_card">
                            <img src={product.logo} alt={product.item} />
                            <p>{product.long}</p>
                            <h6>
                                <a href={product.url}>
                                    {product.click}
                                </a>
                            </h6>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}



//Footer Section
