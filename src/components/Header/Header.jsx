import { Link } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';

const Header = () => {
    const handleNavClick = () => {
        window.scrollTo(0, 0);
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

                        <div className="links">
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
