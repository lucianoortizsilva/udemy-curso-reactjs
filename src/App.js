import React, {useState} from 'react';
import './style.css'

function App(){

  const [tarefas, setTarefas] = useState(['Pagar conta Luz','Estudar isso']);
  const [nome, setNome] = useState('');

  return(
    <div>
      <ul>
        {
          tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))
        }
      </ul>
      <input type={Text} value={nome} onChange={(e)=> setNome(e.target.value)}/>
      <button type='button' onClick={add}>Adicionar</button>
    </div>
  );

  function add(){
    setTarefas([...tarefas, nome])
    setNome('');
  }

}
export default App;
