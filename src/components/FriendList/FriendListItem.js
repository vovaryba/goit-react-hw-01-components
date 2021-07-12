import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <li className={s.item}>
      <span className={s.status} style={{ color: status ? 'green' : 'red' }}>
        {status ? 'Online' : 'Offline'}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendListItem;
