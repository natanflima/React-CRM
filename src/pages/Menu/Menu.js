import './Menu.css';
import { Link } from 'react-router-dom';
import Calendario from './Calendario';
import { useState } from 'react';

function Menu() {
  const [pagina, setPagina] = useState ()  //armazena a pagina escolhida
  return (
    <div className="menu">
      <ul>
        <li><Link onClick={() => setPagina("inicio")}> Início</Link></li>
        <li><Link to="/calendario">Calendário</Link></li>
      </ul>
    </div>
  );
};

export default Menu;
