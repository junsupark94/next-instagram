import React from "react";

type ShortcutsIconProps = {
  className?: string;
};

const ShortcutsIcon: React.FC<ShortcutsIconProps> = ({className}) => {
  return (
    <svg
      aria-label="Keyboard shortcuts"
      className={className}
      color="rgb(245, 245, 245)"
      fill="rgb(245, 245, 245)"
      role="img"
      viewBox="0 0 24 24"
    >
      <title>Keyboard shortcuts</title>
      <path d="M19 1H5C2.794 1 1 2.794 1 5v14c0 2.206 1.794 4 4 4h14c2.206 0 4-1.794 4-4V5c0-2.206-1.794-4-4-4Zm2 18c0 1.103-.897 2-2 2H5c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h14c1.103 0 2 .897 2 2v14Z"></path>
      <path d="M16 11c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3v1h-2V8c0-1.654-1.346-3-3-3S5 6.346 5 8s1.346 3 3 3h1v2H8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3v-1h2v1c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3h-1v-2h1Zm-1-3a1 1 0 1 1 1 1h-1V8ZM7 8a1 1 0 0 1 2 0v1H8c-.552 0-1-.449-1-1Zm2 8a1.001 1.001 0 0 1-2 0c0-.551.448-1 1-1h1v1Zm2-5h2v2h-2v-2Zm6 5a1 1 0 0 1-2 0v-1h1c.552 0 1 .449 1 1Z"></path>
    </svg>
  );
};
export default ShortcutsIcon;
