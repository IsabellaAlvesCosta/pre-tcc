import './index.scss';


export default function index() {
    return (
        <main className='Pagina-home'>
             <div className="rodape">
            <img className='r-img' src="../assets/img/logo" alt=''/>
            <p className='r-title'>Psicológia em foco</p>
            <a href="" className='r-button'><p className='b-text'>Área administrativa</p></a>
        </div>
        <hr className='br'/>

        {/* faixa01*/}

        <div className='f1'>
            <div className='f1-cont'>
                <hr className='f1-top'/>
                        <div className='f1-subcont'>
                            <img className='f1-subcont-img' src="../assets/img/cabeça de pau" alt=''/>
                             <p className='f1-subcont-text'>“Não é transportar o paciente para um impossível estado de felicidade, mas sim ajudá-lo a adquirir firmeza e paciência diante do sofrimento.”</p>
                        </div>
                <hr className="f1-top"/>         
            </div>
                       
        </div>
            <div className='f1-cont2'>
                <div className='f1-subcont2'>
                    <img className='f1-subcont2-img' src="../assets/img/garotinho.png" alt=''/>
                    <div className='f1-subcont2-text'>
                        <p className='subtext1'>“Agradeço muito ao meu psicólogo por todo o trabalho que temos feito, pois tem me ajudado muito. Obrigada pela paciência e pelo comprometimento comigo! Você é demais!” </p>
                        <p className='subtext2'>Estefânia, 26 anos</p>
                    </div>
                </div>
                <a href="" className='f1-button'><p className='f1-b-text'>Agende sua consulta</p></a>
            </div> 

        {/*faixa02 */}

        <div className='f2'>
            <div className='f2-cont1'>
                <h1 className='f2-title'>Objetivo da terapia</h1>
                <p className="f2-text">Fazer terapia pode ser comparado a praticar exercícios físicos ou alimentar-se da forma correta a fim de alcançar o bem-estar físico. Desse modo, a finalidade do acompanhamento com um psicólogo é buscar auxílio para recuperar ou preservar a saúde da mente, isto é, o bem-estar emocional.</p>
            </div>
            <div className="f2-cont2">
                <h1 className="f2-title-1">O que é feito na terapia?</h1>
                <p className="f2-text-1">A psicoterapia, também chamada apenas “terapia”, é uma forma de tratamento que visa aliviar o estresse emocional, identificar as causas dos problemas de saúde mental e auxiliar o paciente a descobrir novas formas de lidar com as questões da vida, tanto boas quanto ruins.</p>
            </div>
            <div className="f2-cont3">
                <h1 className="f2-title">Benefícios da terapia</h1>
                <ul className='f2-text'>
                    <li>*Promove o <br/> autoconhecimento.</li>
                    <li>*Ajuda a encontrar um propósito.</li>
                    <li>*Alivia tensões provenientes de conflitos ou situações ruins.</li>
                    <li>Desenvolve a inteligência emocional.</li>
                    <li>*Melhora os    relacionamentos.</li>
                    <li>*Proporciona aprendizados para a vida toda</li>
                </ul>
            </div>
        </div>

        {/*faixa03*/}

        <div className="faixa03">
            <h1 className="solo-txt02">Conheça um pouco sobre  transtornos psicólogicos mais comuns</h1>
            <div className="cont3">
                <img src="../assets/img/depresao.jpeg"  alt='' className="img-cont3"/>
                <p className="txt-cont3">A depressão é um transtorno comum, mas sério, que interfere na vida diária, capacidade de trabalhar, dormir, estudar, comer e aproveitar a vida. É causada por uma combinação de fatores genéticos, biológicos, ambientais e psicológicos.</p>
            </div>
            <div className="cont3-1">
                <p className="txt-cont3-1">Ansiedade é um sentimento ligado à preocupação, nervosismo e medo intenso. Apesar de ser uma reação natural do corpo, a ansiedade pode virar um distúrbio quando passa a atrapalhar nosso dia a dia. De fato, os transtornos de ansiedade são mais comuns do que se imagina.</p>
                <img src="../assets/img/ansiedade.jpeg"  alt='' className=" img-cont3-1"/>
            </div>
        </div>

        {/*faixa04*/}

        <div className="faixa4">
            <h1 className="solo-txt4">Conheça nosso consultório de atendimento</h1>
            <div className="cont4">
                <img src="../assets/img/sala.jpeg" alt='' className="img-cont4"/>
                <img src="../assets/img/sala-dois.jpeg" alt='' className="img2-cont4"/>
            </div>
            <p className="solo-txt4-1">Localizado na Av. Brigadeiro Faria Lima, 1202</p>
        </div>
        
        {/*faixa05*/}
        <hr className="f5-hr"/>
        <div className="f5">
            <div className="f5-cont1">
                <p className="f5-text1">Contato</p>
                <div className="icon-cont">
                    <img className="icon-img" src="../assets/img/zap.png" alt=''/>
                    <p className="f5-text">+55 (11) 958701044</p>
                </div>
                <div className="icon-cont">
                    <img className="icon-img" src="../assets/img/insta.png" alt=''/>
                    <p className="f5-text">@dr.gabrielesmeraldo</p>
                </div>
                <div className="icon-cont">
                    <img  className="icon-img" src="../assets/img/email.png" alt=''/>
                    <p className="f5-text">+55 (11) 958701044</p>
                </div>
            </div>
            <div className="f5-cont2">
                <p className="f5-text1">Patrocinadores:</p>
                <img className="cont2-img" src="../assets/img/sla" alt=''/>
            </div>
        </div>
        </main>
    )
}