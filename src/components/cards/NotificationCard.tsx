import { FC } from "react";

const NotificationCard: FC = () => {
  return (
    <>
      {/*Outer layer of notification card*/}
      <div className="w-full bg-indigo-700 rounded-lg pl-2">
        {/*Inner layer of notification card*/}
        <div className="bg-white rounded-lg w-full py-2 px-4">
          {/*Time row*/}
          <div className="flex flex-row justify-between">
            <h6 className="text-gray-400 text-sm">9:30 AM - 10:00 AM</h6>
            <h6 className="text-gray-400 text-sm">10m more</h6>
          </div>
          <h1 className="text-lg font-bold">Title</h1>
          <p className="text-gray-600">Content text goes here.....</p>
        </div>
      </div>
    </>
  );
};

export default NotificationCard;
