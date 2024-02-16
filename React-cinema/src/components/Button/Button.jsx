import styles from './Button.module.css';

function Button({ name, onClick, className }) {
	return (
		<button onClick={onClick} className={styles[className]}>{name}</button>
	);
}

export default Button;