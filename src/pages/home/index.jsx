import './style.css';

function Home() {
  return (
    <>
      <nav className="navbar">
        <h1>BitWave</h1>
      </nav>
      <div className="container">
        <form>
          <h1>Cadastro de Usuário</h1>
          <input name="Nome" type="text" placeholder="Nome" />
          <input name="Email" type="email" placeholder="Email" />
          <input name="Senha" type="password" placeholder="Senha" />
          <button type="button">Cadastrar</button>
        </form>
      </div>
      <footer className="footer">
        <p>© 2024 BitWave. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default Home;
