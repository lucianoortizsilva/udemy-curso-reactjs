import React, {Component} from 'react'

class App extends Component{

  //ciclo de vida: 1º chamado
  constructor(props){
    super(props);
    this.state = {
      hora: '00:00:00'
    }
  }
  
  //Depois q monta componente, uma unica vez:
  componentDidMount(){    
    setInterval(() => {
      let state = this.state;
      state.hora= new Date().toLocaleTimeString()
      this.setState(state)
    }, 1000);
  }

  componentDidUpdate(){
    console.log('Atualizou!!!')
  }

  render(){
    return(
      <div>
        <h1>Meu Projeto {this.state.hora}</h1>
      </div>
    );
  }
}

export default App;