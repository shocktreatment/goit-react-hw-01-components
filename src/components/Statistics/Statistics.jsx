import StatisticItem from "./StatisticItem/StatisticItem";
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistic = ({ title, stats }) => {
    const elements = stats.map(element => <StatisticItem key={element.id} {...element} />)
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}

            <ul className={s.statList}>
                {elements}
            </ul>
        </section>  
    )
}

export default Statistic;

Statistic.defaultProps = {
    stats: []
}

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}