// components/MediaButton.tsx
import React from "react";

type MediaButtonProps = {
  type: "buttonIcon";
};

const icons = {
  buttonIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M14.1743 5.26477L4.85925 14.5798"
        stroke="url(#paint0_linear_33001_64)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.4812 4.85956H14.5812V12.9596"
        stroke="url(#paint1_linear_33001_64)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_33001_64"
          x1="4.85925"
          y1="9.92227"
          x2="14.1743"
          y2="9.92227"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.201923" stopColor="#7841FF" />
          <stop offset="1" stopColor="#FF4392" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_33001_64"
          x1="6.4812"
          y1="8.90956"
          x2="14.5812"
          y2="8.90956"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.201923" stopColor="#7841FF" />
          <stop offset="1" stopColor="#FF4392" />
        </linearGradient>
      </defs>
    </svg>
  ),
};

export const MediaButton: React.FC<MediaButtonProps> = ({ type }) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      {icons[type]}
    </div>
  );
};
