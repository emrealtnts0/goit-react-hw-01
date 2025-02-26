import "../friends.json";
import style from "./FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
	if (isOnline === true) {
		return (
			<div className={style.friend_list_container}>
				<img src={avatar} alt="Avatar" width="48" className={style.image_svg} />
				<p className={style.friend_name}>{name}</p>
				<p className={style.isOnlinee}>Online</p>
			</div>
		);
	} else {
	return (
        <div className={style.friend_list_container}>
        <img src={avatar} alt="Avatar" width="48" className={style.image_svg} />
		<p className={style.friend_name}>{name}</p>
		<p className={style.isOffline}>Offline</p>
        </div>
	);
	};
}