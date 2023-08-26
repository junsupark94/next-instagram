import React from "react";

type ActivityIconProps = {
  className?: string
};

const ActivityIcon: React.FC<ActivityIconProps> = ({className}) => {
  return (
    <svg
      aria-label="Your activity"
      className={className}
      color="currentColor"
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
    >
      <title>Your activity</title>
      <path
        d="M12 1.505a10.5 10.5 0 1 1-7.424 17.924"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <polyline
        fill="none"
        points="8.893 15.108 12 12 12.012 12.012 12.012 5.793"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polyline>
      <circle cx="7.24" cy="2.651" r="1.125"></circle>
      <circle cx="3.515" cy="5.83" r="1.125"></circle>
      <circle cx="1.636" cy="10.353" r="1.125"></circle>
      <circle cx="2.01" cy="15.235" r="1.125"></circle>
    </svg>
  );
};
export default ActivityIcon;
