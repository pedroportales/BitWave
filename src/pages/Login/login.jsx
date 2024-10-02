import React from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de que este import está aqui
import './style.css';

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
          <p>Não tem uma conta? <a href='/Cadastro'>Registre-se </a></p>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 BitWave. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}


export default Login;
