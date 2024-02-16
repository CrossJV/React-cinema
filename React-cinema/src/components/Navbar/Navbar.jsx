import styles from './Navbar.module.css';

function Navbar() {
	return (
		<nav className={styles['nav-header']}>
			<a className={styles['nav-header-link']} href="#">Поиск фильмов</a>
			<a className={styles['nav-header-link']} href="#">Мои фильмы</a>
			<a className={styles['nav-header-link']} href="#">Войти<img className='login-icon' src="/public/login_arrow.svg" alt="Login" /></a>
		</nav>
	);
}

export default Navbar;