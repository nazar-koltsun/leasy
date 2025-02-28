const ArrowDownIcon = ({
  width = 13,
  height = 12,
  fill = '#111111',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 12"
      fill={fill}
      className={className}
    >
      <path
        d="M5.5262 8.355L1.9292 4.2435C1.5047 3.75975 1.8497 3 2.49395 3H9.68795C9.83213 2.99988 9.9733 3.04132 10.0945 3.11936C10.2158 3.1974 10.3119 3.30873 10.3715 3.44002C10.4311 3.57131 10.4516 3.717 10.4305 3.85963C10.4095 4.00227 10.3477 4.1358 10.2527 4.24425L6.6557 8.35425C6.58531 8.43481 6.49849 8.49937 6.40108 8.54361C6.30368 8.58785 6.19793 8.61074 6.09095 8.61074C5.98397 8.61074 5.87823 8.58785 5.78082 8.54361C5.68341 8.49937 5.5966 8.43481 5.5262 8.35425V8.355Z"
      />
    </svg>
  );
};

export default ArrowDownIcon;
