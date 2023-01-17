import user from './../data/user.json';
import Profile from './Profile/Propfile';

import data from './../data/data.json';
import Statistic from './Statistics/Statistics';

import friends from './../data/friends.json';
import FriendList from './FriendListItem/FriendList';

import transactions from './../data/transactions.json';
import TransactionHistory from './TrnsactionsHistory/TransactionsHistory';


export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} /> 
      <TransactionHistory items={transactions} />
    </>
  );
};