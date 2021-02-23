import React from "react"
import PropTypes from 'prop-types';
import styles from './FriendsList.module.css'
import FriendListItem from "./friendListItem/FriendListItem";


const FriendList = ({friends})=>{
    return (
        <ul className={styles.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendListItem key={id} avatar={avatar} name={ name} isOnline={isOnline}/>
                    )
            })}
        </ul>
    )
}

export default FriendList



FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}
