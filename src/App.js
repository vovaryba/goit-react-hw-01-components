import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import StatisticsList from './components/Statistics/StatisticsList';
import stats from './components/Statistics/statistical-data.json';
import Section from './components/Section/Section';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Section title="Upload stats">
        <StatisticsList items={stats} />
      </Section>
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
