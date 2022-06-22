import { useState } from 'react';
import './index.scss';
import { toast} from 'react-toastify';

import  {cadastrarConsulta} from '../../api/consultaApi'



export default function Index() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [agendamento, setAgendamento] = useState('');
    const [consulta, setConsulta] = useState('');
    const [telefone, setTelefone] = useState('');

    async function salvarClick (){
        try{
            const r = await cadastrarConsulta(nome, cpf, nascimento, agendamento, consulta, telefone);

        toast.dark('consulta cadastrada com sucesso');
        }catch (err){
            toast.error(err.response.data.erro);
        }
    }

    return (

        <div>
        <main>
            
            <header class="cabeçalho">
                <img class="imag" src="../assets/images/drEsmerald.png" alt="" />
                <h1 class="font">Psicológia em foco</h1>
                
            </header> 

                <hr class="hr" />

            <h1 class="tam">Agende sua consulta</h1>
        </main>

   
        <div class="bord">        
            <div class="">
                <p class="font3">Nome:</p>
                    <input class="ly" value={nome} onChange={e => setNome(e.target.value)} />
            </div>
        </div>    

        <div class="flex">
            <div>
                <p class="font3">CPF:</p>
                    <input class="inn" value={cpf} onChange={e => setCpf(e.target.value)}/>
            </div>
        
            <div >
                <p class="font3">Data de Nascimento:</p>
                    <input class="inn" value={nascimento} onChange={e => setNascimento(e.target.value)}/>
            </div>
        </div>


        <div class="flex">
            <div>
                <p class="font3">Horário:</p>
                    <input type="time" name="" id="selecione" class="inn" value={agendamento} onChange={e => setAgendamento(e.target.value)}/>
                        <label for="selecione"></label>
                    </div>      

        
        <div class="">
            <p class="font3">Data da Consulta:</p>
                <input type="date" name="" id="selecione" class="time" value={consulta} onChange={e => setConsulta(e.target.value)}/>
                    <label for="selecione"></label>
                </div>    
            </div>
        
        <div class="jug">
            <div>
                <p class="font3">Telefone:</p>
                    <input class="in"  value={telefone} onChange={e => setTelefone(e.target.value)}/>
                </div>    
            </div>
            
               
    
        <br/>
    
                    <div class="botao">
                        <div class="">
                            <a class="ty" href="" onClick={salvarClick}>Agendar</a>
                        </div>    
                    </div>    

                        <br/>
                            <div class="aprovar">  
                                <div> 
                                    <p class="sansita">*Sujeito a aprovação</p>
                                </div>
        </div>
        </div>  
    )
}
