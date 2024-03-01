import styles from './Rating.module.css';

function Rating(rating: number) {
	return (
		<span className={styles['rating']}>{rating}</span>
	);
}

export default Rating;