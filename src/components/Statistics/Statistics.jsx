import { Stats } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Stats>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id}>
              <span>{label}</span>
              <span>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </Stats>
  );
};
