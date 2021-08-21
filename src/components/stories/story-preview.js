export default function StoryPreview(props) {
  return (
    <div className="flex flex-col justify ml-4 mt-2 min-w-14">
      <div className="relative rounded-full">
        <img className=" w-14 h-14" src="images/story-outline.png" alt="" />
        <img
          className="absolute top-0 bottom-0 p-1 rounded-full w-14 h-14"
          src="images/avatars/default.png"
          alt=""
        />
      </div>
      <span className="text-center text-xs mt-1">{props.username}</span>
    </div>
  );
}
