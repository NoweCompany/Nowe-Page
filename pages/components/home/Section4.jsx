import style from '../../../styles/home/section4.module.css'
export default function Card(){
    return (
        <>
        <h1 className={style.title}> Funcionalidades </h1>
        <hr  className={style.linha} />
        
        <div className={style.card}> 
     <div className="container mt-4">
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-3">
                    <div className={style.card}>
                            <div id={style.cardbody} className="card-body text-center">
                                <ion-icon name="example-icon" size="large"></ion-icon>
                                
                                <div className={style.titleCard}>
                                <h5 className="card-title">Título</h5>
                                </div>

                                <div className={style.icon}>
                                <ion-icon name="cube-outline" size="large"></ion-icon>
                                </div>

                                <hr className={style.lineCard}/>

                                <div className={style.descBody}> 
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur
                                 adipisicing elit. Amet eaque voluptatum asperiores nis
                                 i laudantium molestiae cumque delectus corrupti sunt. Q
                                 uam amet architecto dolore tenetur, excepturi dolores. Ex
                                 cepturi non ipsum inventore.</p>
                                 </div>
                            </div>

                        </div>
                    </div>


                    {/* Card 2 */}
                    <div className="col-md-3">
                    <div className={style.card}>
                            <div id={style.cardbody} className="card-body text-center">
                                <ion-icon name="example-icon" size="large"></ion-icon>
                                
                                <div className={style.titleCard}>
                                <h5 className="card-title">Título</h5>
                                </div>

                                <div className={style.icon}>
                                <ion-icon name="cube-outline" size="large"></ion-icon>
                                </div>

                                <hr className={style.lineCard}/>

                                <div className={style.descBody}> 
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur
                                 adipisicing elit. Amet eaque voluptatum asperiores nis
                                 i laudantium molestiae cumque delectus corrupti sunt. Q
                                 uam amet architecto dolore tenetur, excepturi dolores. Ex
                                 cepturi non ipsum inventore.</p>
                                 </div>
                            </div>

                        </div>
                    </div>


                    {/* Card 3 */}
                    <div className="col-md-3">
                    <div className={style.card}>
                            <div id={style.cardbody} className="card-body text-center">
                                <ion-icon name="example-icon" size="large"></ion-icon>
                                
                                <div className={style.titleCard}>
                                <h5 className="card-title">Título</h5>
                                </div>

                                <div className={style.icon}>
                                <ion-icon name="cube-outline" size="large"></ion-icon>
                                </div>

                                <hr className={style.lineCard}/>

                                <div className={style.descBody}> 
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur
                                 adipisicing elit. Amet eaque voluptatum asperiores nis
                                 i laudantium molestiae cumque delectus corrupti sunt. Q
                                 uam amet architecto dolore tenetur, excepturi dolores. Ex
                                 cepturi non ipsum inventore.</p>
                                 </div>
                            </div>

                        </div>
                    </div>



                    {/* Card 4 */}
                    <div className="col-md-3">
                        <div className={style.card}>
                            <div id={style.cardbody} className="card-body text-center">
                                <ion-icon name="example-icon" size="large"></ion-icon>
                                
                                <div className={style.titleCard}>
                                <h5 className="card-title">Título</h5>
                                </div>

                                <div className={style.icon}>
                                <ion-icon name="cube-outline" size="large"></ion-icon>
                                </div>

                                <hr className={style.lineCard}/>

                                <div className={style.descBody}> 
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur
                                 adipisicing elit. Amet eaque voluptatum asperiores nis
                                 i laudantium molestiae cumque delectus corrupti sunt. Q
                                 uam amet architecto dolore tenetur, excepturi dolores. Ex
                                 cepturi non ipsum inventore.</p>
                                 </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>

        </>
    )
}