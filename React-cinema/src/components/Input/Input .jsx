import './Input.css';

function Input({ className }) {
	const cl = 'input ' + className ? 'input ' + className : 'input';
	const placeholder = className === 'search' ? 'Введите название' : 'Ваше имя';
    
	return (
		<input className={cl} placeholder={placeholder} type="text" />
	);
}

export default Input;