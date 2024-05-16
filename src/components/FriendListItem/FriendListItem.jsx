import clsx from "clsx";
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    const classNames = clsx(isOnline ? css.online : css.offline);

    return (
        <div>
            <img src={avatar} alt={name} />
            <p>{name}</p>
            <p className={classNames}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
};

export default FriendListItem;