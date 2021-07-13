import React from 'react'
import './Resume.css'
import pic from '../images/me.jpg'

function Resume() {
    return (
        <div>
            <div className="head">
                <div className="inner">
                    <img className="pic" src={pic}/>
                    <div className="info">
                        <h1 className="big">Hello</h1>
                        <h3>A Bit About Me.</h3>
                        <p>I am a student of Birla Institute of Technology,Mesra.<br/>Currently i am seeking for any IT or Electronics related internship opportunity to prove my skills and to work in an organized environment. </p>
                    </div>
                </div>
            </div>
            <div className="education" id="education">
                <div>
                <h2 className="big2">Education</h2>
                <p className="info-edu">Birla Institute of Technology, Mesra, Ranchi<br/>
                    Aug 2019 – Aug 2023<br/>
                    - 8.83 GPA (Cumulative)<br/>
                    Cambrian Public School, Ranchi<br/>
                    Class 10 CBSE – 10 CGPA<br/>
                    Class 12 CBSE – 88.2%<br/>
                </p>
                </div>
            </div>
            <div className="projects">
                <div>
                <h2 className="big2">Projects</h2>
                <p > •	To-Do list web-app using Node.js and MongoDB.<br/>
                    •	Mental health awareness website using React.<br/>
                    •	Snake Game using Python.<br/>
                    •	Purchase Prediction Model using Python.<br/>
                    •	Image Resizing application using Electron.<br/>
                    •	Dice rolling mobile app using Flutter.<br/>
                    </p>
                </div>
            </div>
            <div className="skills">
                <div>
                <h2 className="big2">Skills</h2>
                <p> •	C++ <br/>
                    •	Python <br/>
                    •	Web Technologies: HTML5, CSS, Bootstrap, JavaScript, JSON<br/>
                    •	JavaScript Libraries and Frameworks (Basics):<br/>
                                - React JS, Node.js, jQuery, Express.js, ES6+, Electron JS<br/>
                    •	Flutter<br/>
                    •	Machine Learning<br/>
                    •	Arduino (Basics)<br/>
                    •	Languages: Hindi (Native), English, German (Basics)</p>
                </div>
            </div>
        </div>
    )
}

export default Resume
