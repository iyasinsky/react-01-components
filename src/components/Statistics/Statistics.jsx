import PropTypes from 'prop-types';
import { Stats, Item } from './Statistics.styled';
import { getRandomHexColor } from '../../utils/RandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Stats>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item bgc={getRandomHexColor()} key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </Item>
          );
        })}
      </ul>
    </Stats>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
