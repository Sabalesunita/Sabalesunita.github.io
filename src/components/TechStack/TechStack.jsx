import React from 'react'
import "./TechStack.css"


import  csslogo2 from "../../assets/Home/icons8-css3.svg"
import bootstrapimg from "../../assets/Home/bootstrapimg.jpg"
import html5logo from "../../assets/Home/icons8-html-5.svg"
import jsimg from "../../assets/Home/icons8-javascript-logo.svg"
import reactlogo from "../../assets/Home/icons8-react-native.svg"
import gitimg from "../../assets/Home/icons8-github.svg"
import Reduximg from "../../assets/Home/icons8-redux-50.png"
import nodejsimg from "../../assets/Home/icons8-nodejs.svg"
import mongodbimg from "../../assets/Home/mongo.png"



export default function TechStack() {
    return (
        <div className='techstack' id='techStack'>
            <div className='techstack-heading'>
                <h1>Technical Skills</h1>
                <div className='dash'>
           <div className='hr-line'></div ><div className='hr-line-orange'></div><div className='hr-line'></div>

           </div>
            </div>
            
            <div className='techstack-container'>
            <div className='techstack-heading2'>
                <h1>Frontend</h1>
            </div>
                <div className='techstack-frontend'>
                    <div>
                    <img src={csslogo2} alt="ok" />
                    <h4>CSS</h4>

                    </div>
                    <div>
                    <img src={html5logo} alt="ok" />
                    <h4>HTML</h4>

                    </div>
                    <div>
                    <img src={jsimg} alt="ok" />
                    <h4>JAVASCRIPT</h4>

                    </div>
                    <div>
                    <img src={reactlogo} alt="ok" />
                    <h4>REACT</h4>

                    </div>
                    <div>
                    <img src={gitimg} alt="ok" />
                    <h4>GIT</h4>

                    </div>
                    <div>
                    <img src={Reduximg} alt="ok" />
                    <h4>
                        Redux

                    </h4>

                    </div>



                </div>
                <div className='techstack-heading2'>
                <h1>Backend</h1>
               </div>
                <div className='techstack-backend'>
                    <div>
                <img src={nodejsimg} alt="ok" />
                <h4>NODE JS</h4>

                    </div>
                    <div>
                <img src={mongodbimg} alt="ok" />
                <h4>MONGODB</h4>

                    </div>


                </div>
            </div>
            <div className='techstack-heading'>
                <h1>Projects</h1>
                <div className='dash'>
           <div className='hr-line'></div ><div className='hr-line-orange'></div><div className='hr-line'></div>

           </div>
            </div>

            
        </div>
    )
}
