import './Paragraph.css';

function Paragraph({ text, className }) {
	return (
		<p className={ className }>{ text }</p>
	);
}

export default Paragraph;