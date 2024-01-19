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
                <img className={style.imgMoyseys} src='/Img/moyseys.jpeg' alt='homem mais lindo da historia' />
                <div className={style.txtHistoria}>
                    <h1 className={style.titleHistoria}> Nossa <span className={style.firstLetter}> Historia</span>  </h1>
                    <h1 className={style.descriptionHistoria}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam minima, accusamus natus deleniti dolorum assumenda, ea architecto dicta repellat atque eum odio soluta quae, ullam accusantium ab error eligendi doloribus.</h1>
                </div>
            </div>

            <div className={style.containerMissao}>
                <h1 className={style.title}> <spam className={style.firstLetter}>M</spam>issão <ion-icon name="documents-outline"></ion-icon> </h1>
                <h1 className={style.description}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ducimus repellat repudiandae. Ea enim alias cum atque voluptates doloremque corporis, labore earum, illo voluptatibus possimus est quis. Laborum, quidem molestias.</h1>
            </div>

            <div className={style.containerVisao}>
                <h1 className={style.title}> <spam className={style.firstLetter}>V</spam>isão <ion-icon className={style.icon} name="eye-outline"></ion-icon> </h1>
                <h1 className={style.description}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ducimus repellat repudiandae. Ea enim alias cum atque voluptates doloremque corporis, labore earum, illo voluptatibus possimus est quis. Laborum, quidem molestias.</h1>
            </div>

            <div className={style.containerValor}>
                <h1 className={style.title}> <spam className={style.firstLetter}>V</spam>alor <ion-icon name="diamond-outline"></ion-icon> </h1>
                <h1 className={style.description}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ducimus repellat repudiandae. Ea enim alias cum atque voluptates doloremque corporis, labore earum, illo voluptatibus possimus est quis. Laborum, quidem molestias.</h1>
            </div>

            <Footer />
            

            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </>
    )
}