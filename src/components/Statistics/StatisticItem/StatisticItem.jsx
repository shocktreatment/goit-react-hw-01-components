import s from './StatisticsItem.module.css';
import PropTypes from 'prop-types';

const StatisticItem = ({ label, percentage }) => {
    return (
        <li className={s.item}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
        </li>
    )
}

export default StatisticItem;

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}