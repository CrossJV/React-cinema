import { useContext } from 'react';
import styles from './Navbar.module.css';
import { UserContext } from '../../contexts/user.context';

function Navbar() {
	const { user, setUser } = useContext(UserContext);
	const userLink = user ? <a className={styles['nav-header-link']} href="#">{user.name}</a> : '';
	const login = user ? 'Выйти' : <>Войти<img className='login-icon' src="/public/login_arrow.svg" alt="Login" /></>;
    
    
	const auth = () => {
		setUser(user.name);
	};

	return (
		<nav className={styles['nav-header']}>
			<a className={styles['nav-header-link']} href="#">Поиск фильмов</a>
			<a className={styles['nav-header-link']} href="#">Мои фильмы</a>
			{userLink}
			<a onClick={auth} className={styles['nav-header-link']} href="#">{login}</a>
		</nav>
	);
}

export default Navbar;