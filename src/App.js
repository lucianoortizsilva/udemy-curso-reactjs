import React, {Component} from 'react'

class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome}
               cargo={this.props.cargo}
               idade={this.props.idade}/>
        <Social/>
      </div>
    );
  }
}

const Social = ()=>{
  return(
    <div>
      <a>Facebook</a>
      <a>Instagram</a>
    </div>
  );
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Olá sou o {this.props.nome}</h2>
        <h2>Cargo: {this.props.cargo}</h2>
        <h2>Idade: {this.props.idade}</h2>
      </div>
    );
  }
}

function App(){
  return(
    <div>
      <h1>Conheça nossa equipe: </h1>
        <Equipe nome="Luciano" cargo="Java Developer" idade="38"/>
    </div>
  );
}

export default App;