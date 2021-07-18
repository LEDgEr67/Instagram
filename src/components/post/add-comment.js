// import { useState, useContext } from "react";
// import PropTypes from "prop-types";
// import FirebaseContext from "../../context/firebase";
// import UserContext from "../../context/user";
// import Picker from "emoji-picker-react";

// export default function AddComment({
//   docId,
//   comments,
//   setComments,
//   commentInput,
// }) {
//   const [comment, setComment] = useState("");
//   const { firebase, FieldValue } = useContext(FirebaseContext);
//   const {
//     user,
//     user: { displayName },
//   } = useContext(UserContext);
//   console.log("display Name", displayName, user);
//   const handleSubmitComment = (event) => {
//     event.preventDefault();

//     setComments([{ displayName, comment }, ...comments]);
//     setComment("");
//     return firebase
//       .firestore()
//       .collection("photos")
//       .doc(docId)
//       .update({ comments: FieldValue.arrayUnion({ displayName, comment }) });
//   };

import { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";

export default function AddComment({
  docId,
  comments,
  setComments,
  commentInput,
}) {
  const [comment, setComment] = useState("");
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const {
    user: { displayName },
  } = useContext(UserContext);
  const handleSubmitComment = (event) => {
    event.preventDefault();

    setComments([...comments, { displayName, comment }]);
    setComment("");

    return firebase
      .firestore()
      .collection("photos")
      .doc(docId)
      .update({
        comments: FieldValue.arrayUnion({ displayName, comment }),
      });
  };

  return (
    <div className="border-t border-gray-primary flex">
      {/* <Picker /> */}
      <svg
        aria-label="Emoji"
        class="_8-yf5 "
        fill="#262626"
        height="24"
        role="img"
        viewBox="0 0 48 48"
        width="24"
        className="mt-4 ml-4"
      >
        <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
        <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
      </svg>
      <form
        className="justify-between pl-1 pr-5 w-full flex border-gray-primary border-transparent border-opacity-0"
        method="POST"
        onSubmit={(event) =>
          comment.length >= 1
            ? handleSubmitComment(event)
            : event.preventDefault()
        }
      >
        <input
          aria-label="Add a Comment"
          autoComplete="off"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4  border-transparent"
          type="text"
          name="add-comment"
          placeholder="Add a comment..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <button
          className={`text-sm font-bold text-blue-medium ${
            !comment && "opacity-25"
          }`}
          type="button"
          disabled={comment.length < 1}
          onClick={handleSubmitComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}

AddComment.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  setComments: PropTypes.func.isRequired,
  commentInput: PropTypes.object.isRequired,
};
