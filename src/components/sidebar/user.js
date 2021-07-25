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
          <div className="flex items-center justify-between col-span-1 rounded-full ">
            <img
              className="rounded-full w-16 flex mr-3 z-0"
              src={`/images/avatars/default.png`}
              alt=""
            />
            <img
              className="rounded-full w-16 flex mr-3 z-10 absolute"
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
