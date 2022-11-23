import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" id = 'root'>
      <div className="header">
        <img className= "logoimg" src="./src/logo-verde-e-preto.png" />
        <a href="#reger"> O projeto</a>
        <a href="#comoFazemos" >Como fazemos?</a>
        <a href = "#ondeEstamos">Onde estamos?</a>
        <a href = "#dicas">Dicas</a>
      </div>

      <div className="reger" id="reger">
        <div className='projeto'>
          <img src="./src/arvore.png"></img>
          <div className='projetoReger'>
          <h1>PROJETO REGER</h1>
          <p className='textoProjeto'>O projeto reger tem como foco a sustentabilidade, estudada desde 1970,  e o principal objetivo é estar implementando a sustentabilidade no campus da unisagrado, através de ações educativas e redução de resíduos e melhor separação deles.
          </p>
          </div>
        </div>
      </div>

      <div className="comoFazemos" id="comoFazemos">
        <h1>O QUE FAZEMOS?</h1>
        <p className='textoComoFazemos'>O projeto Reger atua em ações de fiscalização e orientação do descarte correto de resíduos nos setores da instituição, bem como realiza capacitações com os funcionários e estudantes para relembrar alguns conceitos de sustentabilidade e descarte dos resíduos. </p>
        <p className='textoComoFazemos'>O projeto é dividido em áreas de atuação, capacitação e manutenção, resíduos orgânicos e compostagem, redução do consumo de tonners e papel, quantificação dos resíduos, compras sustentáveis, conscientização, mudanças de paradigmas e também uma atuação no Irmã Adelaide.</p>
      </div>

      <div className="ondeEstamos" id="ondeEstamos">
        <h1>CRESCEMOS</h1>
        <p className='textoOndeEstamos'>Centro Socio Educativo Irmã Adelaide, Colégio São Francisco Bauru, Colé Nossa Senhora Aparecida Araçatuba e estamos também vinculados a Laudato Si Action de Roma.</p>
        <img className="ondeEstamosImg" src="./src/ondeEstamos.png" />
      </div>

      <div className="dicas" id="dicas">
        <h1>COMO ARMAZENAR OS RESÍDUOS
          <br/> ATÉ DESTINÁ-LOS</h1>

          
        <p className='textoDicas'>
        <img className = "imgDicas" src = "./src/reci_site.jpg" />
        RECICLÁVEIS: Acondicionar em sacos plásticos 
        azuis (os mesmos devem estar limpos e secos, sem 
        resíduos de alimentos).
        Obs.: Materiais cortantes (vidro quebrados) ou que 
        representem risco ao coletor, devem ser 
        acondicionados de forma segura.
        <br/>
        <br/>
        REJEITOS: Armazenar em sacos plásticos pretos.
        <br/>
        <br/>
        ORGÂNICOS: Armazenar em saco plástico marrom.
        <br/>
        <br/>
        SAÚDE: Armazenar em sacos plásticos brancos e os perfurocortantes em caixas do tipo Descarpack, encaminhar para um
          dos pontos de coleta especial: biotério ou próximo à clínica de odontologia.
        </p>
        <p className='textoDicas2'>
        QUÍMICOS E PERIGOSOS: Armazenar em frascos 
        identificados e encaminhar para o laboratório de
        Química. No caso de resíduos biológicos perigosos 
        armazenar em saco plástico branco identificado e
        encaminhar para um dos pontos de coleta especial: 
        biotério ou próximo à clínica de odontologia.</p>

        <h2>E OS MATERIAIS ELETROELETRÔNICOS,
          <br/> LÂMPADAS FRIAS E LATAS DE SPRAY VAZIAS?</h2>
          <p className = 'textoDicasPilha'>
          Estes materiais necessitam de descarte especial 
          por conter produtos tóxicos e metais pesados 
          que podem produzir danos à saúde. Estes 
          materiais devem ser encaminhados ao 
          responsável por cada setor, este irá 
          armazená-los e quando necessário solicitar, 
          através do Sistema de Atendimento Técnico 
          (SAT), que a prefeitura do campus retire e 
          encaminhe à empresa responsável pela 
          destinação correta.
          <img className = "imgPilha" src="./src/atende-2.jpg" />
          </p>
          
      </div>

      <footer>
        <h3>Feito pelos alunos de jogos digitais:</h3>        
        <p className = "footer">
          <img className = "imgLogoBranco" src="./src/logo-branco.png" />
          Flávia Marcilio
          <br/>
          Felipe Hidalgo
          <br/>
          Gabriel Pagani
          <br/>
          Guilherme Janoario
          </p>
          <p className = "footer">
          Kaio Yago
          <br/>
          Keila Mayumi
          <br/>
          Kimberly Lima de Oliveira
          <br/>
          Larissa Uehara
          <br/>
          Lucas Piffanelli
          </p>      
        
      </footer>

    </div>
  )
}

export default App
