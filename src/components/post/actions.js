import { useState, useContext } from "react";
import PropTypes from "prop-types";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";
// import {firebase,  FieldValue } from "../../lib/firebase";
// import {}

export default function Actions({
  docId,
  totalLikes,
  likedPhoto,
  handleFocus,
}) {
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);
  const [toggleLiked, setToggleLiked] = useState(likedPhoto);
  const [likes, setLikes] = useState(totalLikes);
  const { firebase, FieldValue } = useContext(FirebaseContext);

  const handleToggleLiked = async () => {
    setToggleLiked((toggleLiked) => !toggleLiked);
    await firebase
      .firestore()
      .collection("photos")
      .doc(docId)
      .update({
        likes: toggleLiked
          ? FieldValue.arrayRemove(userId)
          : FieldValue.arrayUnion(userId),
      });
    setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1));
  };

  return (
    <>
      <div className="flex justify-between p-4">
        <div className="flex">
          {/* <svg
            onClick={handleToggleLiked}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleToggleLiked();
              }
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            tabIndex={0}
            className={`w-8 mr-4 select-none cursor-pointer ${
              toggleLiked ? "fill-red text-red-primary" : "text-black-light"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg> */}
          {toggleLiked ? (
            <svg
              onClick={handleToggleLiked}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleToggleLiked();
                }
              }}
              aria-label="Unlike"
              class="_8-yf5 "
              fill="#ed4956"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="24"
              className={`w-8 mr-1 select-none cursor-pointer ${"fill-red text-read-primary"}`}
            >
              <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
            </svg>
          ) : (
            <svg
              onClick={handleToggleLiked}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleToggleLiked();
                }
              }}
              aria-label="Like"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="28"
              className={`w-8 mr-1 select-none cursor-pointer ${
                toggleLiked ? "fill-red text-read-primary" : ""
              }`}
            >
              <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
            </svg>
          )}
          <svg
            onClick={handleFocus}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleFocus();
              }
            }}
            aria-label="Comment"
            className="w-8 mr-1 text-black-light select-none cursor-pointer"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              clip-rule="evenodd"
              d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="w-8 text-black-light select-none cursor-pointer"
            aria-label="Share Post"
            class="_8-yf5 "
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
          </svg>
        </div>
      </div>
      <div className="p-4 py-0">
        <p className="font-bold">
          {likes === 1 ? `${likes} like` : `${likes} likes`}
        </p>
      </div>
    </>
  );
}

Actions.propTypes = {
  docId: PropTypes.string.isRequired,
  totalLikes: PropTypes.number.isRequired,
  likedPhoto: PropTypes.bool.isRequired,
  handleFocus: PropTypes.func.isRequired,
};
