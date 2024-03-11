import styles from './AuthState.module.css';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';

function AuthState() {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	const auth = () => {
		if(user) {
			setUser && setUser(user.name);
		} else {
			navigate('/auth');
		}
	};

	return (
		<>
			{user && <a className={styles['nav-header-link']} href="#">{user.name}</a>}
			<div onClick={auth} className={styles['auth-state-toggler']}>
				{user ? 'Выйти' : <>Войти<img className='login-icon' src="/login_arrow.svg" alt="Login" /></>}
			</div>
		</>
	);
   
}

export default AuthState;