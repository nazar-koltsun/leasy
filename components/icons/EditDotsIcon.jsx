const EditDotsIcon = ({
  width = 14,
  height = 4,
  fill = '#111111',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 4"
      fill={fill}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.550781 2C0.550781 1.66848 0.682477 1.35054 0.916898 1.11612C1.15132 0.881696 1.46926 0.75 1.80078 0.75C2.1323 0.75 2.45024 0.881696 2.68466 1.11612C2.91909 1.35054 3.05078 1.66848 3.05078 2C3.05078 2.33152 2.91909 2.64946 2.68466 2.88388C2.45024 3.1183 2.1323 3.25 1.80078 3.25C1.46926 3.25 1.15132 3.1183 0.916898 2.88388C0.682477 2.64946 0.550781 2.33152 0.550781 2ZM5.55078 2C5.55078 1.66848 5.68248 1.35054 5.9169 1.11612C6.15132 0.881696 6.46926 0.75 6.80078 0.75C7.1323 0.75 7.45024 0.881696 7.68466 1.11612C7.91909 1.35054 8.05078 1.66848 8.05078 2C8.05078 2.33152 7.91909 2.64946 7.68466 2.88388C7.45024 3.1183 7.1323 3.25 6.80078 3.25C6.46926 3.25 6.15132 3.1183 5.9169 2.88388C5.68248 2.64946 5.55078 2.33152 5.55078 2ZM10.5508 2C10.5508 1.66848 10.6825 1.35054 10.9169 1.11612C11.1513 0.881696 11.4693 0.75 11.8008 0.75C12.1323 0.75 12.4502 0.881696 12.6847 1.11612C12.9191 1.35054 13.0508 1.66848 13.0508 2C13.0508 2.33152 12.9191 2.64946 12.6847 2.88388C12.4502 3.1183 12.1323 3.25 11.8008 3.25C11.4693 3.25 11.1513 3.1183 10.9169 2.88388C10.6825 2.64946 10.5508 2.33152 10.5508 2Z"
      />
    </svg>
  );
};

export default EditDotsIcon;
