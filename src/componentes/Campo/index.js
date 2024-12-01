import { useState } from 'react';
import './Campo.css';

const Campo = (props) => {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="Campo">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={`Digite o seu ${props.label}`}
      />
    </div>
  );
};

export default Campo;
