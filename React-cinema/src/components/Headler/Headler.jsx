import './Headler.css';

function Headler({ title, type }) {
	return (
		<h1 className={ type }>{title}</h1>
	);
}

export default Headler;