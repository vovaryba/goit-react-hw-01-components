import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

function FriendList({ items }) {
  return (
    <ul className={s.friendList}>
      {items.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          status={item.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;
