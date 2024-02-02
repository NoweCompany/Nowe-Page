import React, { useRef, useState } from 'react'
import Nav from '../pages/components/Nav'
import Footer from './components/Footer'
import Overlay from './components/overlay/OverlayForm'
import Alert from "./components/overlay/Alert"
import style from '../styles/form/form.module.css'
import sendEmail from '@/functions/email'
import ReactInputMask from 'react-input-mask'
import validator from 'validator'

export default function Contato() {
  const form = useRef()
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [telefone, setTelefone] = useState('')
  const [telefoneValido, setTelefoneValido] = useState(false)
  const [telefoneBlurred, setTelefoneBlurred] = useState(false)
  const [email, setEmail] = useState('')
  const [emailValido, setEmailValido] = useState(false)
  const [emailBlurred, setEmailBlurred] = useState(false)
  const [erroFormulario, setErroFormulario] = useState('')

  const handleTelefoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '')
    setTelefone(value)

    if (value.length === 9) {
      setTelefoneValido(true)
    } else {
      setTelefoneValido(false)
    }
  }

  const handleBlurTelefone = () => {
    try {
      const telefoneString = String(telefone || '').trim()
      if (telefoneString && telefoneString.length < 11) {
        console.log('Número de telefone inválido')
        setTelefoneValido(false)
        setTelefoneBlurred(true)
      } else {
        console.log('Número de telefone válido')
        setTelefoneValido(true)
        setTelefoneBlurred(true)
        setErroFormulario('') 
      }
    } catch (error) {
      console.error('Erro ao processar:', error)
      setTelefoneValido(false)
      setTelefoneBlurred(true)
      setErroFormulario('Corrija os campos antes de enviar.') 
    }
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)

    setEmailValido(validator.isEmail(value))
  }

  const handleBlurEmail = () => {
    try {
      const emailString = String(email || '').trim()
      if (emailString && !validator.isEmail(emailString)) {
        console.log('E-mail inválido')
        setEmailValido(false)
        setEmailBlurred(true)
        setTelefoneBlurred(false) 
      } else {
        console.log('E-mail válido')
        setEmailValido(true)
        setEmailBlurred(true)
      }
    } catch (error) {
      console.error('Erro ao processar:', error)
      setEmailValido(false)
      setEmailBlurred(true)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (!telefoneValido || !emailValido) {
        return;
      }
  
      setLoading(true);
      const formData = new FormData(form.current);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
    
      await sendEmail(data);
      setShowModal(true);
    } catch (error) {
      console.error('Erro ao processar formulário:', error);
    } finally {
      setLoading(false);
  
    }
  };

  const closeModal = () => {
    setShowModal(false)
    window.location.reload()
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
                    <input type="text" className={`${style.input} ${telefoneBlurred && !telefoneValido ? style.inputError : ''}`} placeholder="Nome" name="user_name" required />
                  </div>
                  <div className="col-md-6">
                    <div className={`${style.margin} ${telefoneBlurred && !telefoneValido}`}>
                      <ReactInputMask
                        mask="(99) 99999-9999"
                        maskChar="_"
                        value={telefone}
                        onChange={handleTelefoneChange}
                        onBlur={handleBlurTelefone}
                      >
                        {(inputProps) => (
                          <input
                            type="tel"
                            className={style.input}
                            placeholder="Telefone"
                            name="telefone"
                            required
                            {...inputProps}
                          />
                        )}
                     </ReactInputMask>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                  <input type="email" className={`${style.input} ${emailBlurred && !emailValido}`} placeholder="Email" name="user_email" onChange={handleEmailChange} onBlur={handleBlurEmail} required />                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <textarea className={style.input} rows="5" placeholder="Sua mensagem" name="message"></textarea>
                  </div>
                </div>
                <div className="text-start">
                  {erroFormulario && <Alert text={erroFormulario} />}
                  <button value="Send" type="submit" className={style.button} disabled={loading}>
                    Enviar {loading ? <span className={style.loader}></span> : <ion-icon name="arrow-forward-outline"></ion-icon>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {showModal && <Overlay closeModal={closeModal} />}
      {erroFormulario && !telefoneValido && !emailValido && <Alert text={erroFormulario} />}
      {!erroFormulario && !telefoneValido && telefoneBlurred && <Alert text="Número de telefone inválido" />}
      {!erroFormulario && !emailValido && emailBlurred && <Alert text="E-mail inválido" />}
    </>
  )
}
