import { IconProps } from './types'

export function Receive({
  className,
  width = '48',
  height = '48',
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
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 35.0001L35.0002 32.0001L26.5608 23.5607L38.0607 12.0608L35.9393 9.93945L24.4395 21.4393L16.0002 13.0001L13 13.0001L13 35.0001L35 35.0001ZM30.7576 32.0001L16 17.2425L16 32.0001L30.7576 32.0001Z"
      />
    </svg>
  )
}
