import { GlobalStyle } from './GlobalStyle/GlobalStyle';

import { Profile } from './Profile/Profile';
import user from './Profile/user';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} />
    </>
  );
};
