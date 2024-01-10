import style from "../../../styles/home/card.module.css";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

export default function Card() {
  const tiltRef1 = useRef();
  const tiltRef2 = useRef();
  const tiltRef3 = useRef();
  const tiltRef4 = useRef();

  useEffect(() => {
    const tiltRefs = [
      tiltRef1.current,
      tiltRef2.current,
      tiltRef3.current,
      tiltRef4.current,
    ];

    tiltRefs.forEach((tiltRef) => {
      if (tiltRef) {
        VanillaTilt.init(tiltRef, {
          max: 8,
          speed: 200,
          glare: true,
          "max-glare": 0.2,
        });
      }
    });

    return () => {
      tiltRefs.forEach((tiltRef) => {
        if (tiltRef && tiltRef.vanillaTilt) {
          tiltRef.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <>
      <div className={style.containerMain}>
        <div className={style.containerText}>
          <h2 className={style.subtitleWeon}> CONHEÇA MAIS</h2>
          <h1 className={style.title}>Funcionalidades</h1>
        </div>

        <div className="container mt-4">
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-3">
              <div ref={tiltRef1} className={`tilt-card ${style.card}`}>
                <div id={style.cardbody} className="card-body text-center">
                  <div className={style.icon}>
                    <ion-icon name="cube-outline" size="large"></ion-icon>
                  </div>{" "}
                  <h5 className={style.titleCard}>Central de Dados</h5>
                  <p className={style.TextCard}>
                  Aqui, você pode cadastrar uma ampla variedade de informações, desde as mais simples até as mais complexas! Além disso, oferecemos a facilidade de importar e exportar dados via Excel e/ou JSON.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div ref={tiltRef2} className={`tilt-card ${style.card}`}>
                <div id={style.cardbody} className="card-body text-center">
                  <div className={style.icon}>
                    <ion-icon name="cube-outline" size="large"></ion-icon>
                  </div>{" "}
                  <h5 className={style.titleCard}>Visualização Dinâmica</h5>
                  <p className={style.TextCard}>
                  Crie dashboards incríveis com gráficos e indicadores ilimitados, todos baseados nos dados cadastrados em seu sistema. Essa funcionalidade proporciona uma visão mais clara e objetiva.                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div ref={tiltRef3} className={`tilt-card ${style.card}`}>
                <div id={style.cardbody} className="card-body text-center">
                  <div className={style.icon}>
                    <ion-icon name="cube-outline" size="large"></ion-icon>
                  </div>
                  <h5 className={style.titleCard}>Gerenciamento de Usuários</h5>
                  <p className={style.TextCard}>
                  Adicione novos membros à equipe! Cada usuário pode ter diferentes combinações de permissões. Você tem o controle total para administrar permissões, e-mails e senhas.                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div ref={tiltRef4} className={`tilt-card ${style.card}`}>
                <div id={style.cardbody} className="card-body text-center">
                  <div className={style.icon}>
                    <ion-icon name="cube-outline" size="large"></ion-icon>
                  </div>{" "}
                  <h5 className={style.titleCard}>Registro e Histórico</h5>
                  <p className={style.TextCard}>
                  Mantenha-se informado sobre todas as atividades no sistema por meio do histórico. Esteja ciente de suas ações e das ações dos usuários. Na lixeira, você pode restaurar ou excluir permanentemente o que foi removido do sistema.                  </p>
                </div>
              </div>
            </div>
            {/* add mais cards apartir daqui */}
          </div>
        </div>
      </div>
    </>
  );
}
