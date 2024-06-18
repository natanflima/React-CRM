import "./RegisterClient.css";

function RegisterClient() {
  return (

    <body>
      <div class="container">
        <form class="form">
          <h1>Cadastro de Cliente</h1>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required></input>

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required></input>

          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" required></input>

          <label for="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" required></input>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </body>
  )
}

export default RegisterClient;