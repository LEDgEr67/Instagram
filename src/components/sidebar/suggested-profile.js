import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from "../../services/firebase";

const SuggestedProfile = ({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) => {
  const [followed, setFollowed] = useState(false);
  async function handleFollowUser() {
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updateFollowedUserFollowers(profileDocId, userId, false);
    setFollowed(true);
  }

  return !followed ? (
    <div
      className=" flex flex-row items-center align-items justfiy-between"
      style={{ justifyContent: "space-between" }}
    >
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3 z-0"
          src={`/images/avatars/default.png`}
          alt=""
        />
        <img
          className="rounded-full w-8 flex mr-3 z-10 absolute"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        />
        <Link to={`p/${username}`}>
          <p className="font-bold text-sm ">{username}</p>
        </Link>
      </div>
      <button
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick={handleFollowUser}
      >
        Follow
      </button>
    </div>
  ) : null;
};

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};

export default SuggestedProfile;
