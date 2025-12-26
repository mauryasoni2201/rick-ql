import { Link } from 'react-router-dom';

const InfoItem = ({ label = '', value = '', link = false }) => (
    <div className="wrap-item">
        <h2>
            <b>{label}:</b>
        </h2>
        <h3>
            {link && value !== 'unknown' ? (
                <Link
                    className="link"
                    to={link}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    {value}
                </Link>
            ) : (
                <span>{value}</span>
            )}
        </h3>
    </div>
);

export default InfoItem;
