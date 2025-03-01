const DangerIcon = ({
  width = 16,
  height = 16,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_37_4867)">
        <path
          d="M11.0094 16H4.99059L0 11.0094V4.99069L4.99059 0H11.0094L16 4.99066V11.0094L11.0094 16Z"
          fill="#FF5245"
        />
        <path
          d="M16 11.0094V4.99066L11.0094 0H8V16H11.0094L16 11.0094Z"
          fill="#ED2626"
        />
        <path
          d="M8.9375 4.71875H7.0625V2.84375H8.9375V4.71875Z"
          fill="#E7E7E7"
        />
        <path
          d="M8.9375 13.1562H7.0625V5.65625H8.9375V13.1562Z"
          fill="#E7E7E7"
        />
        <path d="M8.9375 13.1562H8V5.65625H8.9375V13.1562Z" fill="#D3D3D8" />
        <path d="M8.9375 4.71875H8V2.84375H8.9375V4.71875Z" fill="#D3D3D8" />
      </g>
      <defs>
        <clipPath id="clip0_37_4867">
          <rect
            width={width}
            height={height}
            fill="white"
            transform="matrix(1 0 0 -1 0 16)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DangerIcon;
