import FriendListItem from './FriendListItem';

function FriendList({ items }) {
  return (
    <ul className="friend-list">
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
