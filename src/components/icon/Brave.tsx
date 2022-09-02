import React from 'react'
import { IconProps } from './types'

export function Brave({ className, width = '56', height = '56' }: IconProps) {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 18.693L48.4088 14.3715L49.5154 11.8907C49.5849 11.7342 49.6056 11.5603 49.5746 11.3919C49.5436 11.2235 49.4625 11.0683 49.3418 10.9468L46.333 7.90548C45.6871 7.25009 44.8684 6.79166 43.972 6.58358C43.0757 6.37551 42.1387 6.42635 41.2701 6.73017L40.4275 7.0231L35.8312 2.04339L28.0344 2H27.9837L20.1363 2.06148L15.5435 7.08096L14.7262 6.79165C13.852 6.48423 12.9083 6.43253 12.0058 6.64263C11.1032 6.85273 10.2793 7.31591 9.6308 7.97781L6.56776 11.077C6.47163 11.1739 6.40706 11.2976 6.38254 11.4318C6.35801 11.5661 6.37468 11.7046 6.43035 11.8292L7.58396 14.404L6 18.7219L7.02342 22.6167L11.6921 40.3657C12.23 42.4103 13.4673 44.2018 15.1891 45.4286C15.1891 45.4286 20.8559 49.4247 26.4468 53.0555C26.8889 53.4085 27.4379 53.6007 28.0036 53.6007C28.5694 53.6007 29.1183 53.4085 29.5604 53.0555C35.842 48.9401 40.8109 45.4142 40.8109 45.4142C42.5313 44.1867 43.7673 42.3953 44.3043 40.3513L48.9476 22.5951L50 18.693Z" fill="url(#paint0_linear_273_6304)" />
      <path d="M29.2856 33.9865C28.9879 33.8533 28.6809 33.7421 28.367 33.6538H27.8137C27.4998 33.7421 27.1928 33.8533 26.8952 33.9865L25.5029 34.5651C25.0617 34.7496 24.3529 35.0786 23.9298 35.2884L21.3694 36.6228C21.2767 36.6529 21.1951 36.7101 21.1351 36.7869C21.0752 36.8638 21.0396 36.9568 21.033 37.0541C21.0264 37.1513 21.049 37.2483 21.098 37.3326C21.147 37.4169 21.2201 37.4845 21.3079 37.5269L23.532 39.0964C23.9225 39.3712 24.5373 39.8558 24.899 40.1813L25.5246 40.7201C25.8862 41.0311 26.4757 41.5483 26.8337 41.8665L27.4268 42.3909C27.61 42.5436 27.841 42.6272 28.0795 42.6272C28.318 42.6272 28.549 42.5436 28.7323 42.3909L29.3543 41.8484L30.6634 40.7057L31.2926 40.156C31.6543 39.8414 32.2654 39.3568 32.656 39.0711L34.8801 37.4799C34.968 37.4377 35.0412 37.3698 35.09 37.2853C35.1388 37.2008 35.1609 37.1035 35.1535 37.0062C35.1461 36.9089 35.1094 36.8161 35.0484 36.7399C34.9873 36.6638 34.9047 36.6078 34.8113 36.5794L32.2546 35.2812C31.8279 35.0642 31.1191 34.7387 30.6742 34.5579L29.2856 33.9865Z" fill="white" />
      <path d="M45.0529 19.6584L45.1252 19.4269C45.1295 19.1173 45.1101 18.8078 45.0673 18.5011C44.852 17.9534 44.5754 17.4317 44.2428 16.9461L42.7963 14.8233C42.5286 14.4255 42.073 13.7963 41.7656 13.4238L39.8272 10.9972C39.6504 10.7607 39.4584 10.5361 39.2522 10.3246H39.2125C39.2125 10.3246 38.8219 10.3933 38.3518 10.4837L35.39 11.0551L34.0917 11.3046C33.6607 11.3249 33.2298 11.2623 32.8224 11.1202L30.4826 10.3644C30.027 10.2161 29.2748 10.0028 28.8083 9.90149C28.3166 9.84924 27.8208 9.84924 27.3292 9.90149C26.8627 10.01 26.1105 10.2197 25.6548 10.368L23.315 11.1274C22.9076 11.2695 22.4767 11.3321 22.0457 11.3119L20.7474 11.066L17.782 10.4982C17.3119 10.4078 16.925 10.3355 16.9214 10.3391H16.8816C16.6755 10.5505 16.4834 10.7752 16.3066 11.0117L14.3718 13.4383C14.0753 13.7999 13.6088 14.4436 13.3412 14.8378L11.8946 16.9606C11.6448 17.3267 11.4166 17.707 11.2112 18.0997C11.0872 18.5376 11.0216 18.99 11.0159 19.445L11.0882 19.6765C11.123 19.8251 11.1677 19.9713 11.222 20.114C11.5222 20.4757 12.0357 21.076 12.3648 21.4268L17.4276 26.8079C17.5957 27.0041 17.7082 27.2417 17.7533 27.4961C17.7985 27.7505 17.7747 28.0123 17.6844 28.2544L16.8563 30.2181C16.668 30.7383 16.654 31.3057 16.8165 31.8346L16.9828 32.2903C17.2546 33.0303 17.7206 33.6836 18.3317 34.1816L19.1273 34.8289C19.334 34.978 19.5752 35.0721 19.8282 35.1025C20.0812 35.1329 20.3378 35.0985 20.5739 35.0025L23.4018 33.6536C23.9209 33.3937 24.4066 33.072 24.8484 32.6953L27.1122 30.652C27.2024 30.5706 27.2753 30.472 27.3266 30.3619C27.378 30.2517 27.4067 30.1325 27.411 30.0111C27.4154 29.8896 27.3954 29.7686 27.3521 29.6551C27.3089 29.5415 27.2433 29.4379 27.1592 29.3502L22.0493 25.9074C21.8558 25.7701 21.718 25.568 21.661 25.3377C21.6039 25.1074 21.6313 24.8643 21.7383 24.6525L23.7201 20.9277C23.8328 20.6997 23.8994 20.4517 23.9162 20.1979C23.9329 19.9441 23.8995 19.6895 23.8177 19.4486C23.5716 18.9892 23.1743 18.6289 22.693 18.4288L16.4802 16.0818C16.0317 15.9119 16.057 15.7202 16.5308 15.6913L20.1797 15.3296C20.7519 15.2932 21.3262 15.3445 21.883 15.4815L25.0581 16.3675C25.2835 16.4355 25.4767 16.5828 25.6017 16.7823C25.7267 16.9819 25.7751 17.2199 25.738 17.4524L24.4904 24.2656C24.4069 24.643 24.3861 25.0315 24.4289 25.4156C24.4795 25.5783 24.9062 25.7772 25.3727 25.8929L27.3075 26.3052C27.8693 26.4085 28.4453 26.4085 29.0072 26.3052L30.7466 25.911C31.2131 25.8062 31.6362 25.5856 31.6905 25.4228C31.7321 25.0385 31.7101 24.65 31.6254 24.2728L30.3705 17.4596C30.3334 17.2272 30.3818 16.9891 30.5068 16.7896C30.6318 16.5901 30.825 16.4427 31.0504 16.3747L34.2255 15.4851C34.7822 15.348 35.3566 15.2968 35.9288 15.3332L39.5777 15.6732C40.0551 15.7166 40.0768 15.8938 39.632 16.0637L33.4227 18.418C32.9414 18.6181 32.5441 18.9783 32.298 19.4378C32.1333 19.9243 32.1684 20.4562 32.3957 20.9169L34.381 24.6417C34.488 24.8535 34.5154 25.0966 34.4584 25.3268C34.4013 25.5571 34.2635 25.7593 34.07 25.8966L28.9638 29.3465C28.8797 29.4342 28.8141 29.5379 28.7708 29.6515C28.7276 29.765 28.7075 29.886 28.7119 30.0074C28.7163 30.1288 28.745 30.2481 28.7963 30.3582C28.8477 30.4683 28.9206 30.567 29.0108 30.6484L31.2782 32.6917C31.7201 33.0671 32.2058 33.3876 32.7248 33.6464L35.5527 34.9917C35.7891 35.0871 36.0459 35.1209 36.2989 35.0899C36.5519 35.0589 36.7929 34.9641 36.9993 34.8145L37.7949 34.1635C38.4067 33.6646 38.8727 33.01 39.1438 32.2686L39.3101 31.8129C39.4726 31.284 39.4586 30.7166 39.2703 30.1964L38.4386 28.2327C38.3483 27.9906 38.3245 27.7288 38.3696 27.4744C38.4148 27.22 38.5273 26.9824 38.6953 26.7862L43.7582 21.3978C44.0873 21.0362 44.5972 20.4576 44.8974 20.0851C44.9586 19.9465 45.0105 19.8039 45.0529 19.6584Z" fill="white" />
      <defs>
        <linearGradient id="paint0_linear_273_6304" x1="6.01447" y1="27.8026" x2="49.9855" y2="27.8026" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1562B" />
          <stop offset="0.3" stopColor="#F1542B" />
          <stop offset="0.41" stopColor="#F04D2A" />
          <stop offset="0.49" stopColor="#EF4229" />
          <stop offset="0.5" stopColor="#EF4029" />
          <stop offset="0.56" stopColor="#E83E28" />
          <stop offset="0.67" stopColor="#E13C26" />
          <stop offset="1" stopColor="#DF3C26" />
        </linearGradient>
      </defs>
    </svg>
  )
}
