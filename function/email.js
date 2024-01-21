import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

  export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('process.env.YOUR_SERVICE_ID', 'process.env.YOUR_TEMPLATE_ID', form.current, 'process.env.YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  }
  
