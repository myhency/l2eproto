import { createSvgIcon } from '@mui/material/utils';

export const MainPlay = createSvgIcon(
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.4" />
    <g filter="url(#filter0_d_310_11948)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8667 18.1C21.9333 17.3 21.9333 15.7 20.8667 14.9L16.2 11.4C14.8815 10.4111 13 11.3519 13 13V20C13 21.6481 14.8815 22.5889 16.2 21.6L20.8667 18.1Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_310_11948"
        x="9"
        y="8.99634"
        width="16.6667"
        height="19.0073"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_310_11948" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_310_11948" result="shape" />
      </filter>
    </defs>
  </svg>,
  'MainPlay'
);
