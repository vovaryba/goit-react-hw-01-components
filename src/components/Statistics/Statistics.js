import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ label, percentage }) => {
  const generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };
  console.log(generateColor());
  return (
    <li className={s.item} style={{ backgroundColor: generateColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
