import React, {Component} from "react";

class Membro extends Component {

    constructor(props){
        super(props);
        this.state = {
            status: false
        };
    }

    render(){
        return(
            <div>
                {
                    this.state.status ?
                    <div>
                        <h1>Bem-vindo ao sistema!</h1>
                        <button onClick={() => this.setState({status : false})}>Sair</button>
                    </div> :
                    <div>
                        <h2>Olá visitante, faça o login!</h2>
                        <button onClick={() => this.setState({status : true})}>Entrar no sistema</button>
                    </div>
                }
            </div>
        );
    }

}

export default Membro;