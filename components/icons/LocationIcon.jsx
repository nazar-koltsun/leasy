const LocationIcon = ({
  width = 18,
  height = 21,
  fill = '#3B505A',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 21"
      fill="none"
      className={className}
    >
      <path
        d="M12 8.5C12 9.2956 11.6839 10.0587 11.1213 10.6213C10.5587 11.1839 9.7956 11.5 9 11.5C8.2044 11.5 7.4413 11.1839 6.87868 10.6213C6.31607 10.0587 6 9.2956 6 8.5C6 7.70435 6.31607 6.94129 6.87868 6.37868C7.4413 5.81607 8.2044 5.5 9 5.5C9.7956 5.5 10.5587 5.81607 11.1213 6.37868C11.6839 6.94129 12 7.70435 12 8.5Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 8.5C16.5 15.642 9 19.75 9 19.75C9 19.75 1.5 15.642 1.5 8.5C1.5 6.51088 2.29018 4.60322 3.6967 3.1967C5.10322 1.79018 7.0109 1 9 1C10.9891 1 12.8968 1.79018 14.3033 3.1967C15.7098 4.60322 16.5 6.51088 16.5 8.5Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LocationIcon;
