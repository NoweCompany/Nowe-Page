import style from '../../../styles/home/section5.module.css'
export default function Section5(){
    return (
        <>
        
        <h1 className={style.title}> Lorem ipsum.</h1>

        <div className={style.video}>
        <iframe className={style.video} src="https://www.youtube.com/embed/u9wUv4ZTWGU?si=IKsuHtJztwlMSQ33" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        </div>
        </>
    )
}