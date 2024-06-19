import "./Login.css";

function Login() {
  function handleLogin(e) {
    e.preventDefault() //previne o comportamento padrão
  return(
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="input-group">
            <label>Senha</label>
            <input type="password" required />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
}
export default Login;