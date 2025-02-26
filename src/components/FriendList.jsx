import style from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
	return (
	<ul className={style.friend_list}>
	{friends.map(friend => {
		return (
			<li key={friend.id} className={style.friend_item}>
				<FriendListItem
					avatar={friend.avatar}
					name={friend.name}
					isOnline={friend.isOnline}
				/>
			</li>
		)
	})}
	</ul>
	);
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		avatar: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
	})).isRequired,
};