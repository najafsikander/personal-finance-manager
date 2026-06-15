import { Bell, BellDot } from "lucide-react";
import { FC, useState } from "react";
import clsx from "clsx";

const NotificationBtn: FC = () => {
  const [hasNotifications] = [true]; // Placeholder for notification state
  const [toggleNotification, setToggleNotification] = useState(false); // Placeholder for notification state

  return (
    <>
      <button
        className="p-2 hover:bg-gray-700 rounded-lg transition-colors relative cursor-pointer"
        aria-label="Notifications"
        onClick={() => setToggleNotification((prev) => !prev)}
      >
        {hasNotifications ? <BellDot size={30} /> : <Bell size={30} />}
      </button>
      <div
        className={clsx(
          "absolute top-17 right-17 w-64 bg-white shadow-lg rounded-lg p-4 z-50",
          { block: toggleNotification, hidden: !toggleNotification },
        )}
      >
        <ul className="divide-y divide-gray-200">
          <li className="border-b border-gray-200 py-2">
            <p className="text-sm text-gray-700">New message from John Doe</p>
            <span className="text-xs text-gray-500">5 minutes ago</span>
          </li>
          <li className="border-b border-gray-200 py-2">
            <p className="text-sm text-gray-700">
              Your report is ready to download
            </p>
            <span className="text-xs text-gray-500">10 minutes ago</span>
          </li>
          <li className="py-2">
            <p className="text-sm text-gray-700">New comment on your post</p>
            <span className="text-xs text-gray-500">15 minutes ago</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NotificationBtn;
