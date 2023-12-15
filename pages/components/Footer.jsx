import style from '../../styles/global/footer.module.css'
export default function footer(){
    return (
        <>

<footer className={style.footer}>
      <div className="container">
        <div className="row">
          {/* Logotipo, imagem e descrição */}
          <div className="col-md-3 footer-column d-flex flex-column align-items-center">
            <h5 className={style.nowe}>nowe<span className={style.dot}>.</span></h5>
            <img className={style.cube} src="/img/cube.png" alt="Cube" />
          </div>

          {/* Links de redes sociais */}
          <div className="col-md-4 footer-column">
            <h5 className={style.title}>Redes Sociais</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.instagram.com/nowecompany/" className={style.rede}>Instagram</a></li>
              <li><a href="https://github.com/nowecompany" className={style.rede}>GitHub</a></li>
            </ul>
          </div>

          {/* Informações de contato */}
          <div className="col-md-4 footer-column">
            <h5 className={style.title}>Contato</h5>
            <ul className="list-unstyled">
              <li>Telefone:</li>
              <li>(19) 995070591</li>
              <hr className='w-50' />
              <li>Email: </li>
              <li>nowecompany.com.br</li>
            </ul>
          </div>

          {/* Frase de efeito */}
          <div className="col-md-1 footer-column">
            <h5 className={style.frase}>the future is nowe.</h5>
          </div> 

        </div>
      </div>
    </footer>
        </>
    )
}