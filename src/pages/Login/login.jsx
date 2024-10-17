import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Login() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className='row mt-2'>
          <h1>BitWave</h1>
        </div>
      </nav>
      <div className="container">
        <form>
          <h1>Login</h1>
          <input name="Email" type="email" placeholder="Email" />
          <input name="Senha" type="password" placeholder="Senha" />
          <button type="button">Logar</button>
        </form>

        <div className="signup-link">
          <p>Não tem uma conta? <Link to='/Cadastro'>Registre-se</Link></p>
        </div>
      </div>
      <br />
      <footer className="footer">
        <div className='row mt-3'>
          <p>© 2024 BitWave. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;
