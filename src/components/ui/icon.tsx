// components/MediaButton.tsx
import React from "react";

type MediaButtonProps = {
  type:
    | "pound"
    | "calender"
    | "man"
    | "groupOfMan"
    | "awared"
    | "location"
    | "recent"
    | "search"
    | "applicaton";
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
  man: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
        stroke="#00A63E"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 3.12793C16.8578 3.3503 17.6174 3.85119 18.1597 4.55199C18.702 5.25279 18.9962 6.11382 18.9962 6.99993C18.9962 7.88604 18.702 8.74707 18.1597 9.44787C17.6174 10.1487 16.8578 10.6496 16 10.8719"
        stroke="#00A63E"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299"
        stroke="#00A63E"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
        stroke="#00A63E"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  groupOfMan: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.5 11C15.5 9.067 13.933 7.5 12 7.5C10.067 7.5 8.5 9.067 8.5 11C8.5 12.933 10.067 14.5 12 14.5C13.933 14.5 15.5 12.933 15.5 11Z"
        stroke="#00A63E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.4827 11.3499C15.8047 11.4475 16.1462 11.5 16.5 11.5C18.433 11.5 20 9.933 20 8C20 6.067 18.433 4.5 16.5 4.5C14.6851 4.5 13.1928 5.8814 13.0173 7.65013"
        stroke="#00A63E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.9827 7.65013C10.8072 5.8814 9.31492 4.5 7.5 4.5C5.567 4.5 4 6.067 4 8C4 9.933 5.567 11.5 7.5 11.5C7.85381 11.5 8.19535 11.4475 8.51727 11.3499"
        stroke="#00A63E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 16.5C22 13.7386 19.5376 11.5 16.5 11.5"
        stroke="#00A63E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 19.5C17.5 16.7386 15.0376 14.5 12 14.5C8.96243 14.5 6.5 16.7386 6.5 19.5"
        stroke="#00A63E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 11.5C4.46243 11.5 2 13.7386 2 16.5"
        stroke="#00A63E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  awared: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10 14.6599V16.2859C9.99622 16.6285 9.90448 16.9644 9.73358 17.2614C9.56268 17.5584 9.31834 17.8065 9.024 17.9819C8.39914 18.4447 7.89084 19.0469 7.53948 19.7406C7.18813 20.4343 7.00341 21.2003 7 21.9779"
        stroke="#00C950"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 14.6599V16.2859C14.0038 16.6285 14.0955 16.9644 14.2664 17.2614C14.4373 17.5584 14.6817 17.8065 14.976 17.9819C15.6009 18.4447 16.1092 19.0469 16.4605 19.7406C16.8119 20.4343 16.9966 21.2003 17 21.9779"
        stroke="#00C950"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 9H19.5C20.163 9 20.7989 8.73661 21.2678 8.26777C21.7366 7.79893 22 7.16304 22 6.5C22 5.83696 21.7366 5.20107 21.2678 4.73223C20.7989 4.26339 20.163 4 19.5 4H18"
        stroke="#00C950"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 22H20"
        stroke="#00C950"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2H7C6.73478 2 6.48043 2.10536 6.29289 2.29289C6.10536 2.48043 6 2.73478 6 3V9Z"
        stroke="#00C950"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 9H4.5C3.83696 9 3.20107 8.73661 2.73223 8.26777C2.26339 7.79893 2 7.16304 2 6.5C2 5.83696 2.26339 5.20107 2.73223 4.73223C3.20107 4.26339 3.83696 4 4.5 4H6"
        stroke="#00C950"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  location: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
        stroke="#00A63E"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
        stroke="#00A63E"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  recent: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#00C950"
        stroke-width="2"
      />
      <path
        d="M9 9L13.5 13.5M16.5 7.5L10.5 13.5"
        stroke="#00C950"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  ),
  search: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M14 14L11.1067 11.1067"
        stroke="#717182"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
        stroke="#717182"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  applicaton: (
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
        d="M12.0005 3C10.8186 3 9.64827 3.23279 8.55634 3.68508C7.46441 4.13738 6.47225 4.80031 5.63653 5.63604C4.8008 6.47177 4.13786 7.46392 3.68557 8.55585C3.23328 9.64778 3.00049 10.8181 3.00049 12C3.00049 13.1819 3.23328 14.3522 3.68557 15.4442C4.13786 16.5361 4.8008 17.5282 5.63653 18.364C6.47225 19.1997 7.46441 19.8626 8.55634 20.3149C9.64827 20.7672 10.8186 21 12.0005 21C14.3874 21 16.6766 20.0518 18.3644 18.364C20.0523 16.6761 21.0005 14.3869 21.0005 12C21.0005 9.61305 20.0523 7.32387 18.3644 5.63604C16.6766 3.94821 14.3874 3 12.0005 3ZM1.00049 12C1.00049 5.925 5.92549 1 12.0005 1C18.0755 1 23.0005 5.925 23.0005 12C23.0005 18.075 18.0755 23 12.0005 23C5.92549 23 1.00049 18.075 1.00049 12ZM12.0005 10C12.2657 10 12.5201 10.1054 12.7076 10.2929C12.8951 10.4804 13.0005 10.7348 13.0005 11V17C13.0005 17.2652 12.8951 17.5196 12.7076 17.7071C12.5201 17.8946 12.2657 18 12.0005 18C11.7353 18 11.4809 17.8946 11.2934 17.7071C11.1058 17.5196 11.0005 17.2652 11.0005 17V11C11.0005 10.7348 11.1058 10.4804 11.2934 10.2929C11.4809 10.1054 11.7353 10 12.0005 10ZM12.0005 8C12.2657 8 12.5201 7.89464 12.7076 7.70711C12.8951 7.51957 13.0005 7.26522 13.0005 7C13.0005 6.73478 12.8951 6.48043 12.7076 6.29289C12.5201 6.10536 12.2657 6 12.0005 6C11.7353 6 11.4809 6.10536 11.2934 6.29289C11.1058 6.48043 11.0005 6.73478 11.0005 7C11.0005 7.26522 11.1058 7.51957 11.2934 7.70711C11.4809 7.89464 11.7353 8 12.0005 8Z"
        fill="#00A63E"
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
