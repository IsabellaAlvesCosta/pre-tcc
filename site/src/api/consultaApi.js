import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarConsulta(nome, cpf, nascimento, agendamento, consuta, telefone) {
    const resposta = await api.post ('/consulta', {
        nome: nome, 
        cpf: cpf,
        nascimento: nascimento,
        agendamento: agendamento,
        consulta: consuta,
        telefone: telefone
    })
    return resposta.data;
}

