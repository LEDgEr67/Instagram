import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUsername(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((item) => ({ ...item.data(), docId: item.id }));
}

//get user from the firestore where userId == uid passed from auth
export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}

//get suggested profiles

export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore().collection("users").limit(10).get();
  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profile) =>
        profile.userId !== userId && !following.includes(profile.userId)
    );
}

// updateLoggedInUserFollowing,updateFollowedUserFollowers,

export async function updateLoggedInUserFollowing(
  loggedInUserDocId, //Currently logged in user
  profileId, //the user that
  isFollowingProfile
) {
  console.log(loggedInUserDocId, profileId, isFollowingProfile);
  return firebase
    .firestore()
    .collection("users")
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    })
    .then((response) =>
      console.log("Updated the Following List of the user", response)
    )
    .catch((error) =>
      console.log("Error occured while updating Following List user", error)
    );
}

// Followed user list

export async function updateFollowedUserFollowers(
  profileDocId, //Currently logged in user
  loggedInUserDocId, //the user that
  isFollowingProfile
) {
  console.log(profileDocId, loggedInUserDocId, isFollowingProfile);
  return firebase
    .firestore()
    .collection("users")
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUserDocId)
        : FieldValue.arrayUnion(loggedInUserDocId),
    })
    .then((response) =>
      console.log("Updated the Followers list on the Followed user", response)
    )
    .catch((error) =>
      console.log(
        "Error occured while updating Followers list in Followed user",
        error
      )
    );
}

//getPhotos, getUserByUserId

export async function getPhotos(userId, following) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "in", following)
    .get();

  const userFollowedPhotos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      const user = await getUserByUserId(photo.userId);
      const { username } = user[0];
      return { username, ...photo, userLikedPhoto };
    })
  );
  return photosWithUserDetails;
}

export async function getUserPhotosByUsername(username) {
  const [user] = await getUserByUsername(username);
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "==", user.userId)
    .get();

  return result.docs.map((item) => ({ ...item.data(), docId: item.id }));
}

export async function isUserFollowingProfile(
  loggedInUserUsername,
  profileUserId
) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", loggedInUserUsername)
    .where("following", "array-contains", profileUserId)
    .get()
    .catch((err) => {
      console.log("Error on isUserFollowingProfile", err);
    });

  const [response = {}] = result.docs.map((item) => ({
    ...item,
    doc: item.id,
  }));

  return response.userId;
}
