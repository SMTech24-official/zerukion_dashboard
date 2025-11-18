// components/MediaButton.tsx
import React from "react";

type MediaButtonProps = {
  type: "pound" | "calender";
};

const icons = {
  pound: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 10C4 9.44772 4.44772 9 5 9H13C13.5523 9 14 9.44772 14 10C14 10.5523 13.5523 11 13 11H5C4.44772 11 4 10.5523 4 10ZM4 14C4 13.4477 4.44772 13 5 13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H5C4.44772 15 4 14.5523 4 14Z"
        fill="#00A63E"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 10C6 5.65859 9.26679 2 13.4615 2C16.2164 2 18.5879 3.59423 19.8739 5.90634C20.1424 6.38899 19.9687 6.99788 19.4861 7.26633C19.0034 7.53478 18.3945 7.36114 18.1261 6.87849C17.1507 5.12493 15.4076 4 13.4615 4C10.5191 4 8 6.60942 8 10V14C8 17.3906 10.5191 20 13.4615 20C15.4076 20 17.1507 18.8751 18.1261 17.1215C18.3945 16.6389 19.0034 16.4652 19.4861 16.7337C19.9687 17.0021 20.1424 17.611 19.8739 18.0937C18.5879 20.4058 16.2164 22 13.4615 22C9.26679 22 6 18.3414 6 14V10Z"
        fill="#00A63E"
      />
    </svg>
  ),
  calender: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M5.33325 1.33325V3.33325"
        stroke="#00a63e"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6667 1.33325V3.33325"
        stroke="#00a63e"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.33325 6.06006H13.6666"
        stroke="#00a63e"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 5.66659V11.3333C14 13.3333 13 14.6666 10.6667 14.6666H5.33333C3 14.6666 2 13.3333 2 11.3333V5.66659C2 3.66659 3 2.33325 5.33333 2.33325H10.6667C13 2.33325 14 3.66659 14 5.66659Z"
        stroke="#00a63e"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.4632 9.13338H10.4692"
        stroke="#00a63e"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.4632 11.1334H10.4692"
        stroke="#00a63e"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.99691 9.13338H8.0029"
        stroke="#00a63e"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.99691 11.1334H8.0029"
        stroke="#00a63e"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.52962 9.13338H5.53561"
        stroke="#00a63e"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.52962 11.1334H5.53561"
        stroke="#00a63e"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
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
