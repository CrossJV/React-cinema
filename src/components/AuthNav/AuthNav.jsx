import styles from './AuthNav.module.css';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

function AuthNav() {
	const { user, setUser } = useContext(UserContext);
	const userLink = user ? <a className={styles['nav-header-link']} href="#">{user.name}</a> : '';
	const login = user ? 'Выйти' : <>Войти<img className='login-icon' src="/public/login_arrow.svg" alt="Login" /></>;
    
	const auth = () => {
		setUser(user.name);
	};
	return (
		<>
			{userLink}
			<a onClick={auth} className={styles['nav-header-link']} href="#">{login}</a>
		</>
	);
   
}

export default AuthNav;