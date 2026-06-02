import { Image } from "@unpic/react";

const Avatar = () => {
  const imageUrl =
    "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/08/se7en-brad-pitt.jpg?w=1200&h=675&fit=crop";

  return (
    <div className="avatar">
      <div className="w-13 h-13 rounded-full overflow-hidden">
        <Image
          src={imageUrl}
          alt="Avatar"
          width={24}
          height={24}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Avatar;
