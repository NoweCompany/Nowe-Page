import style from '../../../styles/home/weondesc.module.css'
export default function Section3(){

    return (
        <>
        
        <div className={style.borderTelas}>

        <h1 className={style.title}> weon <span className={style.dot}>.</span> </h1>
        <h2 className={style.subtitle}>
        Diante de uma vasta montanha de dados,
        o Weon surge como a inovação essencial
        para cadastrar e organizar informações
        de maneira eficiente e intuitiva. Sua 
        característica marcante é a capacidade
        de criar<span className={style.destaque}> tabelas totalmente customizáveis</span>,
        adaptadas às necessidades individuais,
        proporcionando liberdade na modelagem 
        do espaço de trabalho. Além da facilidade 
        de cadastro e organização, o Weon se destaca 
        pela sua motivação central: extrair informações 
        valiosas para aprimorar decisões. Com um sistema 
        que permite a rápida<span className={style.destaque}> criação de gráficos, indicadores
        e relatórios, atualizados em tempo real, independente
        do tipo de dado cadastrado</span>, a Weon capacita os usuários
        a transformar dados brutos em conhecimento acionável. 
        Ao colocar o usuário no controle e explorar o potencial
        total dos dados, a Weon se torna a ferramenta essencial
        para impulsionar a eficácia das decisões.
        </h2>



        </div>

        </>
    )
}