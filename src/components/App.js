import React from "react"
import Profile from "./social-profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendList/FriendList";

import user from "../data/user.json"
import statisticalData from "../data/statistical-data.json"
import friends from "../data/friends.json"

const App = () => {
  return (
    <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />,
      
    <Statistics title="Upload stats" stats={statisticalData} />,
    <FriendList friends={friends} />

    );
 }

export default App;