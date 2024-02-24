import styles from './Rating.module.css';

function Rating({ rating }) {
	return (
		<span className={styles['rating']}>{rating}</span>
	);
}

export default Rating;