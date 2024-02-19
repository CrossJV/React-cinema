import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

const Input = forwardRef (function Input({ className, placeholder, ...props }, ref) {
	return (
		<input {...props} ref={ref} className={cn(styles['input'], styles[className])}  placeholder={placeholder} type="text" />
	);
});

export default Input;