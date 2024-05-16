import clsx from "clsx";
import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div>
            <div>
                <img src={image} alt={tag} />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <ul className={clsx(css.list)}>
                <li className={clsx(css.item)}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={clsx(css.item)}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={clsx(css.item)}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile