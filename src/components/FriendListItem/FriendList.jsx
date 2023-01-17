import FriendListItem from "./FriendListItem/FriendListItem";
import s from './friendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    const elements = friends.map(element => <FriendListItem key={element.id} {...element} />)

    return (
        <ul className={s.friendList}>
            {elements}
        </ul>
    )
} 

export default FriendList;

FriendList.defaultProps = {
    friends: []
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}
