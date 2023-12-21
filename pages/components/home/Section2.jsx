import style from '../../../styles/home/homeSectionUm.module.css'
export default function Page(){
    return (
        <>
        <section id="telas">
      {/* <div className={style.borderTelas}> */}
      <div className="container my-4">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <img className={style.telas} src="/video/pages.gif" alt="Vídeo demonstrativo" />
        </div>

        <div className="col-lg-6">
          <div className={style.descricao}> 
          <h1 className={style.um}> Personalização </h1>
            <h1 className={style.dois} >Facilidade</h1>
            <h1 className={style.tres} >Inteligência</h1>
            <h1 className={style.quatro} >Inovação</h1>
          </div>
        </div>
      </div>
    </div>
  {/* </div> */}
      </section>
        
        </>
    )
}