import PropTypes from 'prop-types';
import { OnlineStatus } from './FriendListItem.styled';

export const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
  return (
    <>
      <OnlineStatus data-status={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
