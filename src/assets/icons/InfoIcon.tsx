const InfoIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 24,
  color = "#ffffff",
}) => {
  return (
    <svg
      style={{ flexShrink: 0 }}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C13.3135 22.0017 14.6143 21.7438 15.8278 21.2412C17.0413 20.7385 18.1435 20.001 19.071 19.071C20.001 18.1435 20.7385 17.0413 21.2412 15.8278C21.7438 14.6143 22.0017 13.3135 22 12C22.0017 10.6865 21.7438 9.3857 21.2411 8.17222C20.7385 6.95875 20.001 5.85656 19.071 4.92901C18.1435 3.99902 17.0413 3.26151 15.8278 2.75885C14.6143 2.25619 13.3135 1.99831 12 2.00001C10.6865 1.99833 9.3857 2.25623 8.17222 2.75889C6.95875 3.26154 5.85656 3.99904 4.92901 4.92901C3.99904 5.85656 3.26154 6.95875 2.75889 8.17222C2.25623 9.3857 1.99833 10.6865 2.00001 12C1.99831 13.3135 2.25619 14.6143 2.75885 15.8278C3.26151 17.0413 3.99902 18.1435 4.92901 19.071C5.85656 20.001 6.95875 20.7385 8.17222 21.2411C9.3857 21.7438 10.6865 22.0017 12 22Z"
        stroke={color}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 5.5C12.3315 5.5 12.6495 5.6317 12.8839 5.86612C13.1183 6.10054 13.25 6.41848 13.25 6.75C13.25 7.08152 13.1183 7.39946 12.8839 7.63388C12.6495 7.8683 12.3315 8 12 8C11.6685 8 11.3505 7.8683 11.1161 7.63388C10.8817 7.39946 10.75 7.08152 10.75 6.75C10.75 6.41848 10.8817 6.10054 11.1161 5.86612C11.3505 5.6317 11.6685 5.5 12 5.5Z"
        fill={color}
      />
      <path
        d="M12.25 17V10H11.25M10.5 17H14"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default InfoIcon;