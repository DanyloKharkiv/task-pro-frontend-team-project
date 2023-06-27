import { Text } from "./UserInfo.Styled";

import { useSelector } from "react-redux";
import { getName, getAvatar } from "../../../redux/auth/authSelector";
import userTemp from "../../../images/temp_avatar.png";

export const UserInfo = () => {
  const userName = useSelector(getName);
  const userAvatar = useSelector(getAvatar);
  const avatarURL = userAvatar ? userAvatar : userTemp;

  return (
    <>
      <Text>{userName}</Text>
      <div>
        src={avatarURL} alt="user_icon" width={32} height={32}
      </div>
    </>
  );
};
