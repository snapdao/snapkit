import { IconProps } from './types'

export function Expired({
  className,
  width = '24',
  height = '24',
  color,
  style
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      style={{
        color,
        ...(style && { style })
      }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2132 7.476L17.3029 6.38625L18.3634 7.44675L17.2737 8.5365C18.3505 9.88438 18.8704 11.5934 18.7265 13.3126C18.5826 15.0318 17.7859 16.6306 16.5 17.7808C15.2142 18.9309 13.5367 19.5451 11.8122 19.4971C10.0876 19.4491 8.44693 18.7425 7.22703 17.5226C6.00713 16.3027 5.30062 14.662 5.25262 12.9375C5.20461 11.213 5.81874 9.53551 6.96889 8.24963C8.11903 6.96375 9.71789 6.16706 11.4371 6.02319C13.1563 5.87931 14.8653 6.39917 16.2132 7.476ZM11.9997 18C12.6891 18 13.3718 17.8642 14.0088 17.6004C14.6457 17.3365 15.2245 16.9498 15.712 16.4623C16.1995 15.9748 16.5862 15.396 16.85 14.7591C17.1139 14.1221 17.2497 13.4394 17.2497 12.75C17.2497 12.0606 17.1139 11.3779 16.85 10.7409C16.5862 10.104 16.1995 9.5252 15.712 9.03769C15.2245 8.55018 14.6457 8.16347 14.0088 7.89963C13.3718 7.6358 12.6891 7.5 11.9997 7.5C10.6073 7.5 9.27193 8.05312 8.28737 9.03769C7.3028 10.0223 6.74968 11.3576 6.74968 12.75C6.74968 14.1424 7.3028 15.4777 8.28737 16.4623C9.27193 17.4469 10.6073 18 11.9997 18ZM8.99968 3.75H14.9997V5.25H8.99968V3.75Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.25 9H12.75V13H11.25V9ZM12.75 14.25H11.25V15.75H12.75V14.25Z"
        fill="currentColor"
      />
    </svg>
  )
}