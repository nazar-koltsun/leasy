const WishlistHearthIcon = ({
  width = 22,
  height = 21,
  fill = 'transparent',
  stroke="#FCFCFC",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 21"
      fill="none"
      className={className}
    >
      <path
        d="M20.6238 6.07067C20.6238 3.41398 18.3793 1.25977 15.6109 1.25977C13.5418 1.25977 11.7646 2.46356 11 4.18159C10.2354 2.46356 8.45825 1.25977 6.38808 1.25977C3.62178 1.25977 1.37623 3.41398 1.37623 6.07067C1.37623 13.7895 11 18.8998 11 18.8998C11 18.8998 20.6238 13.7895 20.6238 6.07067Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.8331"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WishlistHearthIcon;
