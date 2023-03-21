import React from "react";
import "./Contact.css";
import { useRef } from "react";
import mailz from "../../assets/Home/mailz.jpeg";
import { useEffect } from "react";
import { useState } from "react";
import "../ProfileContainer/Home/Profile.css";

export default function Contact(props) {
  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    time: "",
    image: "",
    instructions: "",
  });
  const [page, setPage] = useState(1);
  useEffect(() => {
    getItem();
  }, [page]);
  const ref = useRef(null);
  const [data, setData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const getItem = () => {
    fetch(`http://localhost:3001/fooditems`)
      .then((d) => d.json())
      .then((res) => {
        setData(res);
      });
  };
  const addItem = () => {
    fetch("http://localhost:3001/fooditems", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "content-type": "application/json" },
    }).then(() => {
      getItem();
    });
  };

  console.log(data);

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
            <div className="colz">
              <div className="colz-icon">
                <a href="#">
                  <i className="fa fa-twitter-square"></i>
                </a>

                <a href="https://www.linkedin.com/in/sunita-sabale/">
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a href="https://github.com/Sabalesunita">
                  <i className="fa fa-github-square"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-mailz">
            <h3>Send Your Email Here !</h3>  
          <img src={mailz} alt="" />
          </div>
         
        </div>
        <div className="contact-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(ref.current.files);

              console.log(form);
            }}
            action=""
          >
            <label htmlFor="">
              Name
              </label>
              <br />
              <input
                className="inputbox"
                onChange={handleChange}
                name="title"
                type="text"
                placeholder="Your Name"
              />
            
            <br />
            <label htmlFor="">
              Email
              </label>
              <br />
              <input
                className="inputbox"
                onChange={handleChange}
                name="ingredients"
                type="text"
                placeholder="Your Email"
              />
           
            <br />
            <label htmlFor="">
              Message
              </label>
              <br />
              <input
                className="inputbox"
                onChange={handleChange}
                name="time"
                type="textarea"
                placeholder="Your Message"
              />
          

            <br />

            <button className="btn primary-btn send-btn-size">
                  {""}
                  Send 	<i class="fa">&#xf1d9;</i>	{" "}
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}
