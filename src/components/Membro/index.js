import React, {Component} from "react";

class Membro extends Component {

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };
        this.entrar = this.entrar.bind(this);
    }

    render(){
        return(
            <div>
                <h2>Bem-vindo(a) {this.state.nome}</h2>
                <button onClick={this.entrar}>
                    Entrar no sistema
                </button>
                <button onClick={() => this.setState({nome: ''})}>
                    sair
                </button>
            </div>
        );
    }

    entrar(){
        let state = this.state;
        state.nome = "Luciano";
        this.setState(state);
    }

}

export default Membro;