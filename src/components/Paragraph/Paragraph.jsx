import styles from './Paragraph.module.css';

function Paragraph({ text, className }) {
	return (
		<p className={ styles[className] }>{ text }</p>
	);
}

export default Paragraph;