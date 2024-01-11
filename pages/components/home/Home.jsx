import index from '../../../styles/home/home.module.css'
export default function Section1(){
    return (
        <>
        <section id="intro">
        <div className={index.backgroundContainer}>
          <div className="container min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-90">
              <div className="col-md-6 d-flex align-items-center">
                 <div className={index.contentlogo}>
                  <img src="/Icon/white.png" className={index.logo} alt="logo-main" />
                   <h1 className={index.subtitle}>
                    <span className={index.destaque}>Weon</span> a revolução na eficiência dos seus dados. </h1> 
                    <a href='#scroll' className={index.buttonconhecamais}> Conhecer </a>
                 </div> 
             </div> 

              <div className="col-md-6">
                <img src="/Img/cube.png" className={index.cube} alt="cube" />
              </div>
            </div>
          </div>
        </div>
      </section>
        
        </>
    )
}