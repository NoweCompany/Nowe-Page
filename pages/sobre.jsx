import Nav from '../pages/components/Nav'
import Footer from './components/Footer'
import style from '../styles/sobre/sobre.module.css'
export default function contato() {
    return (
        <>
            <Nav />
            {/* section1 */}
            <div className={style.backgroundContainer}>
                <div className="container min-vh-100 d-flex align-items-center justify-content-start">
                    <div className="row w-100">

                        <h1 className={style.Maintitle}>
                            Conheça mais sobre
                        </h1>

                        <h1 className={style.Mainsubtitle}>
                            nowe<span className={style.dot}>.</span>
                        </h1>
                    </div>
                </div>
            </div>


            <div className={style.containerHistoria}>
                <div className={style.txtHistoria}>
                    <h1 className={style.titleHistoria}> NOWE <span className={style.firstLetter}> COMPANY </span>  </h1>
                    <h1 className={style.descriptionHistoria}> A Nowe é uma empresa dedicada à produção de softwares especializados que facilitam processos logísticos. Nosso foco está em destacar a personalização para atender primordialmente às suas necessidades, colocando-o no controle total e capacitando-o a explorar todo o potencial dos seus dados.</h1>
                </div>
                <img className={style.noweIcon} src='/Img/blackIco.png' alt='homem mais lindo da historia' />
            </div>

            <div className={style.containerHistoria}>
                <img className={style.imgMoyseys} src='/Img/moyseys.jpeg' alt='homem mais lindo da historia' />
                <div className={style.txtHistoria}>
                    <h1 className={style.titleHistoria}> <span className={style.firstLetter}> ORIGEM </span>  </h1>
                    <h1 className={style.descriptionHistoria}> No ano de 2023, um grupo de seis estudantes do ensino médio embarcou na jornada do TCC. Identificamos um cliente, compreendemos rapidamente suas necessidades e percebemos que essa questão era uma dificuldade comum em diversas empresas. Após uma breve pesquisa entre funcionários e empresários conhecidos, ficamos surpresos! Com nossa ambição e autoconfiança, conquistamos o coração de professores, alunos e quase toda a escola. Vendemos mais de 20 camisetas com nossa marca, sem contar os adesivos espalhados por toda a escola.</h1>
                </div>
            </div>

            <div className={style.containerMissao}>
                <h1 className={style.title}> <spam className={style.firstLetter}>M</spam>issão  </h1>
                <h1 className={style.description}> Oferecemos um sistema abrangente, proporcionando a todos os tipos de clientes a capacidade de organizar e extrair informações valiosas de seus dados. Nosso propósito é impulsionar tomadas de decisões rápidas e eficientes para empresas e indivíduos, promovendo o sucesso e a inovação.</h1>
            </div>

            <div className={style.containerVisao}>
                <h1 className={style.title}> <spam className={style.firstLetter}>V</spam>isão  </h1>
                <h1 className={style.description}> Visualizamos um futuro onde nosso sistema atende a diversidade de clientes de maneira eficiente, desde os mais modestos até os mais complexos, mantendo a simplicidade e a essência da inovação e praticidade.</h1>
            </div>

            <div className={style.containerValor}>
                <h1 className={style.title}> <spam className={style.firstLetter}>V</spam>alor </h1>
                <ul className={style.descriptionValor}>
                    <li><span className={style.firstLetter}>Respeito </span> Máximo ao Próximo;</li>
                    <li><span className={style.firstLetter}>Inovação </span> e Simplicidade na Essência;</li>
                    <li><span className={style.firstLetter}>Honestidade </span> em Tudo que Fazemos;</li>
                    <li><span className={style.firstLetter}>Atualização </span> Tecnológica Constante;</li>
                    <li><span className={style.firstLetter}>Personalização </span> extrema.</li>
                </ul>

            </div>



            <div className={style.containerMetodologia}>
                <h1 className={style.beforeTitle}> METOLOGIA</h1>
                <h1 className={style.titleMetodologia}>SCRUM</h1>

                <h1 className={style.descriptionMetodologia}>
                    Adicionar uma descrição com o seguinte texto “Utilizamos a metodologia Scrum em nossos projetos, uma abordagem ágil que se baseia em ciclos iterativos, conhecidos como sprints. A equipe autogerenciável colabora para entregar incrementos de funcionalidades prioritárias durante esses períodos definidos. Reuniões diárias, planejamento de sprint, revisão e retrospectiva são partes essenciais do processo, proporcionando flexibilidade e adaptabilidade contínuas para atender às necessidades do projeto.
                </h1>
            </div>




            <Footer />


            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </>
    )
}