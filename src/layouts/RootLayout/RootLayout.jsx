import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ToastProvider from '../../providers/ToastProvider/ToastProvider';

const RootLayout = () => {
    return (
        <>
            <Header />
            <ToastProvider />
            <Outlet />
            <Footer />
        </>
    );
};
export default RootLayout;
