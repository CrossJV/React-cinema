import styles from './AuthState.module.css';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import Hide from '../Hide/Hide';

function AuthState() {
	const { user, setUser } = useContext(UserContext);
    
	const auth = () => {
		setUser(user.name);
	};

	return (
		<>
			<Hide isVisible={user}>
				<a className={styles['nav-header-link']} href="#">{user.name}</a>
			</Hide>
			<div onClick={auth} className={styles['auth-state-toggler']}>
				<Hide isVisible={user}>Выйти</Hide>
				<Hide isVisible={!user}><>Войти<img className='login-icon' src="/public/login_arrow.svg" alt="Login" /></></Hide>
			</div>
		</>
	);
   
}

export default AuthState;