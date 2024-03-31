import styles from './AuthState.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { userActions } from '../../store/user.slice';

function AuthState() {
	const user = useSelector((s: RootState) => s.user.user);
	const dispatch = useDispatch<AppDispath>();

	const auth = () => {
		if(user) {
			dispatch(userActions.logout())
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