import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function Layout() {
    return (
        <div className='app'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;