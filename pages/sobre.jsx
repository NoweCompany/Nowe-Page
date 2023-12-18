import Nav from '../pages/components/Nav'
import Footer from './components/Footer'
import style from '../styles/sobre/section1.module.css'
export default function contato() {
    return (
        <>
            <Nav />
            {/* section1 */}
            <div className={style.backgroundContainer}>
                <div className="container min-vh-100 d-flex align-items-center justify-content-start">
                    <div className="row w-100">

                        <h1 className={style.title}>
                            Conheça mais sobre
                        </h1>

                        <h1 className={style.subtitle}>
                            nowe<span className={style.dot}>.</span>
                        </h1>
                    </div>
                </div>
            </div>

            {/* card */}

        <section className={style.cards}> 
        <div className={style.spacecard}> 
        <div className="container py-4">
        <div className="row align-items-center">
        <div className="col-lg-6">
          <div className={style.card}>
            <div className={style.cardBody}>
              <h5 className={style.cardTitle}>nowe</h5>
              <hr className={style.line}/>
              <p className={style.cardText}>
              Somos uma empresa dedicada a fornecer 
              soluções abrangentes para otimizar o 
              processo logístico em diversos setores 
              do mercado. Nossa missão é ser um parceiro 
              confiável, oferecendo suporte e expertise em
              todas as etapas do caminho. Nossos valores
              fundamentais são a proatividade, a eficiência
              e o compromisso com a excelência. 
                 </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img src="/Img/cube.png" alt="Descrição da Imagem" className="img-fluid" />
        </div>
      </div>
    </div>
    </div>

    <div className={style.spacecard}> 
    <div className="container py-4">
        <div className="row align-items-center">
        <div className="col-lg-6">
          <img src="/Img/cristal.png" alt="Descrição da Imagem" className={`${style.cristal} img-fluid`}/>
        </div>
        <div className="col-lg-6">
        <div className={style.card}>
            <div className={style.cardBody}>
              <h5 className={style.cardTitle}>atualização</h5>
              <hr className={style.line}/>
              <p className={style.cardText}>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Vitae et, velit est quo
              odit ratione adipisci illum consequuntur
              doloremque. Magnam consectetur veniam expedita
              itaque nostrum quae possimus soluta numquam alias.
                 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</section>

    <div className={style.backgroundsection} />
            <Footer />
        </>
    )
}