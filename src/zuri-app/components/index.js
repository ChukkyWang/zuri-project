import React from 'react'
import '../assets/style/home/style.css'
import Logo from '../assets/images/zuri-logo-full.svg'

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
        
    ])
    return(
        <section>
            <div className="product_header">
                <h5>BY ZURI Team</h5>
                <h3>We cater for every level of <br/> expertise and needs in the industry.</h3>
            </div>
        </section>
    )
}