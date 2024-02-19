import styles from './AuthState.module.css';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

function AuthState() {
	const { user, setUser } = useContext(UserContext);
    
	const auth = () => {
		setUser(user.name);
	};
	return (
		<>
			{user ? <a className={styles['nav-header-link']} href="#">{user.name}</a> : ''}
			<div onClick={auth} className={styles['auth-state-toggler']}>
				{user ? 'Выйти' : <>Войти<img className='login-icon' src="/public/login_arrow.svg" alt="Login" /></>}
			</div>
		</>
	);
   
}

export default AuthState;