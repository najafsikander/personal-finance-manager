import { FC } from "react";

type Props = {
  width: string;
  height: string;
  imageUrl: string;
};

const Profile: FC<Props> = ({ width, height, imageUrl }) => {
  return (
    <div
      className={`w-${width} h-${height} bg-[url('${imageUrl}')] bg-no-repeat bg-cover bg-center rounded-[100%] shadow-2xl/30 shadow-slate-900`}
    ></div>
  );
};

export default Profile;
