import PropTypes from "prop-types";
import { useEffect } from "react";

const SuggestedProfile = ({ userDocId, username, profileId, userId }) => {
  useEffect(() => {
    console.log("Rendered", userDocId, userId, username, profileId);
  }, []);

  return <p>I am suggested {username}</p>;
};

SuggestedProfile.propTypes = {
  userDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default SuggestedProfile;
