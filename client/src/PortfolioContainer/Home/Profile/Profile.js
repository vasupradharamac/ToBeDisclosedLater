import React from 'react'
import Typical from 'react-typical'
import "./Profile.css"

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://github.com/vasupradharamac'>
                            <i className="fa fa-github-square"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/vasupradha-r/'>
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                        <a href='https://leetcode.com/Vasupradha_R/'>
                            <i className="fa fa-code"></i>
                        </a>
                        </div>    
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Vasupradha R</span>
                        </span>
                    </div>
                    <div className='profile-details-roles'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps = {[
                                        "Socially attached to machines",
                                        1500,
                                        "Full-Stack Developer",
                                        1500,
                                        "Infinitely curious like a feline",
                                        1500,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                A developer with a knack to explore tech and build applications.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {" "}
                            Hire Me {" "}
                        </button>
                        <a href="Vasupradha's resume.pdf" download="Vasupradha's resume.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}