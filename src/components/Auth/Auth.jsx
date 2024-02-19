import styles from './Auth.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Headler from '../Headler/Headler';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user.context';

function Auth() {
	const {0: userName, 1: setUserName} = useState('');
	const {setUser} = useContext(UserContext);
	const formHandler = (evt) => {
		evt.preventDefault();
		setUser(userName);
	};

	const change = (evt) => {
		setUserName(evt.target.value);
		console.log(userName);
	};
    
	return(
		<>
			<Headler 
				className={'regular-headler'}
				title={'Вход'}
			/>
			<form className={styles['auth-form']} action="#" onSubmit={formHandler}>
				<Input 
					placeholder={'Ваше имя'}
					name={'name'}
					onChange={change}
					value={userName}
					type={'text'}
				/>
				<Button 
					label={'Войти в профиль'}
					className={'regular-button'}
				/>
			</form>
		</>
        
	);
}

export default Auth;