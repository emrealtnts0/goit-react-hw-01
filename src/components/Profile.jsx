import "../userData.json";
import style from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
    return (
    <div className={style.card}>
        <div className={style.card_upper_part}>
            <img
                src={image}
                    alt="User avatar"
                    className={style.card_image}
            />
        <p className={style.username}>{name}</p>
        <p className={style.user_tag}>@{tag}</p>
        <p className={style.user_location}>{location}</p>
    </div>

    <ul className={style.stats_list}>
        <li className={style.stats_item}>
            <span className={style.stats_title}>Followers</span>
            <span className={style.stats_info}>{stats.followers}</span>
        </li>
        <li className={style.stats_item}>
            <span className={style.stats_title}>Views</span>
            <span className={style.stats_info}>{stats.views}</span>
        </li>
        <li className={style.stats_item}>
            <span className={style.stats_title}>Likes</span>
            <span className={style.stats_info}>{stats.likes}</span>
        </li>
    </ul>
    </div>
    );
}