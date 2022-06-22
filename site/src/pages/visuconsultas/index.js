
import './index.scss';


export default function index() {
    return (

<main>
       <div class="cont01">
                <img class="logo" src="../../assets/img/logo.png"/>
                <h1>Psicológia em foco</h1>
                <a href="" class="button"><p class="B-text">Área Administrativa</p></a>
       </div>
       <hr/>
       <p class="P-text">Consultas</p>
       <div class="tabela-consultas"/>
           <p class="P-text">Consultas marcadas</p>
           <div class="T-cont">
                <div class="T-subcont">
                    <div class="value">
                        <div class="ND">
                            <p class="text">Nome</p>
                            <p class="text">CPF</p>
                        </div>
                        <div class="CH">
                            <p class="text">Horário</p>
                            <p class="text">Data</p>
                        </div>
                    
                    <div class="icons">
                        <img class="icon" src="../../assets/img/editar.png" /> 
                        <img class="icon" src="../../assets/img/excluir.png"/>
                    </div>
                </div>
            </div>
            <div class="T-cont">
                <div class="T-subcont">
                    <div class="value">
                        <div class="ND">
                            <p class="text">Nome</p>
                            <p class="text">CPF</p>
                        </div>
                        <div class="CH">
                            <p class="text">Horário</p>
                            <p class="text">Data</p>
                        </div>
                    </div>
                    <div class="icons">
                        <img class="icon" src="../../assets/img/editar.png" />
                        <img class="icon" src="../../assets/img/excluir.png"/>
                    </div>
                </div>
            </div>
       </div>
        <a href="" class="F-text"><p class="P-text">Voltar p/ Home</p></a>
    </main>

    )
}