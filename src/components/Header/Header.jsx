import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-wrap">
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <Link to={'/'} className="logo">
                            <img
                                src="/logo.png"
                                alt="site-logo"
                                height={'100'}
                                width={'100'}
                            />
                        </Link>
                        <div className="links">
                            <nav>
                                <ul>
                                    <li>
                                        <NavLink
                                            to="/"
                                            end
                                            className={({ isActive }) =>
                                                isActive ? 'active' : ''
                                            }
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/characters"
                                            className={({ isActive }) =>
                                                isActive ? 'active' : ''
                                            }
                                        >
                                            Characters
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/episodes"
                                            className={({ isActive }) =>
                                                isActive ? 'active' : ''
                                            }
                                        >
                                            Episodes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/favorites"
                                            className={({ isActive }) =>
                                                isActive ? 'active' : ''
                                            }
                                        >
                                            Favorites
                                        </NavLink>
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
