import './header.css';
import escudo from './assets/escudo.png';

function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src={escudo} alt='Logo'></img>
                    <h1>Cuida tu comunidad</h1>
                </div>

                <div className="menu">
                    <a href='/'>Lista de Tareas</a>
                    <a href='/nueva-tarea'>Nueva Tarea</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;