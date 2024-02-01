import React, { useRef, useState } from 'react';
import Nav from '../pages/components/Nav';
import Footer from './components/Footer';
import Overlay from './components/overlay/OverlayForm';
import AlertTelefone from "./components/overlay/AlertTelefone"
import style from '../styles/form/form.module.css';
import sendEmail from '@/functions/email';
import ReactInputMask from 'react-input-mask';
import { isValidNumber, parsePhoneNumber } from 'libphonenumber-js';

export default function Contato() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [telefone, setTelefone] = useState('');
  const [telefoneValido, setTelefoneValido] = useState(true)

  const handleTelefoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setTelefone(value);
    setTelefoneValido(true)

    setTimeout(() => {
      setTelefoneValido(true)
    }, 2000);
  };

  const handleBlur = () => {
    try {
      const phoneNumber = parsePhoneNumber(`+55${telefone}`);
      if (isValidNumber(phoneNumber)) {
        console.log('Número de telefone válido:', phoneNumber.formatNational());
      } else {
        console.log('Número de telefone inválido');
        setTelefoneValido(false);
      }
    } catch (error) {
      console.error('Erro ao analisar o número de telefone:', error);
      setTelefoneValido(false);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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
    setShowModal(false);
  };

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
                      <ReactInputMask
                        mask="(99) 99999-9999"
                        maskChar="_"
                        value={telefone}
                        onChange={handleTelefoneChange}
                        onBlur={handleBlur}
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
                    <input type="email" className={style.input} placeholder="Email" name="user_email" required />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <textarea className={style.input} rows="5" placeholder="Sua mensagem" name="message" required></textarea>
                  </div>
                </div>
                <div className="text-start">
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
      {telefoneValido === false && <AlertTelefone />}

    </>
  );
}
