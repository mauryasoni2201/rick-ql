import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div>
                        <p className="footer-text">
                            © {currentYear} RickQL |
                            <Link
                                target="_blank"
                                to={'https://www.linkedin.com/in/mauryasoni/'}
                            >
                                MS
                            </Link>
                            . All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
