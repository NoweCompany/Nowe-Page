import style from "../../../styles/form/alert.module.css"
export default function Alert({text}){
    return (
        <>
        <div className={style.container}>
            <h1 className={style.maintext}>
                {text}
            </h1>
        </div>

        </>
    )
}