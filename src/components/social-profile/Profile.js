import React from "react"
import PropTypes from 'prop-types';
import image from '../../images/placeholder.jpg'
import styles from './Profile.module.css'


const Profile = ({ name, tag, location,avatar, stats }) => {
    return (
   <div className={styles.profile}>
        <div className={styles.description}>
            <img
                src={avatar}
                alt="Аватар пользователя"
                className={styles.avatar}
                />
            <p className={styles.name}>{ name }</p>
            <p className={styles.tag}>@{ tag }</p>
            <p className={styles.location}>{ location }</p>
        </div>

        <ul className={styles.stats}>
            <li>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{ stats.followers}</span>
            </li>
            <li>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{stats.views}</span>
            </li>
            <li>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{stats.likes}</span>
            </li>
        </ul>
</div>
    )
}
export default Profile

Profile.defaultProps = {
    avatar: image,
    tag: "noTag",
    stats: {
        followers: 0,
        views: 0,
        likes: 0,
    }
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
  }),
};