import React, { useRef } from 'react'
import { useState } from 'react'
import Nav from '../pages/components/Nav'
import Footer from './components/Footer'
import Overlay from './components/overlay/OverlayForm'
import style from '../styles/form/form.module.css'
import sendEmail from '@/functions/email'


export default function contato() {
  const form = useRef()
  const [showModal, setShowModal] = useState(false)
  const [loading, setloading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setloading(true)
      const formData = new FormData(form.current)
      const data = {}
      formData.forEach((value, key) => {
        data[key] = value
      })

      await sendEmail(data)
      setShowModal(true)
    } catch (error) {
      console.error('Erro ao processar formulário:', error)
    } finally{
      setloading(false)
    }
  }

  const closeModal = () =>{
    setShowModal(false)
  }

  return (
    <>
      <Nav />
      <div className={style.background}>
        <div className={style.containerSegundo}>
          <div className={style.formContainer}>

            <div className="container">
              <h2 className={style.title}>Entre em contato conosco.</h2>
              <form ref={form} onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input type="text" className={style.input} placeholder="Nome" name="user_name" required />
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
                <div className="text-start">
                  <button value="Send" type="submit" className={style.button} disabled={loading}>
                  Enviar  {loading ? ( <span class={style.loader}></span> ) : (  <ion-icon name="arrow-forward-outline"></ion-icon> )} 
                  </button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {showModal && <Overlay closeModal={closeModal} />}
    </>
  )
}