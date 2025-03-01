const RatingStarIcon = ({
  width = 16,
  height = 16,
  fill = '#FFCC33',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={fill}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.09015 1.40757C7.42615 0.59982 8.57215 0.59982 8.90815 1.40757L10.4696 5.16207L14.5226 5.48757C15.3956 5.55732 15.7496 6.64632 15.0844 7.21632L11.9966 9.86157L12.9394 13.8163C13.1426 14.6683 12.2164 15.3411 11.4694 14.8851L7.99915 12.7656L4.5289 14.8851C3.7819 15.3411 2.85565 14.6676 3.0589 13.8163L4.00165 9.86157L0.913897 7.21632C0.248647 6.64632 0.602647 5.55732 1.47565 5.48757L5.52865 5.16207L7.09015 1.40757Z"
      />
    </svg>
  );
};

export default RatingStarIcon;
