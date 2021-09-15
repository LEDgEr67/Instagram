import StoryPreview from "./story-preview";

export default function Stories(props) {
  return (
    <div className="relative rounded col-span-2 w-full overflow-x-auto scrollbar-hide overflow-y-hidden h-28 bg-white border-gray-primary mb-6 pr-2 border">
      <div className="block pr-2">
        <ul className="absolute flex pt-2 pb-2 pr-2 ">
          <li>
            <StoryPreview username="remo" />
          </li>

          <li>
            <StoryPreview username="hemanth" />
          </li>
          <li>
            <StoryPreview username="nadal" />
          </li>
          <li>
            <StoryPreview username="musk" />
          </li>
          <li>
            <StoryPreview username="bezoz" />
          </li>
          <li>
            <StoryPreview username="zuckerberg" />
          </li>
          <li>
            <StoryPreview username="thoufic" />
          </li>
          <li>
            <StoryPreview username="kama" />
          </li>
          <li>
            <StoryPreview username="taylor " />
          </li>
          <li>
            <StoryPreview username="katherine" />
          </li>
          <li>
            <StoryPreview username="chan" />
          </li>
        </ul>
      </div>
    </div>
  );
}
