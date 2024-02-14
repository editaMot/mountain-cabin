import { useUser } from "../useUser";
import "./UserAvatar.scss";

const UserAvatar = () => {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <div className="user-avatar">
      <img
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
        className="user-avatar__img"
      />
      <span>{fullName}</span>
    </div>
  );
};

export default UserAvatar;
