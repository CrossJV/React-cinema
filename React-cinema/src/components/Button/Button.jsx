import './Button.css';

function Button({ name, onClick }) {
	return (
		<button onClick={onClick} className='regular-button'>{name}</button>
	);
}

export default Button;