import styles from './Auth.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Headler from '../../components/Headler/Headler';
import { BaseSyntheticEvent, useContext, useState } from 'react';
import { UserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';

function Auth() {
	const [userName, setUserName] = useState('');
	const navigate = useNavigate();
	const { setUser } = useContext(UserContext);
	
	const formHandler = (evt: BaseSyntheticEvent) => {
		evt.preventDefault();
		setUser && setUser(userName);
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