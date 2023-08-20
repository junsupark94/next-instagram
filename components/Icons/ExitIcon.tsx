import React from "react";

type ExitIconProps = {
  className?: string;
};

const ExitIcon: React.FC<ExitIconProps> = ({ className }) => {
  return (
    <svg
      aria-label="Close"
      color="currentColor"
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      className={className}
    >
      <title>Close</title>
      <polyline
        fill="none"
        points="20.643 3.357 12 12 3.353 20.647"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      ></polyline>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        x1="20.649"
        x2="3.354"
        y1="20.649"
        y2="3.354"
      ></line>
    </svg>
  );
};
export default ExitIcon;
