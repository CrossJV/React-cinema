import { NavLink } from 'react-router-dom';
import AuthState from '../AuthState/AuthState';
import styles from './Navbar.module.css';
import cn from 'classnames';

function Navbar() {
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
			</NavLink>
			<AuthState />
		</nav>
	);
}

export default Navbar;