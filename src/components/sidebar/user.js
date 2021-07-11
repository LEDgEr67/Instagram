import { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const User = ({ username, fullName }) => {
  return (
    <div>
      {!username || !fullName ? (
        <Skeleton count={1} height={60} />
      ) : (
        <Link
          to={`/p/${username}`}
          className="grid grid-cols-4 gap-4 mb-6 items-center"
        >
          <div className="flex items-center justify-between col-span-1 rounded-full h-16 w-16  mr-3 border border-gray-primary ">
            <svg
              aria-label="Profile"
              className="absolute justify-center align-middle mt-3 ml-5 z-0"
              fill="#262626"
              height="40"
              role="img"
              viewBox="0 0 54 54"
              width="40"
            >
              <path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
            </svg>
            <img
              className="rounded-full w-16 flex mr-3 z-10"
              src={`/images/avatars/${username}.jpg`}
              alt=""
            />
          </div>
          <div className="col-span-3">
            <p className="font-bold text-sm">{username}</p>
            <p className="text-sm text-black-700">{fullName}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default User;
User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};

User.whyDidYouRender = true;
