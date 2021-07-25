import PropTypes from "prop-types";
import Header from "./header";
import { useReducer, useEffect } from "react";
import { getUserPhotosByUsername } from "../../services/firebase";
import Photos from "./photos";

const reducer = (state, newState) => ({ ...state, ...newState });
const initialState = {
  profile: {},
  photosCollection: [],
  followerCount: 0,
};

export default function Profile({ user }) {
  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      console.log("getProfileInfoAndPhotos called");
      const photos = await getUserPhotosByUsername(user?.username);
      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user?.followers.length,
      });
    }
    if (user.username) {
      getProfileInfoAndPhotos();
    }
  }, [user.username]);

  return (
    <>
      <Header
        photosCount={photosCollection?.length}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <Photos photos={photosCollection} />
    </>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    dateCreated: PropTypes.number,
    emailAddress: PropTypes.string,
    followers: PropTypes.array,
    following: PropTypes.array,
    fullName: PropTypes.string,
    userId: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};
