import './App.css';
import userData from "./userData.json";
import Profile from "./components/Profile.jsx";
import friends from "./friends.json";
import FriendList from './components/FriendList.jsx';
import transactions from "./transactions.json";
import TransactionHistory from './components/TransactionHistory.jsx';
import { useEffect, useState } from 'react';

const App = () => {
  const [titleClass, setTitleClass] = useState('task-title');

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleClass('task-title bounce'); // Add bounce class after mount
    }, 100); // Delay to allow for fade-in effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h2 className={titleClass}>Social Media Profile</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2 className={titleClass}>Friend List</h2>
      <FriendList friends={friends} />
      <h2 className={titleClass}>Transaction History</h2>
      <TransactionHistory items={transactions}/>
    </>
  );
};

export default App;
