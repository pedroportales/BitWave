import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Home() {
    return (
        <div className="home">
            <header className="navbar">
                <h1>BitWave</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#courses">Nossos Cursos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
                <button className="get-started-btn">Começar</button>
            </header>
            <section className="hero-section">
                <h1>Bem-vindo ao BitWave</h1>
                <p>Seu portal para aprendizado e crescimento</p>
            </section>
            <section className="courses-section" id="courses">
                <h2>Nossos Cursos</h2>
                <div className="courses">
                    <div className="course-card">
                        <h3>Desenvolvimento Web</h3>
                        <p>Aprenda a construir aplicações web modernas.</p>
                    </div>
                    <div className="course-card">
                        <h3>Ciência de Dados</h3>
                        <p>Domine análise e visualização de dados.</p>
                    </div>
                    <div className="course-card">
                        <h3>Aprendizado de Máquina</h3>
                        <p>Desbloqueie o poder da IA e do aprendizado de máquina.</p>
                    </div>
                </div>
            </section>
            <footer className="footer" id="contact">
                <p>&copy; 2024 BitWave. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Home;