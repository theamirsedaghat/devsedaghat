import React from "react";

const HamburgerMenu: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <>
      <svg
        width="35"
        height="22"
        viewBox="0 0 35 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M0 2C0 0.895431 0.895431 0 2 0H33C34.1046 0 35 0.895431 35 2C35 3.10457 34.1046 4 33 4H2C0.89543 4 0 3.10457 0 2Z"
          fill="white"
        />
        <path
          d="M8 11C8 9.89543 8.89543 9 10 9H33C34.1046 9 35 9.89543 35 11C35 12.1046 34.1046 13 33 13H10C8.89543 13 8 12.1046 8 11Z"
          fill="white"
        />
        <path
          d="M15 20C15 18.8954 15.8954 18 17 18H33C34.1046 18 35 18.8954 35 20C35 21.1046 34.1046 22 33 22H17C15.8954 22 15 21.1046 15 20Z"
          fill="white"
        />
      </svg>
    </>
  );
};

export default HamburgerMenu;
