import { Outlet } from 'react-router-dom';
import { UserContextProvider } from '../../contexts/user.context';
import Header from '../Header/Header';
import styles from './Layout.module.css';

function Layout() {
    return (
        <UserContextProvider>
        <div className='app'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
        </UserContextProvider>
    );
}

export default Layout;