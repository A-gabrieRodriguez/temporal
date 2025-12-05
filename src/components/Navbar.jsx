import Logo from '../assets/logo_navbar.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="relative">
            <nav className="absolute top-0 left-0 w-full flex items-center justify-left px-8 py-4 z-20">
                <div className="flex items-center space-x-4">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-35 w-auto transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_1px_#f59e0b]"
                    />
                </div>

                <ul className="flex space-x-8 ml-20 text-3xl">
                    <li>
                        <Link to="/" className="text-white font-extrabold hover:text-amber-300 transition">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/productos" className="text-white font-extrabold hover:text-amber-300 transition">Productos</Link>
                    </li>
                    <li>
                        <Link to="/nosotros" className="text-white font-extrabold hover:text-amber-300 transition">Nosotros</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
