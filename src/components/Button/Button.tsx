import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

function Button({ children, className = 'regular-button', ...props }: ButtonProps) {
	return (
		<button {...props} className={styles[className]}>{children}</button>
	);
}

export default Button;