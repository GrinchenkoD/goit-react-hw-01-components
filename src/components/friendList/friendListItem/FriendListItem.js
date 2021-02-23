import React from "react"
import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css'
import placeholder from '../../../images/placeholder.jpg'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return(
    <li className={styles.item}>
        <span className={isOnline? styles.online: styles.offline}></span>
        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{ name}</p>
    </li>
)}

export default FriendListItem

FriendListItem.defaultProps = {
    avatar: placeholder,
    name: 'Anonymous',
    isOnline: false,    
}

FriendListItem.propTypes = {
   
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}
