import { GlobalStyle } from './GlobalStyle/GlobalStyle';

import { Profile } from './Profile/Profile';
import user from './Profile/user';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data';

import { FriendList } from './Friends/FriendList/FriendList';
import friends from './Friends/FriendList/friends';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>1 - Профіль соціальної мережі</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h1>2- Секція статистики</h1>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <h1>3 - Список друзів</h1>
      <FriendList friends={friends} />
      <h1>4 - Історія транзакцій</h1>
      <TransactionHistory items={transactions} />
    </>
  );
};
