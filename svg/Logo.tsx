type PropTypes = {
  isDarkMode: boolean
}

export default function Logo({ isDarkMode }: PropTypes) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.15458 1.76799L3.14831 6.43664L1.9273 3.62619C1.68056 4.59063 1.66866 5.67477 1.76143 6.64683C2.2906 11.977 6.80807 18.2289 12.7931 23.4742C13.8887 22.3383 14.9582 21.1773 15.9839 20.002C16.4698 19.4452 16.9457 18.8849 17.4101 18.3228C13.2028 13.1053 9.99622 7.74829 9.17506 3.03795C8.88814 2.2465 8.06029 1.97575 7.35135 1.80105L8.17286 3.21664L5.94238 1.61744C5.34096 1.60397 4.6871 1.66047 4.15458 1.76799ZM30.523 1.61787C30.3149 2.60411 30.1142 3.59042 29.451 4.57666C29.4393 3.58479 29.3019 2.65576 28.8912 1.86332C28.2883 2.05164 27.4287 2.39727 27.303 3.03795C26.3487 8.51166 22.1746 14.8587 16.9503 20.8452C12.3138 26.158 6.83885 31.156 1.96706 34.8665C7.7319 34.0097 15.1208 30.3122 21.3867 25.3842C23.3699 23.8244 25.2387 22.1412 26.9157 20.3949C26.4364 20.475 25.9455 20.5111 25.4699 20.521L29.6343 17.2916C32.483 13.6979 34.3846 9.99088 34.7166 6.64683C34.7817 5.99069 34.814 5.02739 34.6708 4.16698C34.5276 3.30649 34.2087 2.60439 33.7266 2.28804C33.1084 1.88242 32.0142 1.63468 30.9067 1.61473C30.7788 1.61227 30.6508 1.61331 30.523 1.61787ZM23.608 25.2329C23.1376 25.6265 22.6614 26.0129 22.1795 26.3922C21.2699 27.1076 20.3404 27.7975 19.3922 28.4609C21.0255 29.5214 22.6901 30.485 24.3448 31.3287C25.7211 31.4928 27.097 31.66 28.4725 31.8303C28.078 32.2088 27.6235 32.4631 27.1229 32.6348C29.7253 33.7527 32.2438 34.5295 34.5111 34.8665C31.0098 32.1999 27.1971 28.8684 23.608 25.2329Z"
        fill={`${isDarkMode ? "white" : "black"}`}
      />
    </svg>
  )
}
