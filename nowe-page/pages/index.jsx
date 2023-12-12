import index from "../styles/index.module.css"
import Nav from '../pages/components/Nav'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
<>
  <Nav />


  <div className={index.backgroundContainer}>

  <div className={`d-flex align-items-center justify-content-start min-vh-100`}>
    <div>
      <div className="position-relative">
        <div className={index.contentlogo}>
        <img src="/Icon/white.png" className={index.logo} alt="logo-main" />
     
      <h1 className={index.subtitle}>
        <span className={index.destaque}>Weon</span> a revolução na eficiência dos seus dados.
      </h1>
      <button className={index.buttonconhecamais}> conhecer </button>
    </div>
      </div>
    </div>
  </div>
  
  
  </div>
</>

  )
}
