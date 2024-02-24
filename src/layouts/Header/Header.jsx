import Navbar from '../../components/Navbar/Navbar';
import styles from './Header.module.css';

function Header() {
	return (
		<header className={styles['main-header']}>
			<img className={styles['logo-header']} src="/public/header_logo.svg" alt="Logo" />
			<Navbar />
		</header>
	);
}

export default Header;