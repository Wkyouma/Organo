import Campo from '../Campo';
import './Formulario.css';

const Formulario = () =>{
    return (
      <section className='Formulario'>
        <form>
            <h2>Preencha para criar o card do colaborador</h2>
            <Campo label='nome'></Campo>
            <Campo label='cargo'></Campo>
            <Campo label='imagem'></Campo>
        </form>
      </section>
    )
}
export default Formulario