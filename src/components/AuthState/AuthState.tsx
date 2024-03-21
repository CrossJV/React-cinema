import styles from './AuthState.module.css';
import { useContext } from 'react';
import { MainContext } from '../../contexts/main.context';
import { Link } from 'react-router-dom';

function AuthState() {
	const { user, setUser } = useContext(MainContext);

	const auth = () => {
		if(user) {
			setUser && setUser(user.name);
		}
	};

	return (
		<>
			{user && <a className={styles['nav-header-link']} href="#">{user.name}</a>}
			<div onClick={auth} className={styles['auth-state-toggler']}>
				{user ? <Link to='/auth'>Выйти</Link> : <>Войти<img className='login-icon' src="/login_arrow.svg" alt="Login" /></>}
			</div>
		</>
	);
   
}

export default AuthState;