import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';
import style from '../../../styles/sobre/section1.module.css'
export default function CardSobre() {

    const tiltRef1 = useRef();
    const tiltRef2 = useRef();

    useEffect(() => {
        const tiltRefs = [tiltRef1.current, tiltRef2.current];

        tiltRefs.forEach(tiltRef => {
            if (tiltRef) {
                VanillaTilt.init(tiltRef, {
                    max: 8,
                    speed: 200,
                    glare: true,
                    'max-glare': 0.2,
                });
            }
        });

        return () => {
            tiltRefs.forEach(tiltRef => {
                if (tiltRef && tiltRef.vanillaTilt) {
                    tiltRef.vanillaTilt.destroy();
                }
            });
        };
    }, []);


    return (
        <>
            <section className={style.cards}>
                <div className={style.spacecard}>
                    <div className="container py-4">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div ref={tiltRef1} className={`tilt-card`}>
                                    <div className={style.card}>
                                        <div className={style.cardBody}>
                                            <h5 className={style.cardTitle}>nowe</h5>
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
                                <img src="/Img/cristal.png" alt="Descrição da Imagem" className={`${style.cristal} img-fluid`} />
                            </div>
                            <div className="col-lg-6">
                                <div ref={tiltRef2} className={`tilt-card`}>
                                    <div className={style.card}>
                                        <div className={style.cardBody}>
                                            <h5 className={style.cardTitle}>atualização</h5>
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
                </div>
            </section>

            <div className={style.backgroundsection} />

        </>
    )
}