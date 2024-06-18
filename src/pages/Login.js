
import "./Login.css";

function Login() {
  return(
    <body>
      <div class="login-container">
        <h2>Login</h2>
          <form>
              <label for="username">Usuário</label>
              <input type="text" id="username" name="username" required></input>
              <label for="password">Senha</label>
              <input type="password" id="password" name="password" required></input>
              <input type="submit" value="Entrar"></input>
          </form>
      </div>
    </body>
  )
}

export default Login;