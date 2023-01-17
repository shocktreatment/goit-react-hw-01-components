import s from './friendListItem.module.css';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
  

const FriendListItem = ({ avatar, name, isOnline }) => {
    // const fullStatus = isOnline ? 'status active' : 'status';
    
    const Status = styled.span`
        content: "";
        padding: 10px;
        margin: 0 10px 0 0;
        background-color: ${({isOnline}) => isOnline ? 'red' : 'green'} ;
        border-radius: 50%;
    `
  

    return (
        <li className={s.item}>
            {/* <span className={s.status}></span> */}
            <Status isOnline={isOnline} />
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}