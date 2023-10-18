interface ShipProps {
  rotation: number
}

export const Ship: React.FC<ShipProps> = ({ rotation }) => {
  return (
    <svg
      style={{ transform: `rotate(${rotation}deg)` }}
      className="absolute w-20 h-20 rounded-full border border-spacing-3 border-neutral-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-500 ease-in-out"
      width="48"
      height="48"
      viewBox="0 0 512 512"
    >
      <path
        fill="black"
        d="m265 34l47.898 35.924l61.563 123.123l-8.057 32.23l-24.943-4.158l3.16-10.533l2.842-9.473L256 182.823l-91.463 18.29l6.002 20.006l-24.943 4.156l-8.057-32.228L199.1 69.926L247 34v56h-39l-16 32l64 38l64-38l-16-32h-39zm188.313 169.258l30.3 10.101l-13.478 29.205l-30.016-5.001zm-394.626 0l13.194 34.304l-30.016 5.002l-13.478-29.205zM256 205.32l53.8 58.692L281.306 359h-50.61L202.2 264.012zm25.254.909l43.283 8.658l-8.715 29.052zm-50.508.002l-34.568 37.709l-8.715-29.053zm105.5 32.267L482.5 262.873L429.799 368.28L329.98 259.385zm-160.492 0l6.266 20.887L82.2 368.279L29.5 262.873zm148.205 40.96l72.201 78.765l-84.556-37.582zm-135.918 0l12.355 41.183l-84.556 37.582zm118.348 58.564l28.646 12.732L312.973 439H265v-62h29.695zm-100.778 0L217.305 377H247v62h-47.973l-22.062-88.246zM387.6 374.115l18.105 8.047l-9.984 21.635l-16.387-8.193zm-263.2 0l8.266 21.489l-16.387 8.193l-9.984-21.635zM311 457v30h-30v-30zm-80 0v30h-30v-30z"
      />
    </svg>
  )
}
