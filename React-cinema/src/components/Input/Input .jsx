import styles from './Input.module.css';
import cn from 'classnames';

function Input({ className, placeholder }) {
	return (
		<input className={cn(styles['input'], styles[className])}  placeholder={placeholder} type="text" />
	);
}

export default Input;