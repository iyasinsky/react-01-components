export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, isOnline, name, avatar }) => {
        return (
          <li key={id}>
            <span>{isOnline}</span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
