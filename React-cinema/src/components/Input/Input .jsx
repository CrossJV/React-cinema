import styles from './Input.module.css';
import cn from 'classnames';

function Input({ className }) {
	const cl = className ? cn(styles.input, styles[className]) : styles.input;
	const placeholder = className === 'search' ? 'Введите название' : 'Ваше имя';
    
	return (
		<input className={cl} placeholder={placeholder} type="text" />
	);
}

export default Input;