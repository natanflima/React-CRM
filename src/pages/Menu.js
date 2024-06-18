import './Menu.css';
import HomePage from './HomePage';

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li><HomePage to="/">Início</HomePage></li>
        {/* <li><Link to="/financial">Financeiro</Link></li>
        <li><Link to="/reports">Relatórios</Link></li>
        <li><Link to="/contacts">Contatos</Link></li>
        <li><Link to="/companies">Empresas</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/sales">Vendas</Link></li>
        <li><Link to="/tasks">Tarefas</Link></li>
        <li><Link to="/purchases">Compras</Link></li>
        <li><Link to="/settings">Configurações</Link></li> */}
      </ul>
    </div>
  );
};

export default Menu;
