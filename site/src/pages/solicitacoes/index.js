import { Link } from "react-router-dom";


export default function index() {
    return (

<main class="page-container">
        <header class="cabeçalho">
            <img src="../../assets/images/Captura de Tela (5).png" alt="" class="doutor" />
            <h1>Psicológia em foco</h1>
            <a href="">Área Admistrativa</a>
        </header>        
        <hr/>

        <section class="pagina">
            <h1 class="titulo">Solicitação de consultas</h1>
            <div class="solicitadas">
                <div class="solicitada">
                    <div class="paciente">
                        <p class="nome">Lorenzo Alves</p>
                        <p class="data">05/05/22</p>
                        <p class="hora">16h</p>
                    </div>
                    <div class="confirmar">
                        <a href="">Confirmar</a>
                        <a href="">Entrar em contato</a>
                    </div>
                </div>
                <div class="solicitada">
                    <div class="paciente">
                        <p class="nome">Dominick Costa</p>
                        <p class="data">05/05/22</p>
                        <p class="hora">11h</p>
                    </div>
                    <div class="confirmar">
                        <a href="">Confirmar</a>
                        <a href="">Entrar em contato</a>
                    </div>
                </div>
            </div>
            <a href="" class="voltar">
                <Link to= '/home'> Voltar p/Home</Link>
                </a>
                
        </section>
    </main>
    )
}