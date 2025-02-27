const MessageIcon = ({ width = 28, height = 28, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      className={className}
    >
      <path
        stroke="none"
        d="M24.667 0.666504H3.33366C1.86699 0.666504 0.666992 1.8665 0.666992 3.33317V27.3332L6.00033 21.9998H24.667C26.1337 21.9998 27.3337 20.7998 27.3337 19.3332V3.33317C27.3337 1.8665 26.1337 0.666504 24.667 0.666504ZM24.667 19.3332H4.93366L3.33366 20.9332V3.33317H24.667V19.3332ZM20.667 12.6665H18.0003V9.99984H20.667V12.6665ZM15.3337 12.6665H12.667V9.99984H15.3337V12.6665ZM10.0003 12.6665H7.33366V9.99984H10.0003"
      />
    </svg>
  );
};

export default MessageIcon;
