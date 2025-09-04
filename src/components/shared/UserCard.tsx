import { Models } from "appwrite";
import { Link } from "react-router-dom";

type UserCardProps = {
  user: Models.Document;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Link to={`/profile/${user.$id}`} className="user-card">
      {/* Profile picture */}
      <img
        src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="creator"
        className="rounded-full w-14 h-14"
      />

      {/* User name + username */}
      <div className="flex-center flex-col gap-1">
        <p className="base-medium text-light-1 text-center line-clamp-1">
          {user.name}
        </p>
        <p className="small-regular text-light-3 text-center line-clamp-1">
          @{user.username}
        </p>
      </div>

      {/* Posts count */}
      <div className="flex items-center justify-center xl:justify-start gap-1 z-20">
        <p className="text-xs sm:text-sm md:text-base font-semibold text-primary-500 leading-tight">
          {user.posts.length}
        </p>
        <p className="text-[10px] sm:text-xs md:text-sm text-light-2 leading-tight">
          Posts
        </p>
      </div>
    </Link>
  );
};

export default UserCard;