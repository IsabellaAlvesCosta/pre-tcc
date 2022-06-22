import { useState } from 'react'
import './index.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Index() {
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[erro, setErro] = useState('');

    const navigate = useNavigate();

    async function entrarClick (){
        try{
            const r = await axios.post('http://localhost:5000/funcionario/login',{
                 email:email,
                 senha:senha
                 } );
                  navigate('/');

        }catch(err){
            if(err.response.status==401){
                setErro(err.response.data.erro);
            }
        }
       
    }

    return (
        <main class="page-container">

        <header class="cabeçalho">
            <img src="../../assets/images/Captura de Tela (5).png" alt="" class="doutor"/>
            <h1 class="font2">Psicológia em foco</h1>
           
        </header>        
        <hr/>

        <section class="pagina1">
            <div class="login">
                <h1 class="font">Seja bem-vindo a àrea</h1><h1 class="font">admistrativa</h1>
            
                <div class="adm">   
                    <div class="logins">
                        <p class="bold">EMAIL:</p>
                        <input class="caixa" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div class="logins">
                        <p class="bold">SENHA:</p>
                        <input type= 'password'  placehouder ='***' class="caixa" value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>
                    <br/>
                    <button class="bold " onClick={entrarClick}>CONTINUAR</button>
                    <div>
                        {erro}
                    </div>
                </div>
            </div>
        </section>

    </main>
    )
}
