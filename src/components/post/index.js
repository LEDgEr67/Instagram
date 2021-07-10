import { useRef } from "react";
import PropTypes from "prop-types";
import Header from "./header";

export default function Post({ content }) {
  console.log(content);
  return (
    <div>
      <Header username={content.username} />
      <img className="object-cover" src={content.imageSrc} alt="" />
      <p>post</p>
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    dateCreated: PropTypes.string.isRequired,
  }),
};
