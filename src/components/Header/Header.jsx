import { Link } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleNavClick = () => {
        window.scrollTo(0, 0);
        document.body.classList.remove('no-scroll');
        setOpen(false);
    };

    const handleOpenButton = () => {
        document.body.classList.add('no-scroll');
        setOpen(true);
    };

    const handleCloseButton = () => {
        document.body.classList.remove('no-scroll');
        setOpen(false);
    };

    return (
        <div className="header-wrap">
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <Link
                            to="/"
                            className="logo"
                            onClick={handleNavClick}
                            aria-label="homepage-link"
                        >
                            <img
                                src="/logo.png"
                                alt="site-logo"
                                height="100"
                                width="100"
                            />
                        </Link>
                        <div className="open-button">
                            <button
                                onClick={handleOpenButton}
                                className="menu-button"
                                aria-label="open-menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M4 6H20"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M4 12H20"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M4 18H20"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            className={`links ${
                                open ? 'open open-menu' : 'close-menu'
                            }`}
                        >
                            <div className="close-button">
                                <button
                                    onClick={handleCloseButton}
                                    aria-label="close-menu"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M18 6L6 18"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M6 6L18 18"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <nav>
                                <ul>
                                    <li>
                                        <NavItem
                                            to="/"
                                            label="Home"
                                            end
                                            onClick={handleNavClick}
                                        />
                                    </li>
                                    <li>
                                        <NavItem
                                            to="/characters"
                                            label="Characters"
                                            onClick={handleNavClick}
                                        />
                                    </li>
                                    <li>
                                        <NavItem
                                            to="/episodes"
                                            label="Episodes"
                                            onClick={handleNavClick}
                                        />
                                    </li>
                                    <li>
                                        <NavItem
                                            to="/liked-characters"
                                            label="Liked Characters"
                                            onClick={handleNavClick}
                                        />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
export default Header;
