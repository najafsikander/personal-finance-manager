import { FC } from "react";

type Props = {
  width: string;
  height: string;
  imageUrl: string;
};

const Profile: FC<Props> = ({ width, height, imageUrl }) => {
  return (
    <img
      src={imageUrl}
      alt="Profile"
      className="rounded-full object-cover shadow-2xl shadow-slate-900"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
};

export default Profile;
