import StoryPreview from "./story-preview";

export default function Stories(props) {
  return (
    <div className="relative rounded col-span-2 w-full overflow-x-auto scrollbar-hide overflow-y-hidden h-28 bg-white border-gray-primary mb-6 pr-2 border">
      <div className="block pr-2">
        <ul className="absolute flex pt-2 pb-2 pr-2 ">
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
    </div>
  );
}
