import './index.scss';
import { Link } from 'react-router-dom';

export default function index() {
    return (
    <main class="page-container">

        <header class="cabeçalho">
            
                <h1 class="font2">Psicológia em foco</h1>
            <a  class="botton" href="">Área Admistrativa</a>
        </header>        
            <hr/>
            <br/>
            <br/>
            <br/>
            
                <div class="flex">
                    <a class="button" href="">
                        <Link to= './solicitacoes'>Solicitação de Consultas </Link>
                     </a>
                        <p class="ou">ou</p>
                    <a class="boton "href="">Visualizar Consultas</a>
                </div>

               
                  
    </main>

    )
}

