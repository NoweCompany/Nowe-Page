import Nav from '../pages/components/Nav'
import Footer from './components/Footer'
import style from '../styles/form/form.module.css'
import React, { useRef } from 'react';
<<<<<<< HEAD
// import emailjs from '@emailjs/browser';
// import email from "../functions/email"
=======
import emailjs from '@emailjs/browser';
import email from "../function/email"
>>>>>>> 8fe73f04bada7979bd02ea75e66d2789e63cd4cc

export default function contato(){

   return (
    <>
    <Nav />
    {/* <div className={style.background}>
    <div className={style.containerSegundo}> 
    <div className={style.formContainer}>

      <div className="container">
        <h2 className={style.title}>Entre em contato conosco.</h2>
<<<<<<< HEAD
        <form ref={form} onSubmit={sendEmail}>  
=======
        <form onSubmit={sendEmail}>  
>>>>>>> 8fe73f04bada7979bd02ea75e66d2789e63cd4cc
          <div className="row mb-3">
            <div className="col-md-6">
              <input type="text" className={style.input} placeholder="Nome" name="user_name"  required />
            </div>
            <div className="col-md-6">
                <div className={style.margin}>
              <input type="number" className={style.input} placeholder="Telefone" name="telefone" required />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input type="email" className={style.input} placeholder="Email" name="user_email" required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <textarea className={style.input} rows="5" placeholder="Sua mensagem" name="message" required></textarea>
            </div>
          </div>
          <div className="text-start">
            <button value="Send" type="submit" className={style.button}>Enviar <ion-icon name="arrow-forward-outline"></ion-icon> </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div> */}
    <Footer />
    </>
    )
}