import StoryPreview from "./story-preview";

export default function Stories(props) {
  return (
    <div className="rounded w-full h-28 bg-white border-gray-primary mb-6 border">
      <span className="flex pt-2 pb-2">
        <StoryPreview username="none" />
      </span>
    </div>
  );
}
