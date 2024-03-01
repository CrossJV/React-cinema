import { forwardRef } from 'react';
import styles from './Favorite.module.css';
import cn from 'classnames';
import { FavoriteProps } from './Favorite.props';

const Favorite = forwardRef<HTMLButtonElement, FavoriteProps>(function Favorite({ isFavorite = false, ...props }, ref)
{
	const label = isFavorite ? 'В избранном' : 'В избранное';

	return (
		<button {...props} ref={ref} className={cn(styles['favorites'], {
			[styles['is-favorite']]: isFavorite
		} )}>{label}</button>
	);
});

export default Favorite;