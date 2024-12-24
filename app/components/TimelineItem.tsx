interface TimelineItemProps {
  date?: string;
  title: string;
  description: string;
  imageUrl?: string; // URL of the SVG to display on hover
  isReversed?: boolean; // Controls the position of content
  hideLabel?: boolean; // Controls the visibility of the label
  isLabelSvg?: boolean; // Controls if the content should transition to SVG on hover
  linkUrl?: string; // URL for the content box link
}

const TimelineItem = ({
  date,
  title,
  description,
  imageUrl = "/api/placeholder/400/320",
  isReversed = false,
  hideLabel = false,
  isLabelSvg = false,
  linkUrl,
}: TimelineItemProps) => {
  const Label = () => (
    <span className="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] text-black py-2 px-4 rounded-full font-bold">
      {date}
    </span>
  );

  const Content = () => {
    const InnerContent = () => (
      <div
        className={`relative p-[2px] rounded-xl ${
          isLabelSvg
            ? "bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] group hover:bg-none hover:p-0"
            : "bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]"
        }`}
      >
        {/* Inner Content */}
        <div
          className={`bg-[#1c1c1c] p-5 rounded-xl w-full min-h-[140px] relative z-10 transition-all duration-300 ${
            isLabelSvg ? "group-hover:opacity-0" : ""
          }`}
        >
          <p className="text-gray-400">{description}</p>
        </div>
        {/* SVG or Image Content */}
        {isLabelSvg && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-0">
            <img src={imageUrl} alt="Content SVG" />
          </div>
        )}
      </div>
    );

    return linkUrl ? (
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <InnerContent />
      </a>
    ) : (
      <InnerContent />
    );
  };

  const Title = () => (
    <h3 className="absolute top-[-50px] left-0 text-2xl font-bold text-white pointer-events-none">
      {title}
    </h3>
  );

  const renderLeft = () =>
    isReversed ? (
      <div className="relative group">
        <Title />
        <Content />
      </div>
    ) : hideLabel ? null : (
      <Label />
    );

  const renderRight = () =>
    isReversed ? (
      hideLabel ? null : <Label />
    ) : (
      <div className="relative group">
        <Title />
        <Content />
      </div>
    );

  return (
    <div className="relative pt-48 pb-48 flex justify-center items-center w-full">
      {/* Left Side */}
      <div className="w-5/12 text-right pr-12">{renderLeft()}</div>

      {/* Middle Connector */}
      <div className="relative z-10 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] w-4 h-4 rounded-full" />

      {/* Right Side */}
      <div className="w-5/12 text-left pl-12">{renderRight()}</div>
    </div>
  );
};

export default TimelineItem;
