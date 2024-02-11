import './Paragraph.css';

function Paragraph({ text, type }) {
	return (
		<p className={ type }>{ text }</p>
	);
}

export default Paragraph;