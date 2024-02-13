import './Navbar.css';

function Navbar() {
	return (
		<nav className='nav-header'>
			<a className='nav-header-link' href="#">Поиск фильмов</a>
			<a className='nav-header-link' href="#">Мои фильмы</a>
			<a className='nav-header-link' href="#">Войти<img className='login-icon' src="/public/login_arrow.svg" alt="Login" /></a>
		</nav>
	);
}

export default Navbar;