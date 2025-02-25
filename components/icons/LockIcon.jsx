const LockIcon = ({ width = 14, height = 16, fill = '#FCFCFC', className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill={fill}
      className={className}
    >
      <path d="M12.5 7C13.3125 7 14 7.6875 14 8.5V14.5C14 15.3438 13.3125 16 12.5 16H1.5C0.65625 16 0 15.3438 0 14.5V8.5C0 7.6875 0.65625 7 1.5 7H2.25V4.75C2.25 2.15625 4.375 0 7 0C9.59375 0 11.75 2.15625 11.75 4.75V7H12.5ZM9.25 7V4.75C9.25 3.53125 8.21875 2.5 7 2.5C5.75 2.5 4.75 3.53125 4.75 4.75V7H9.25Z" />
    </svg>
  );
};

export default LockIcon;
