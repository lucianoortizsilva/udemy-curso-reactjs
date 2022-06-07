import React from 'react'

const Equipe = (props) =>{
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social/>
      <hr/>
    </div>
  )
}

const Sobre = (props) =>{
  return(
    <div>
      <h2>Olá sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h4>Idade: {props.idade} anos</h4>
    </div>
  )
}

const Social = () => {
  return(
      <div>
        <a>Facebook</a>
        <a>LinkedIn</a>
        <a>Youtube</a>
      </div>      
  );
}

function App(){
  return(
    <div>
      <h1>Conheça nossa equipe: </h1>
        <Equipe nome="Luciano Ortiz" cargo="Java Developer" idade="38"/>
        <Equipe nome="Mariana Ortiz" cargo="Estudante" idade="10"/>
    </div>
  );
}

export default App;