import React from 'react';
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiLinkDuotone } from "react-icons/pi";

const Contact = () => {
  return (
    <div id="contact" style={{ paddingTop: '8rem', backgroundColor: 'rgb(22,16,16)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', color: '#fff' ,}}>
        <div style={{gap :"20rem"}}>
          <h2 style={{ fontSize: '3rem',fontStyle:"grid",gap:"10rem" }} data-aos="zoom-in-up">Contact me</h2>
          <p style={{ color: '#999', paddingTop: '0.5rem' }} data-aos="zoom-in-up">
            Feel free to reach out to me via email or phone for any inquiries.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} data-aos="zoom-in-up">
            <IoMail size={30} /> <span>muhibanwar065@gmail.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} data-aos="zoom-in-up">
            <BsFillTelephoneFill size={30} /> <span>+923306249841</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} data-aos="zoom-in-up">
            <PiLinkDuotone size={30} /><span>Muhib Anwar</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }} data-aos="zoom-in-up">
          <input type="text" placeholder="Name" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <textarea placeholder="Message" style={{ ...inputStyle, height: '10rem' }}></textarea>
          <button style={buttonStyle} data-aos="zoom-in-up">SEND</button>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  height: '2.5rem',
  backgroundColor: 'transparent',
  border: '1px solid white',
  padding: '0.5rem',
  color: 'white',
};

const buttonStyle = {
  padding: '0.5rem 1.5rem',
  color: '#000',
  backgroundColor: '#fff',
  border: 'none',
  cursor: 'pointer',
};

export default Contact;
