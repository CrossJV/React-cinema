import './Button.css';

function Button({ name }) {
	return (
		<button className='regular-button'>{name}</button>
	);
}

export default Button;