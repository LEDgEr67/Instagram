import StoryPreview from "./story-preview";

export default function Stories(props) {
  return (
    <div className="rounded w-full h-28 bg-white border-gray-primary mb-6 border">
      <ul className="flex pt-2 pb-2 overflow-x-scroll">
        <li>
          <StoryPreview username="none" />
        </li>
        <li>
          <StoryPreview username="none" />
        </li>
        <li>
          <StoryPreview username="none" />
        </li>
        <li>
          <StoryPreview username="none" />
        </li>
      </ul>
    </div>
  );
}
