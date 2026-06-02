import { Bell, BellDot } from "lucide-react";
import { FC } from "react";

const NotificationBtn: FC = () => {
  const [hasNotifications] = [true]; // Placeholder for notification state
  return (
    <>
      <button
        className="p-2 hover:bg-gray-700 rounded-lg transition-colors relative cursor-pointer"
        aria-label="Notifications"
      >
        {hasNotifications ? <BellDot size={30} /> : <Bell size={30} />}
      </button>
    </>
  );
};

export default NotificationBtn;
