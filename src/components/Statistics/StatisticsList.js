import Statistics from './Statistics';
import s from './StatisticsList.module.css';

function StatisticsList({ items }) {
  return (
    <ul className={s.statList}>
      {items.map(item => (
        <Statistics
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  );
}

export default StatisticsList;
