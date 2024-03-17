import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';

function Rating(props: RatingProps) {

	return (
		<span className={styles['rating']}>{props.rating}</span>
	);
}

export default Rating;