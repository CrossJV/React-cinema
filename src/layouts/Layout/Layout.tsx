import { Outlet } from 'react-router-dom';
import { MainContextProvider } from '../../contexts/main.context';
import Header from '../Header/Header';

function Layout() {
    return (
        <MainContextProvider>
        <div className='app'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
        </MainContextProvider>
    );
}

export default Layout;