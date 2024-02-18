import './Input.css';

function Input({ className, placeholder }) {
	return (
		<input className={`input ${className || ''}`} placeholder={placeholder} type="text" />
	);
}

export default Input;