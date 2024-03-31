import { NavLink } from 'react-router-dom';
import AuthState from '../AuthState/AuthState';
import styles from './Navbar.module.css';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function Navbar() {
	const favorites = useSelector((s: RootState) => s.user.user?.favorites);

	return (
		<nav className={styles['nav-header']}>
			<NavLink to='/' className={({ isActive }) => cn(styles['nav-header-link'], {
				[styles['link-active']]: isActive
			})}>
				Поиск фильмов
			</NavLink>
			<NavLink to={'/favorites'} className={({ isActive }) => cn(styles['nav-header-link'], {
				[styles['link-active']]: isActive
			})} >
				Мои фильмы
				{favorites && <span className={cn(styles['favorite-count'])}>{favorites.length}</span>}
			</NavLink>
			<AuthState />
		</nav>
	);
}

export default Navbar;