import InfoItem from '../InfoItem/InfoItem';

const InformationCard = ({ data, className }) => {
    return (
        <div className={`information-card ${className}`}>
            <div className="wrapper">
                {data?.map((item, index) => (
                    <div className="item" key={index}>
                        <InfoItem
                            label={item.label}
                            value={item.value}
                            link={item.link}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default InformationCard;
