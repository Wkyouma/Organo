import {useState} from 'react'; 
import Campo from '../Campo';
import Lista from '../Lista';
import Botao from '../Botao';
import './Formulario.css';

const Formulario = (props) =>{

  const [nome,setNome] = useState('')
  const [cargo,setCargo] = useState('')
  const [imagem,setImagem] = useState('')
  const [classe, setClasse] = useState('')
  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoAventureiroCadastrado({
        nome,
        cargo,
        imagem,
        classe
    })
    setNome('')
    setCargo('')
    setImagem('')
    setClasse('')
}
 
    return (
      <section className='Formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha para criar o card do Aventureiro</h2>
            <Campo obrigatorio={true} label='Nome' valor={nome} aoAlterado={valor => setNome(valor)}></Campo>
            <Campo obrigatorio={true} label='Cargo' valor={cargo} aoAlterado={valor => setCargo(valor)}></Campo>
            <Campo label='Imagem' valor={imagem} aoAlterado={valor=> setImagem(valor)}></Campo>
            <Lista obrigatorio={true}  label="Classe" itens = {props.classes} valor = {classe} aoAlterado={valor =>setClasse(valor)}></Lista>
            <Botao>Criar</Botao>
        </form>
      </section>
    )
}
export default Formulario