import PropTypes from "prop-types";

export default function Image({ src, caption }) {
  return (
    <img
      src={src}
      alt={caption}
      className="max-h-full"
      style={{ maxHeight: "636px", width: "100%", objectFit: "cover" }}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
