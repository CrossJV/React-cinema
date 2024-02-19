import Authorization from '../AuthNav/AuthNav';
import styles from './Navbar.module.css';

function Navbar() {
	return (
		<nav className={styles['nav-header']}>
			<a className={styles['nav-header-link']} href="#">Поиск фильмов</a>
			<a className={styles['nav-header-link']} href="#">Мои фильмы</a>
			<Authorization />
		</nav>
	);
}

export default Navbar;