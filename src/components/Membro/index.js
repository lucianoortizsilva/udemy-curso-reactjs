import React, {Component} from "react";
import Feed from "../Feed";

class Membro extends Component {

    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id: 1, username: 'Luciano', curtidas: 45952, comentarios: 2},
                {id: 2, username: 'Mariana', curtidas: 12522, comentarios: 13},
                {id: 3, username: 'Vanessa', curtidas: 3658, comentarios: 21}
            ]
        };
    }

    render(){
        return(
            <div>
                {
                    this.state.feed.map((item) =>{
                        return(<Feed key={item.id} 
                                     username={item.username} 
                                     curtidas={item.curtidas} 
                                     comentarios={item.comentarios}/>);
                    })
                }
            </div>
        );
    }

}

export default Membro;