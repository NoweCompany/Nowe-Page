import style from "../../../styles/form/overlay.module.css";
import { useEffect } from "react";

export default function Overlay({ closeModal }) {
    useEffect(() => {
        const overlay = document.getElementById("overlay-container");
        if (overlay) {
            overlay.classList.add(style["fade-in"]);
        }
    }, []);

    return (
        <>
            <div id="overlay-container" className={style.container}>
                <div className={style.modal}>
                    <button className={style.closeButton} onClick={closeModal}>
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                    <div className={style.containerTxt}>
                        <h1 className={style.text}>Sua mensagem foi enviada!</h1>
                        <h2 className={style.subtext}>Retornaremos o mais rápido possível, obrigado.</h2>
                    </div>
                </div>
            </div>

            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" ></script>
        </>
    );
}
