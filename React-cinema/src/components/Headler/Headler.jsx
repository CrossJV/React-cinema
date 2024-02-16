import styles from './Headler.module.css';

function Headler({ title, type }) {
	return (
		<h1 className={ styles[type] }>{title}</h1>
	);
}

export default Headler;