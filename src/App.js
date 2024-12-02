import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Classe from './componentes/Classe';
import './App.css';
import { useState } from 'react';

function App() {
  const classes = [
    { nome: 'Bardo', corPrimaria: '#57C278', corSecundaria: '#09F7E9' },
    { nome: 'Mago', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF' },
    { nome: 'Necromante', corPrimaria: '#A60D15', corSecundaria: '#FDE7E8' },
    { nome: 'Ladino', corPrimaria: '#FFD700', corSecundaria: '#FFF8DC' },
    { nome: 'Guerreiro', corPrimaria: '#8B0000', corSecundaria: '#FA8072' },
    { nome: 'Druida', corPrimaria: '#228B22', corSecundaria: '#90EE90' },
  ];

  const [aventureiros, setAventureiros] = useState([]);

  const aoNovoAventureiroAdd = (aventureiro) => {
    console.log(aventureiro);
    setAventureiros([...aventureiros, aventureiro]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario classes={classes.map(classe => classe.nome)} aoAventureiroCadastrado={aventureiro => aoNovoAventureiroAdd(aventureiro)}/>

      {classes.map((classe) => 
        <Classe
          key={classe.nome}
          nome={classe.nome}
          corPrimaria={classe.corPrimaria}
          corSecundaria={classe.corSecundaria}
          aventureiros={aventureiros.filter(aventureiro => aventureiro.classe === classe.nome)}
        />
      )}
        
    </div>
  );
}

export default App;
