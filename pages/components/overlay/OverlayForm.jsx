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
                        <h1 className={style.text}>Obrigado pelo contato.</h1>
                        <div className={style.containerIcon}>
                            <ion-icon size="large" name="checkmark-circle-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>

            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" ></script>
        </>
    );
}
