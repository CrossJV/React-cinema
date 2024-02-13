import Navbar from '../../components/Navbar/Navbar';
import './Header.css';

function Header() {
	return (
		<header className='main-header'>
			<img className='logo-header' src="/public/header_logo.svg" alt="Logo" />
			<Navbar />
		</header>
	);
}

export default Header;