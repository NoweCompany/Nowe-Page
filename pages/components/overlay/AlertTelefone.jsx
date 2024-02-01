import style from "../../../styles/form/alert.module.css"
export default function TelefoneInvalidoAlerta(){
    return (
        <>
        <div className={style.container}>
            <h1 className={style.maintext}>
                Número de telefone invalido! 
            </h1>
        </div>

        </>
    )
}