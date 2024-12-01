import Campo from './componentes/Campo';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';

function App() {
  const [Colaborador,setColaborador] = useState([])
  const aoNovoColaboradorAdd = (colaborador) => {
    console.log(colaborador);
    setColaborador([...Colaborador, Colaborador])};
    
  return (
    <div className="App">
    <Banner/>
    <Formulario aoColaboradorCadastrado = {aoNovoColaboradorAdd}/>
    </div>
  );
}

export default App;
