import React, { useState } from 'react';
import './style.css';

function Cadastro() {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleCheckboxChange = (e) => {
    setAcceptTerms(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert('Por favor, aceite os termos antes de se cadastrar.');
      return;
    }

    console.log('Cadastro realizado com sucesso!');
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1>BitWave</h1>
      </nav>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Cadastro de Usuário</h1>
          <input name="Nome" type="text" placeholder="Nome" required />
          <input name="Email" type="email" placeholder="Email" required />
          <input name="Senha" type="password" placeholder="Senha" required />

          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={acceptTerms}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="terms">
              Ao se inscrever, você concorda com nossos <a href="#">Termos de Uso</a> e com a <a href="#">Política de Privacidade</a>.
            </label>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
      <footer className="footer">
        <p>© 2024 BitWave. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Cadastro;
