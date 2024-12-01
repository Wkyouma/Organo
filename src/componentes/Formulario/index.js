import {useState} from 'react'; 
import Campo from '../Campo';
import Lista from '../Lista';
import Botao from '../Botao';
import './Formulario.css';

const times = ['','Programação', 'front-end', 'back-end', 'dev-ops']


const Formulario = (props) =>{

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      Nome,Cargo,Imagem,Time
    })
    alert('salvou')
  }
  const [Nome,setNome] = useState('')
  const [Cargo,setCargo] = useState('')
  const [Imagem,setImagem] = useState('')
  const [Time, setTime] = useState('')
    return (
      <section className='Formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha para criar o card do colaborador</h2>
            <Campo obrigatorio={true} label='Nome' valor={Nome} aoAlterado={valor => setNome(valor)}></Campo>
            <Campo obrigatorio={true} label='Cargo' valor={Cargo} aoAlterado={valor => setCargo(valor)}></Campo>
            <Campo label='Imagem' valor={Imagem} aoAlterado={valor=> setImagem(valor)}></Campo>
            <Lista obrigatorio={true}  label='Time' itens = {times} valor = {Time} aoAlterado={valor =>setTime(valor)}></Lista>
            <Botao>Criar</Botao>
        </form>
      </section>
    )
}
export default Formulario