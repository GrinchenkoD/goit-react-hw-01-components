import React from "react"
import user from "../data/user.json"
import Profile from "./social-profile/Profile";

const App = () => {
    return (
        <Profile name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />
    );
 }

export default App;