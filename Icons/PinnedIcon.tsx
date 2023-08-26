import React from "react";

type PinnedIconProps = {
  className?: string;
};

const PinnedIcon: React.FC<PinnedIconProps> = ({ className }) => {
  return (
    <svg
      aria-label="Pinned post icon"
      className={className}
      color="rgb(255, 255, 255)"
      fill="rgb(255, 255, 255)"
      height="22"
      role="img"
      viewBox="0 0 24 24"
      width="22"
    >
      <title>Pinned post icon</title>
      <path d="m22.707 7.583-6.29-6.29a1 1 0 0 0-1.414 0 5.183 5.183 0 0 0-1.543 3.593L8.172 8.79a5.161 5.161 0 0 0-4.768 1.42 1 1 0 0 0 0 1.414l3.779 3.778-5.89 5.89a1 1 0 1 0 1.414 1.414l5.89-5.89 3.778 3.779a1 1 0 0 0 1.414 0 5.174 5.174 0 0 0 1.42-4.769l3.905-5.287a5.183 5.183 0 0 0 3.593-1.543 1 1 0 0 0 0-1.414Z"></path>
    </svg>
  );
};
export default React.memo(PinnedIcon);
