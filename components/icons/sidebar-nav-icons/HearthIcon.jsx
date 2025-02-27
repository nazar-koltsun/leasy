const HearthIcon = ({ width = 25, height = 25, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      className={className}
    >
      <path
        d="M23 7.72727C23 4.56455 20.5512 2 17.5307 2C15.2732 2 13.3342 3.43309 12.5 5.47836C11.6658 3.43309 9.72683 2 7.46817 2C4.45 2 2 4.56455 2 7.72727C2 16.9164 12.5 23 12.5 23C12.5 23 23 16.9164 23 7.72727Z"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HearthIcon;
