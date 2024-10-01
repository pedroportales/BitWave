import './style.css';
import { Link } from 'react-router-dom'; 

function Login() {
  return (
    <>
      <nav className="navbar">
        <h1>BitWave</h1>
      </nav>
      <div className="container">
        <form>
          <h1>Login</h1>
          <input name="Email" type="email" placeholder="Email" />
          <input name="Senha" type="password" placeholder="Senha" />
          <button type="button">Logar</button>
        </form>
        <div className="signup-link">
          <p>Não tem uma conta?</p>
          <Link to="/cadastro">
            <img src="/src/assets/react.svg" alt="Ir para Cadastro" />
          </Link>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 BitWave. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default Login;
