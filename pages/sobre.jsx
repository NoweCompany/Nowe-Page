import Nav from '../pages/components/Nav'
import Footer from './components/Footer'
import SobreCard from './components/sobre/SobreCards'
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
            <SobreCard/>

            <Footer />
        </>
    )
}