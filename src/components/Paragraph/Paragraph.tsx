import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';

function Paragraph({ children, className = 'regular-paragraph' }: ParagraphProps) {
	return (
		<p className={ styles[className] }>{ children }</p>
	);
}

export default Paragraph;