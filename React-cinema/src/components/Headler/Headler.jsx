import './Headler.css';

function Headler({ title, className }) {
	return (
		<h1 className={ className }>{title}</h1>
	);
}

export default Headler;