import React from "react"
import Profile from "./social-profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import styles from "./App.module.css"

import user from "../data/user.json"
import statisticalData from "../data/statistical-data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"

const App = () => {
  return (
    <>
      <div className={ styles.container }>
    <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        </div>
</>
    );
 }

export default App;