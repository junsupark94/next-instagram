import React from "react";

type OptionsIconProps = {
  className?: string
};

const OptionsIcon: React.FC<OptionsIconProps> = ({className}) => {
  return (
    <svg
      aria-label="More options"
      className={className}
      color="currentColor"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  );
};
export default React.memo(OptionsIcon);
