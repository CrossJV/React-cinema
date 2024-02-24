import { forwardRef } from 'react';
import styles from './Favorite.module.css';
import cn from 'classnames';

const Favorite = forwardRef (function Favorite({ isFavorite, onClick }, ref)
{
	const label = isFavorite ? 'В избранном' : 'В избранное';

	return (
		<button ref={ref} onClick={onClick} className={cn(styles['favorites'], {
			[styles['is-favorite']]: isFavorite
		} )}>{label}</button>
	);
});

export default Favorite;