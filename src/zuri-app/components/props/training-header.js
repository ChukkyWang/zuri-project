import React from 'react'
import './style/training-header-style/training-header.css'
import {NavLink} from 'react-router-dom'
import TrainingLogo from '../../assets/images/zuri-logo-full.svg'

function TrainingHeader() {
        return (
                <div>
                        <nav>
                                <div className="logo">
                                        <img src={Logo} alt="Zuri - Training" />
                                </div>
                                <div className="nav_content">

                                </div>     
                        </nav>   
                </div>
        )
}

export default TrainingHeader
