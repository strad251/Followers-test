import PropTypes from 'prop-types';
import {StatisticLi, StatisticsList, StatisticSpan, StatisticTitle} from './Statistics.styled'
export const Statistics = ({ title, stats }) => {
  return (
    <section>
       {{ title } && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map(el => (
        <StatisticLi key={el.id} >
          <StatisticSpan>{el.label}</StatisticSpan>
          <StatisticSpan>{el.percentage}</StatisticSpan>
        </StatisticLi>
      ))}
      </StatisticsList>
    </section>
  )
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};