import styles from './Auth.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Headler from '../../components/Headler/Headler';
import { BaseSyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { userActions } from '../../store/user.slice';

function Auth() {
	const [userName, setUserName] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	
	const formHandler = (evt: BaseSyntheticEvent) => {
		evt.preventDefault();
		dispatch(userActions.login(userName))
		navigate('/');
	};

	const change = (evt: BaseSyntheticEvent) => {
		setUserName(evt.target.value);
	};
    
	return(
		<>
			<Headler className={'regular-headler'}>Вход</Headler>
			<form className={styles['auth-form']} action="#" onSubmit={formHandler}>
				<Input 
					placeholder={'Ваше имя'}
					name={'name'}
					onChange={change}
					value={userName}
					type={'text'}
				/>
				<Button 
					className={'regular-button'}>Войти в профиль</Button>
			</form>
		</>
        
	);
}

export default Auth;