// Pesquisa de Colaborador ou Cliente
import './Search.css';

function Search() {
  return (
    <body>
      <header>
        <div class="container">
          <div class="logo">Logo</div>
        </div>
      </header>
      <div class="container">
        <form action="#">
          <div class="form-control">
            <label for="type-entity">Selecione o Tipo de Entidade:</label>
            <select id="type-entity">
              <option value="colaborador" selected>colaborador</option>
              <option value="cliente" selected>cliente</option>
            </select>
          </div>
          <div>
            <div class="form-control">
              <label for="name-entity-input"> Nome da Entidade: </label>
              <input type="text" id="name-entity-input" required />
            </div>
          </div>
          <div>
            <div class="form-control">
              <label for="ID-input"> ID:</label>
              <input type="text" id="id-input" required />
            </div>
          </div>
          <button class="btn">Buscar</button>
        </form>
      </div>
      <section class="list-colab">
        <div class="container"></div>
      </section>
    </body>
  )
}

export default Search;

