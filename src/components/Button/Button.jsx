import styles from './Button.module.css';

function Button({ label, onClick, className }) {
	return (
		<button onClick={onClick} className={styles[className]}>{label}</button>
	);
}

export default Button;