import { Link } from "react-router-dom";

export default function Header({ username }) {
  return (
    <div className="flex border-b relative border-gray-primary h-auto p-4 justify-between">
      <div className="flex items-center">
        <Link to={`/p/${username}`} className="flex items-center align-middle">
          <img
            className="rounded-full h-8 w-8 flex mr-3"
            src={`/images/avatars/${username}.jpg`}
            alt={`${username} profile_picture`}
          />
          <p className="font-bold">{username}</p>
        </Link>
      </div>
      <div className="">
        <svg
          aria-label="More options"
          className="pt-1 top-1"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 48 48"
          width="24"
        >
          <circle
            clip-rule="evenodd"
            cx="8"
            cy="24"
            fill-rule="evenodd"
            r="4.5"
          ></circle>
          <circle
            clip-rule="evenodd"
            cx="24"
            cy="24"
            fill-rule="evenodd"
            r="4.5"
          ></circle>
          <circle
            clip-rule="evenodd"
            cx="40"
            cy="24"
            fill-rule="evenodd"
            r="4.5"
          ></circle>
        </svg>
      </div>
    </div>
  );
}
