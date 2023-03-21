import React from 'react'
import "./About.css"
export default function About() {
    return (
        <div className='about' id='about'>
        <div className='about-container'>
        <div className='aboutme-text'>
           <h1>About Me</h1>
           <div className='dash'>
           <div className='hr-line'></div ><div className='hr-line-orange'></div><div className='hr-line'></div>

           </div>

        </div>

        <div className='aboutme-container'>
            <div className='aboutme-img'>
                <img src={require('../assets/about.png')} alt="" />
            </div>
            <div className='aboutme-text-section'>
            <div className='about-me-summary'>
                <p> Hi, I am Sunita Sabale . I am from Pune, Maharashtra. I have completed my education in Electronics and Telecommunication Engineering from Pune University. I have an interest in technical skills so I joined Masai School. 
                    I am an efficient, dedicated, work-oriented aspiring Full Stack Web Developer eager to offer superb analytical skills. 
                    Looking for opportunities to improve skills in a high-quality environment and to help cranscape meet its website development challenges by leveraging broad web development experience.
           </p>
            </div>
            <div className='about-me-highlight'>
                <h3>Here are a Few Highlights:</h3>
                <ul>
                    <li className='aboutme-highlighted-text'>Full-Stack web development</li>
                    <li className='aboutme-highlighted-text'>Interactive Front End as per the design</li>
                    <li className='aboutme-highlighted-text'>React for building user interfaces </li>
                    <li className='aboutme-highlighted-text'>Managing database</li>


                </ul>
            </div>
            <div className="profile-options">
                <a href='#contact'>

                
              <button className="btn primary-btn">
                  {""}
                  Hire Me{" "}
              </button>
              </a>
              <a href="https://drive.google.com/file/d/1L6zrPNGZlGZU--EnuL1CoT1Q3jazTDaJ/view" target="blank">
                  <button className="btn highlighted-btn">Get Resume</button>
              </a>
          </div>
        </div>
        </div>
        </div>
        </div>
    )
}
