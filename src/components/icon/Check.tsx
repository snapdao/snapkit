import { IconProps } from './types'

export function Check({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5304 7.03039L10.5304 17.0304L10.0001 17.5607L9.46973 17.0304L3.96973 11.5304L5.03039 10.4697L10.0001 15.4394L19.4697 5.96973L20.5304 7.03039Z"
        fill="currentColor"
      />
    </svg>
  )
}
