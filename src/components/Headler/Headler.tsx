import styles from './Headler.module.css';
import { HeadlerProps } from './Headler.props';

function Headler({ children, className = 'regular-headler' }: HeadlerProps) {
	return (
		<h1 className={ styles[className] }>{children}</h1>
	);
}

export default Headler;