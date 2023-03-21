import React from 'react'
import "./Contact.css"
import githubimg from "../../assets/Home/icons8-github (2).svg"
import linkedinimg from "../../assets/Home/icons8-linkedin (2).svg"
import handupimg from "../../assets/Home/hand-up (1).png"

export default function Contact2() {
    return (
        <div className="contact" id="contact">
      <div className="contact-heading">
       
        <h1> Contact Me</h1>
           
       <h5>Let's keep in touch</h5>

       <div className='dash'>

       <div className='hr-line'></div ><div className='hr-line-orange'></div><div className='hr-line'></div>

           </div>
      

      </div>
        
     <div className="contact-container">
        <div className="contact-images">
          <div className="contact-social">
              <h1 className="contact-images-heading">Get In Touch</h1>
            <div className="contact-icons">
              <div className="contact-icon">
               

                <a href="https://www.linkedin.com/in/sunita-sabale/" target="_blank">
                <img src={linkedinimg} alt="ok" />

                </a>
                <a href="https://github.com/Sabalesunita" target="_blank">
                    <img src={githubimg} alt="ok" />
                </a>
              </div>
            </div>
            <div className='phoneno'>
                <h4>Connect me via phone:</h4> <p>+91 9822103809</p>
                <h4>or Email:</h4><p>sabalesunita210@gmail.com</p>

            </div>
          </div>
         
         
        </div> 
        </div>
        <div className='site-manufacturer'>
            <h4 style={{color:"#0F1624"}}><strong>Designed By:</strong>&nbsp;&nbsp;<span style={{color:"#0F1624"}}><strong>Sunita Sabale</strong></span></h4>

        </div>
        <div className='handup-div'>
        <button onClick={()=>window.scrollTo(0,0)}><img className='handup-img' src={handupimg} alt="" /></button>

        </div>
        </div>
     
    )
}
