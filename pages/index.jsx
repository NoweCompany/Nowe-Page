import index from "../styles/index.module.css"
import Nav from '../pages/components/Nav'
import Page from '../pages/components/home/Section2'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Nav />
      <section id="intro">
        <div className={index.backgroundContainer}>
          <div className="container min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
              <div className="col-md-6">
                <div className={index.contentlogo}>
                  <img src="/Icon/white.png" className={index.logo} alt="logo-main" />

                  <h1 className={index.subtitle}>
                    <span className={index.destaque}>Weon</span> a revolução na eficiência dos seus dados.
                  </h1>

                  <div className={index.containerBtn}>
                    <button className={index.buttonconhecamais}> Conhecer </button>
                    <div className={index.icon}>
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <img src="/Img/cube.png" className={index.cube} alt="cube" />
              </div>
            </div>
          </div>
        </div>
      </section>

     <Page />
    </>
  )
}
