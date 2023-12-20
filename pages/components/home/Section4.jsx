import style from '../../../styles/home/section4.module.css';
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';

export default function Card() {
    const tiltRef1 = useRef();
    const tiltRef2 = useRef();
    const tiltRef3 = useRef();
    const tiltRef4 = useRef();

    useEffect(() => {
        const tiltRefs = [tiltRef1.current, tiltRef2.current, tiltRef3.current, tiltRef4.current];

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
            <h1 className={style.title}>Funcionalidades</h1>


            <div className="container mt-4">
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-3">
                        <div ref={tiltRef1} className={`tilt-card ${style.card}`}>
                            <div id={style.cardbody} className="card-body text-center">
                            <div className={style.icon}>
                                <ion-icon name="cube-outline" size="large"></ion-icon>
                                </div>                                <h5 className={style.titleCard}>Título</h5>
                                <hr className={style.lineCard}/>
                                <p className={style.TextCard}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis animi quo, dignissimos quia, magni molestiae explicabo voluptatem hic quos exercitationem pariatur molestias facere est inventore sit eaque? Eligendi, ducimus ad.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div ref={tiltRef2} className={`tilt-card ${style.card}`}>
                            <div id={style.cardbody} className="card-body text-center">
                            <div className={style.icon}>
                                <ion-icon name="cube-outline" size="large"></ion-icon>
                                </div>                                <h5 className={style.titleCard}>Título</h5>
                                <hr className={style.lineCard}/>
                                <p className={style.TextCard}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis animi quo, dignissimos quia, magni molestiae explicabo voluptatem hic quos exercitationem pariatur molestias facere est inventore sit eaque? Eligendi, ducimus ad.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div ref={tiltRef3} className={`tilt-card ${style.card}`}>
                            <div id={style.cardbody} className="card-body text-center">
                                <div className={style.icon}>
                                <ion-icon name="cube-outline" size="large"></ion-icon>
                                </div>
                                <h5 className={style.titleCard}>Título</h5>
                                <hr className={style.lineCard}/>
                                <p className={style.TextCard}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis animi quo, dignissimos quia, magni molestiae explicabo voluptatem hic quos exercitationem pariatur molestias facere est inventore sit eaque? Eligendi, ducimus ad.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div ref={tiltRef4} className={`tilt-card ${style.card}`}>
                            <div id={style.cardbody} className="card-body text-center">
                            <div className={style.icon}>
                                <ion-icon name="cube-outline" size="large"></ion-icon>
                                </div>                                <h5 className={style.titleCard}>Título</h5>
                                <hr className={style.lineCard}/>
                                <p className={style.TextCard}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis animi quo, dignissimos quia, magni molestiae explicabo voluptatem hic quos exercitationem pariatur molestias facere est inventore sit eaque? Eligendi, ducimus ad.</p>
                            </div>
                        </div>
                    </div>
                    {/* Adicione mais cards aqui se necessário */}
                </div>
            </div>
        </>
    );
}
