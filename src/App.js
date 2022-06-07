import React, {Component} from 'react'

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      email: 'luciano.ortiz@neogrid',
      senha: '123456',
      sexo: 'Masculino'
    }
    this.trocarEmail = this.trocarEmail.bind(this);
    this.trocaSexo = this.trocaSexo.bind(this);
  }

  trocarEmail(event){
    let valorDigitado = event.target.value
    this.setState({email: valorDigitado})
  }

  trocaSexo(event){
    let sexoDigitado = event.target.value
    this.setState({sexo: sexoDigitado})
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
        Email:
        <input type="email" 
               name="email" 
               value={this.state.email} 
               onChange={this.trocarEmail}/><br/>
        Senha:        
        <input type="password" 
               name="senha" 
               value={this.state.senha}
               onChange={(event)=> this.setState({senha: event.target.value})}/><br/>

       Sexo:
       <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
         <option value="Masculino">Masculino</option>
         <option value="Feminino">Feminino</option>
       </select>
      
      <br/>
        <h3>Sexo selecionado:</h3>
        <span>{this.state.sexo}</span>
      </div>
    );
  }
}

export default App;