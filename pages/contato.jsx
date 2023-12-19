import Nav from '../pages/components/Nav'
import Footer from './components/Footer'
import style from '../styles/form/form.module.css'
export default function contato(){
   return (
    <>
    <Nav />
    <div className={style.background}>
    <div className={style.containerSegundo}> 
    <div className={style.formContainer}>

      <div className="container">
        <h2 className={style.title}>Entre em contato conosco.</h2>
        <form id='form' action="https://formspree.io/f/mkndwbwb" method="POST">  
          <div className="row mb-3">
            <div className="col-md-6">
              <input type="text" className={style.input} placeholder="Nome" name="nome"  required />
            </div>
            <div className="col-md-6">
                <div className={style.margin}>
              <input type="number" className={style.input} placeholder="Telefone" name="telefone" required />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input type="email" className={style.input} placeholder="Email" name="email" required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <textarea className={style.input} rows="5" placeholder="Sua mensagem" name="mensagem" required></textarea>
            </div>
          </div>
          <div className="text-start">
            <button type="submit" className={style.button}>Enviar <ion-icon name="arrow-forward-outline"></ion-icon> </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
    <Footer />
    </>
    )
}