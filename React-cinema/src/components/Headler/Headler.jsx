import styles from './Headler.module.css';

function Headler({ title, className }) {
	return (
		<h1 className={ styles[className] }>{title}</h1>
	);
}

export default Headler;