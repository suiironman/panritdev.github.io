import React, { useState } from "react";


function Navbar() {
  return (
      <div className="bg-base-100 text-base-content sticky top-0 z-30 flex w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-md">
      <nav className="navbar w-full">
        <div className="flex-1">
          <a href="#home" className="btn btn-sm btn-ghost text-xl">
            Panrit.Dev
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal lg:menu-horizontal rounded-box px-1 text-md">
            <li>
              <a  href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Work</a>
            </li>
            <li>
              <a href="https://twitter.com/Panrit_Dev">
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.6526 3.80782H43.3995L28.6594 20.6548L46 43.5798H32.4225L21.7881 29.6759L9.61989 43.5798H2.86886L18.6349 25.56L2 3.80782H15.9222L25.5348 16.5165L36.6526 3.80782ZM34.2846 39.5414H38.0232L13.8908 7.63408H9.87892L34.2846 39.5414Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/panrit-dev/">
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2307_1318)">
                    <path
                      d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2307_1318">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>

            <li>
              <a href="https://github.com/suiironman">
                <svg
                  width="25"
                  height="30"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    clip-path="url(#clip0_2307_1311)"
                    filter="url(#filter0_d_2307_1311)"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.0199 0C14.7375 0 4 10.8167 4 24.1983C4 34.895 10.8799 43.9495 20.4241 47.1542C21.6174 47.3951 22.0545 46.6335 22.0545 45.9929C22.0545 45.4319 22.0151 43.509 22.0151 41.5055C15.3334 42.948 13.942 38.6209 13.942 38.6209C12.8682 35.8164 11.2772 35.0956 11.2772 35.0956C9.09022 33.6132 11.4365 33.6132 11.4365 33.6132C13.8623 33.7735 15.1353 36.0971 15.1353 36.0971C17.2824 39.7827 20.7422 38.7413 22.1341 38.1002C22.3328 36.5377 22.9695 35.456 23.6455 34.8552C18.3163 34.2942 12.7094 32.211 12.7094 22.9161C12.7094 20.2719 13.6632 18.1086 15.1746 16.4261C14.9361 15.8253 14.1008 13.3409 15.4135 10.0157C15.4135 10.0157 17.4417 9.3746 22.0146 12.4996C23.9725 11.9699 25.9916 11.7005 28.0199 11.6982C30.048 11.6982 32.1154 11.979 34.0246 12.4996C38.5981 9.3746 40.6262 10.0157 40.6262 10.0157C41.9389 13.3409 41.1031 15.8253 40.8646 16.4261C42.4158 18.1086 43.3303 20.2719 43.3303 22.9161C43.3303 32.211 37.7234 34.2539 32.3544 34.8552C33.2296 35.6163 33.9848 37.0583 33.9848 39.3421C33.9848 42.5871 33.9454 45.1915 33.9454 45.9924C33.9454 46.6335 34.383 47.3951 35.5758 47.1547C45.12 43.9491 51.9999 34.895 51.9999 24.1983C52.0392 10.8167 41.2624 0 28.0199 0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_2307_1311"
                      x="0"
                      y="0"
                      width="56"
                      height="56"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2307_1311"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2307_1311"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_2307_1311">
                      <rect
                        width="48"
                        height="48"
                        fill="white"
                        transform="translate(4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
  );
}

export default Navbar;
