import style from '../../../styles/home/video.module.css'
export default function Section5(){
    return (
        <>
        
        <div className={style.containerText}>
        <h1 className={style.beforetitle}> VIDEO </h1>
        <h1 className={style.title}> Confira na prática!</h1>
        </div>

        <div className={style.video}>
        <iframe className={style.video} src="https://www.youtube.com/embed/u9wUv4ZTWGU?si=IKsuHtJztwlMSQ33" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        </div>
        </>
    )
}