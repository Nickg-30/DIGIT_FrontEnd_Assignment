import React from "react";

const CreateEstimateIcon = ({ className, style = {}, fill = "#F47738" }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 8.75C14.6125 8.75 15.1987 8.86375 15.75 9.05625V5.25L10.5 0H1.75C0.77875 0 0 0.77875 0 1.75V14C0 14.9712 0.7875 15.75 1.75 15.75H9.05625C8.86375 15.1987 8.75 14.6125 8.75 14C8.75 11.1037 11.1037 8.75 14 8.75ZM9.625 1.3125L14.4375 6.125H9.625V1.3125ZM17.5 13.125V14.875H14.875V17.5H13.125V14.875H10.5V13.125H13.125V10.5H14.875V13.125H17.5Z"
      fill={fill}
    />
  </svg>
);

const GotoInboxIcon = ({ className, style = {}, fill = "#F47738" }) => (
  <svg width="15" height="13" viewBox="0 0 15 13" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.14286 6.5C2.14286 2.91056 5.02143 0 8.57143 0C12.1214 0 15 2.91056 15 6.5C15 10.0894 12.1214 13 8.57143 13C7.1 13 5.74286 12.4944 4.65714 11.6567L5.67143 10.6167C6.49286 11.2017 7.49286 11.5556 8.57143 11.5556C11.3357 11.5556 13.5714 9.295 13.5714 6.5C13.5714 3.705 11.3357 1.44444 8.57143 1.44444C5.80714 1.44444 3.57143 3.705 3.57143 6.5H5.71429L2.85714 9.38889L0 6.5H2.14286Z"
      fill={fill}
    />
  </svg>
);

const ArrowLeft = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className={className} width="19px">
    <path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
    <path d="M14 7l-5 5 5 5V7z" />
  </svg>
);

const ArrowLeftWhite = ({ className, fill = "white", style = {} }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" className={className} fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill={fill} />
  </svg>
);
const PrivacyMaskIcon = ({ className, style = {} }) => (
  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path
      d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z"
      fill="#EEEEEE"
    />
  </svg>
);

const ArrowDown = ({ className, onClick, styles, disable }) => (
  <svg
    style={{ ...styles }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={disable ? "#9E9E9E" : "black"}
    className={className}
    onClick={onClick}
    width="18px"
    height="18px"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 10l5 5 5-5H7z" />
  </svg>
);

const ArrowBack = ({ className, onClick }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className={className} onClick={onClick} width="18px" height="18px">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
  </svg>
);

const ArrowForward = ({ className, onClick }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className={className} onClick={onClick} width="18px" height="18px">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
  </svg>
);

const ArrowToFirst = ({ className, onClick }) => (
  <svg width="18px" height="18px" viewBox="0 0 13 12" fill="black" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
    <path d="M12.41 10.59L7.82 6L12.41 1.41L11 0L5 6L11 12L12.41 10.59ZM0 0H2V12H0V0Z" fill="#505a5f"></path>
  </svg>
);

const ArrowToLast = ({ className, onClick }) => (
  <svg width="18px" height="18px" viewBox="0 0 13 12" fill="black" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
    <path d="M0.589844 1.41L5.17984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0L0.589844 1.41ZM10.9998 0H12.9998V12H10.9998V0Z" fill="#505a5f" />
  </svg>
);

const DownloadPrefixIcon = ({ className, onClick }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
  </svg>
);

const CameraSvg = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    className={className}
    viewBox="0 0 24 24"
    fill="black"
    width="46px"
    height="42px"
  >
    <rect fill="none" height="24" width="24" />
    <path d="M3,4V1h2v3h3v2H5v3H3V6H0V4H3z M6,10V7h3V4h7l1.83,2H21c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V10H6z M13,19c2.76,0,5-2.24,5-5s-2.24-5-5-5s-5,2.24-5,5S10.24,19,13,19z M9.8,14c0,1.77,1.43,3.2,3.2,3.2s3.2-1.43,3.2-3.2 s-1.43-3.2-3.2-3.2S9.8,12.23,9.8,14z" />
  </svg>
);

const DeleteBtn = ({ className, onClick, fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className={className} onClick={onClick} width="18px" height="18px">
    <path d="M0 0h24v24H0V0z" fill={fill} />
    <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
  </svg>
);

const SuccessSvg = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00703C" className={className}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
  </svg>
);

const ErrorSvg = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d4351c" className={className}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <circle cx="12" cy="19" r="2" />
    <path d="M10 3h4v12h-4z" />
  </svg>
);

const StarFilled = ({ className, id, onClick, styles, percentage = 100 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    className={className}
    style={styles}
    onClick={onClick}
    viewBox="0 0 24 24"
    fill="#F47738"
    width="48px"
    height="48px"
  >
    <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stopColor="#F47738" stopOpacity={1}></stop>
      <stop offset={`${percentage}%`} stopColor="#F47738" stopOpacity={1}></stop>
      <stop offset={`${percentage}%`} stopColor="white" stopOpacity={0}></stop>
    </linearGradient>
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path
        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
        fill={`url(#${id})`}
        stroke="#F47738"
        strokeWidth={1}
      />
    </g>
  </svg>
);

const StarEmpty = ({ className, onClick, styles }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#F47738"
    className={className}
    style={styles}
    width="48px"
    height="48px"
    onClick={onClick}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
      strokeWidth={1}
    />
  </svg>
);

const DownloadImgIcon = () => (
  <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z" fill="#F47738" />
  </svg>
);

const PrevIcon = () => (
  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.99997 0L0.589966 1.41L5.16997 6L0.589966 10.59L1.99997 12L7.99997 6L1.99997 0Z" fill="#0B0C0C" />
  </svg>
);

const ViewsIcon = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
      fill="#F47738"
    />
  </svg>
);

const DocumentIcon = () => (
  <svg width="100" height="100" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM11 14H4V12H11V14ZM14 10H4V8H14V10ZM14 6H4V4H14V6Z"
      fill="#F47738"
    />
  </svg>
);

const DocumentIconSolid = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
  </svg>
);

const SurveyIconSolid = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z" />
  </svg>
);

const PMBIcon = () => (
  <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 9C18.1733 9 20.0933 9.52 21.6533 10.2C23.0933 10.84 24 12.28 24 13.84V16H8V13.8533C8 12.28 8.90667 10.84 10.3467 10.2133C11.9067 9.52 13.8267 9 16 9ZM5.33333 9.33333C6.8 9.33333 8 8.13333 8 6.66667C8 5.2 6.8 4 5.33333 4C3.86667 4 2.66667 5.2 2.66667 6.66667C2.66667 8.13333 3.86667 9.33333 5.33333 9.33333ZM6.84 10.8C6.34667 10.72 5.85333 10.6667 5.33333 10.6667C4.01333 10.6667 2.76 10.9467 1.62667 11.44C0.64 11.8667 0 12.8267 0 13.9067V16H6V13.8533C6 12.7467 6.30667 11.7067 6.84 10.8ZM26.6667 9.33333C28.1333 9.33333 29.3333 8.13333 29.3333 6.66667C29.3333 5.2 28.1333 4 26.6667 4C25.2 4 24 5.2 24 6.66667C24 8.13333 25.2 9.33333 26.6667 9.33333ZM32 13.9067C32 12.8267 31.36 11.8667 30.3733 11.44C29.24 10.9467 27.9867 10.6667 26.6667 10.6667C26.1467 10.6667 25.6533 10.72 25.16 10.8C25.6933 11.7067 26 12.7467 26 13.8533V16H32V13.9067ZM16 0C18.2133 0 20 1.78667 20 4C20 6.21333 18.2133 8 16 8C13.7867 8 12 6.21333 12 4C12 1.78667 13.7867 0 16 0Z"
      fill="#F47738"
    />
  </svg>
);

const PMBIconSolid = () => (
  <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <path d="M18,11c0,0.67,0,1.33,0,2c1.2,0,2.76,0,4,0c0-0.67,0-1.33,0-2C20.76,11,19.2,11,18,11z" />
    <path d="M16,17.61c0.96,0.71,2.21,1.65,3.2,2.39c0.4-0.53,0.8-1.07,1.2-1.6c-0.99-0.74-2.24-1.68-3.2-2.4 C16.8,16.54,16.4,17.08,16,17.61z" />
    <path d="M20.4,5.6C20,5.07,19.6,4.53,19.2,4c-0.99,0.74-2.24,1.68-3.2,2.4c0.4,0.53,0.8,1.07,1.2,1.6 C18.16,7.28,19.41,6.35,20.4,5.6z" />
    <path d="M4,9c-1.1,0-2,0.9-2,2v2c0,1.1,0.9,2,2,2h1v4h2v-4h1l5,3V6L8,9H4z M9.03,10.71L11,9.53v4.94l-1.97-1.18L8.55,13H8H4v-2h4 h0.55L9.03,10.71z" />
    <path d="M15.5,12c0-1.33-0.58-2.53-1.5-3.35v6.69C14.92,14.53,15.5,13.33,15.5,12z" />
  </svg>
);

const EventsIconSolid = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zm-2 5h-5v5h5v-5z" />
  </svg>
);

const DustbinIcon = () => (
  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill="#F47738" />
  </svg>
);

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
  </svg>
);

// const DocumentSVG = ({className}) => <svg xmlns = "http://www.w3.org/2000/svg" className={className} height = "48px" viewBox = "0 0 24 24" width = "48px" fill = "#000000" > < path d = "M0 0h24v24H0V0z" fill = "none" />
// < path d = "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
// </svg>

// const PDFSvg = ({className, width = 100, height = 100, style, viewBox="0 0 34 34" }) => <svg style={style} xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox={viewBox} fill="gray">
// <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" />
// </svg>

const DocumentSVG = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M46.6667 6.6665H20C16.3334 6.6665 13.3667 9.6665 13.3667 13.3332L13.3334 66.6665C13.3334 70.3332 16.3 73.3332 19.9667 73.3332H60C63.6667 73.3332 66.6667 70.3332 66.6667 66.6665V26.6665L46.6667 6.6665ZM53.3334 59.9998H26.6667V53.3332H53.3334V59.9998ZM53.3334 46.6665H26.6667V39.9998H53.3334V46.6665ZM43.3334 29.9998V11.6665L61.6667 29.9998H43.3334Z"
      fill="#505A5F"
    />
  </svg>
);

const PDFSvg = ({
  className,
  width = 80,
  height = 80,
  style = { background: "#f6f6f6", padding: "8px", boxShadow: "0px 2px 0px #d6d5d3", borderRadius: "4px" },
  viewBox = "0 0 80 80",
}) => (
  <svg {...{ className, width, height, style, viewBox }} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M46.6667 6.6665H20C16.3334 6.6665 13.3667 9.6665 13.3667 13.3332L13.3334 66.6665C13.3334 70.3332 16.3 73.3332 19.9667 73.3332H60C63.6667 73.3332 66.6667 70.3332 66.6667 66.6665V26.6665L46.6667 6.6665ZM53.3334 59.9998H26.6667V53.3332H53.3334V59.9998ZM53.3334 46.6665H26.6667V39.9998H53.3334V46.6665ZM43.3334 29.9998V11.6665L61.6667 29.9998H43.3334Z"
      fill="#505A5F"
    />
  </svg>
);

const SearchIconSvg = ({ className, onClick }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f47738" className={className} width="24px" height="24px" onClick={onClick}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const CheckSvg = ({ className, style = {} }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F47738" className={className} style={style}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
);

const RoundedCheck = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" className={className}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z" />
  </svg>
);

const Calender = ({ className, onClick }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className={className} onClick={onClick}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
  </svg>
);

const Phone = ({ className, fillcolor, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fillcolor ? fillcolor : "#f47738"}
    viewBox="0 0 24 24"
    style={style ? style : {}}
    className={className}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const FilterSvg = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#f47738" width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
  </svg>
);

const SortSvg = ({ className }) => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M8 16H24V13.3333H8V16ZM0 0V2.66667H24V0H0ZM8 9.33333H24V6.66667H8V9.33333Z" fill="#505A5F" />
  </svg>
);

const Close = ({ className, style }) => (
  <svg style={{ ...style }} focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24" fill="#9E9E9E" className={className}>
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
  </svg>
);

const Feedback = ({ className }) => (
  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" className={className}></path>
  </svg>
);

// Download Icon

const GetApp = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f47738" className={className}>
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
);

const HamburgerIcon = ({ className, styles, color = "#fdfdfd" }) => (
  <svg style={{ ...styles }} width="24" height="24" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill={color}></path>
  </svg>
);

export const HomeIcon = ({ className, styles }) => (
  <svg className={className} viewBox="0 0 24 24" style={{ ...styles }}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
  </svg>
);

export const LanguageIcon = ({ className, styles }) => (
  <svg className={className} viewBox="0 0 24 24" style={{ ...styles }}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
  </svg>
);

export const LogoutIcon = ({ className, styles }) => (
  <svg className={className} viewBox="0 0 24 24" style={{ ...styles }}>
    <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path>
  </svg>
);

const CalendarIcon = (props) => (
  <svg {...props} fill={props.isdisabled ? "#e3e3e3" : "Black"} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
  </svg>
);

const SortDown = (style) => (
  <svg
    style={{ display: "inline-block", height: "16px", ...style }}
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <rect fill="none" height="24" width="24" />
    <path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z" />
  </svg>
);

const SortUp = (style) => (
  <svg
    style={{ display: "inline-block", height: "16px", ...style }}
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <rect fill="none" height="24" width="24" />
    <path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z" />
  </svg>
);

const ArrowRightInbox = ({ style }) => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path d="M13 0L11.59 1.41L16.17 6H0V8H16.17L11.58 12.59L13 14L20 7L13 0Z" fill="#F47738" />
  </svg>
);

const ShippingTruck = ({ className, styles }) => (
  <svg style={{ ...styles }} className={className} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

function CloseSvg({ onClick }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" onClick={onClick}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

const UpwardArrow = ({ color = "#00703C", rotate = 0, marginRight = 0 }) => (
  <svg
    style={{ display: "inline-block", verticalAlign: "baseline", transform: `rotate(${rotate}deg)`, marginRight: `${marginRight}px` }}
    width="11"
    height="16"
    viewBox="0 0 11 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 5.6L1.10786 6.728L4.71429 3.064V16H6.28571V3.064L9.89214 6.736L11 5.6L5.5 0L0 5.6Z" fill={color} />
  </svg>
);

const DownwardArrow = (props) => <UpwardArrow {...props} color="#e54d42" rotate={180} />;

const DownloadIcon = ({ styles, className, onClick, fill = "#505A5F" }) => (
  <svg
    style={{ ...styles }}
    width="19"
    height="24"
    viewBox="0 0 19 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
  >
    <path d="M18.8337 8.5H13.5003V0.5H5.50033V8.5H0.166992L9.50033 17.8333L18.8337 8.5ZM0.166992 20.5V23.1667H18.8337V20.5H0.166992Z" fill={fill} />
  </svg>
);

const GenericFileIcon = () => (
  <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 0H10C4.5 0 0.0500011 4.5 0.0500011 10L0 90C0 95.5 4.45 100 9.95 100H70C75.5 100 80 95.5 80 90V30L50 0ZM60 80H20V70H60V80ZM60 60H20V50H60V60ZM45 35V7.5L72.5 35H45Z"
      fill="#505A5F"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
      fill="#F47738"
    />
  </svg>
);

const PrimaryDownlaodIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f47738">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
);

const Ellipsis = ({ className, onClick }) => (
  <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
    <path
      d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
      fill="#B1B4B6"
    />
  </svg>
);

const Poll = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="white" />
    <path
      d="M31.6667 5H8.33333C6.5 5 5 6.5 5 8.33333V31.6667C5 33.5 6.5 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5ZM15 28.3333H11.6667V16.6667H15V28.3333ZM21.6667 28.3333H18.3333V11.6667H21.6667V28.3333ZM28.3333 28.3333H25V21.6667H28.3333V28.3333Z"
      fill="#F47738"
    />
  </svg>
);

const Details = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
      fill="#505A5F"
    />
  </svg>
);

const FilterIcon = ({ onClick }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path
      d="M0.666904 2.48016C3.36024 5.9335 8.33357 12.3335 8.33357 12.3335V20.3335C8.33357 21.0668 8.93357 21.6668 9.6669 21.6668H12.3336C13.0669 21.6668 13.6669 21.0668 13.6669 20.3335V12.3335C13.6669 12.3335 18.6269 5.9335 21.3202 2.48016C22.0002 1.60016 21.3736 0.333496 20.2669 0.333496H1.72024C0.613571 0.333496 -0.0130959 1.60016 0.666904 2.48016Z"
      fill="#505A5F"
    />
  </svg>
);

const RefreshIcon = () => (
  <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 5V8L12 4L8 0V3C3.58 3 0 6.58 0 11C0 12.57 0.46 14.03 1.24 15.26L2.7 13.8C2.25 12.97 2 12.01 2 11C2 7.69 4.69 5 8 5ZM14.76 6.74L13.3 8.2C13.74 9.04 14 9.99 14 11C14 14.31 11.31 17 8 17V14L4 18L8 22V19C12.42 19 16 15.42 16 11C16 9.43 15.54 7.97 14.76 6.74Z"
      fill="#0B0C0C"
    />
  </svg>
);

const RefreshSVG = () => (
  <svg width="17" height="17" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 5V8L12 4L8 0V3C3.58 3 0 6.58 0 11C0 12.57 0.46 14.03 1.24 15.26L2.7 13.8C2.25 12.97 2 12.01 2 11C2 7.69 4.69 5 8 5ZM14.76 6.74L13.3 8.2C13.74 9.04 14 9.99 14 11C14 14.31 11.31 17 8 17V14L4 18L8 22V19C12.42 19 16 15.42 16 11C16 9.43 15.54 7.97 14.76 6.74Z"
      fill="#505A5F"
    />
  </svg>
);

const PrintIcon = () => (
  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 5H3C1.34 5 0 6.34 0 8V14H4V18H16V14H20V8C20 6.34 18.66 5 17 5ZM14 16H6V11H14V16ZM17 9C16.45 9 16 8.55 16 8C16 7.45 16.45 7 17 7C17.55 7 18 7.45 18 8C18 8.55 17.55 9 17 9ZM16 0H4V4H16V0Z"
      fill="#505A5F"
    />
  </svg>
);
function PropertyHouse({ className, styles }) {
  return (
    <svg className={className} fill="#FFFFFF" style={{ ...styles }} width="24" height="24" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.6167 9.5L1.66667 17.4667V35H10V21.6667H16.6667V35H25V17.0833L13.6167 9.5Z" />
      <path d="M16.6667 5V7.51667L20 9.73333L22.8833 11.6667H25V13.0833L28.3333 15.3167V18.3333H31.6667V21.6667H28.3333V25H31.6667V28.3333H28.3333V35H38.3333V5H16.6667ZM31.6667 15H28.3333V11.6667H31.6667V15Z" />
    </svg>
  );
}

const InfoBannerIcon = ({ fill = "#3498DB", styles }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={styles}>
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z"
        fill={fill}
      />
    </svg>
  );
};
const ShareIcon = ({ styles, className, fill = "#505A5F" }) => (
  <svg style={{ ...styles }} className={className} width="18" height="20" viewBox="0 0 18 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08Z"
      fill={fill}
    />
  </svg>
);

const RupeeIcon = ({ className }) => (
  <svg width="48" className={className} height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="6" fill="#F47738" />
  </svg>
);

const ComplaintIcon = ({ className, styles }) => (
  <svg style={{ ...styles }} className={className} viewBox="0 0 48 48" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M42.6667 0.666748H5.33335C2.76669 0.666748 0.69002 2.76675 0.69002 5.33342L0.666687 47.3334L10 38.0001H42.6667C45.2334 38.0001 47.3334 35.9001 47.3334 33.3334V5.33342C47.3334 2.76675 45.2334 0.666748 42.6667 0.666748ZM26.3334 21.6667H21.6667V7.66675H26.3334V21.6667ZM26.3334 31.0001H21.6667V26.3334H26.3334V31.0001Z" />
  </svg>
);

const DropIcon = ({ className, styles }) => (
  <svg width="28" height="34" style={{ ...styles }} viewBox="0 0 28 34" className={className} fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.4333 10.3332L14 0.916504L4.56663 10.3332C1.96663 12.9332 0.666626 16.3998 0.666626 19.7332C0.666626 23.0665 1.96663 26.5832 4.56663 29.1832C7.16663 31.7832 10.5833 33.0998 14 33.0998C17.4166 33.0998 20.8333 31.7832 23.4333 29.1832C26.0333 26.5832 27.3333 23.0665 27.3333 19.7332C27.3333 16.3998 26.0333 12.9332 23.4333 10.3332ZM3.99996 20.3332C4.01663 16.9998 5.03329 14.8832 6.93329 12.9998L14 5.78317L21.0666 13.0832C22.9666 14.9498 23.9833 16.9998 24 20.3332H3.99996Z" />
  </svg>
);

const Person = (style) => (
  <svg
    style={{ display: "inline-block", fontSize: "16px", ...style }}
    width="24"
    height="24"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.6167 9.5L1.66667 17.4667V35H10V21.6667H16.6667V35H25V17.0833L13.6167 9.5Z" fill="white" />
    <path
      d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
      fill="white"
    />
  </svg>
);

const WhatsappIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.0566406 24L1.74364 17.837C0.702641 16.033 0.155641 13.988 0.156641 11.891C0.159641 5.335 5.49464 0 12.0496 0C15.2306 0.001 18.2166 1.24 20.4626 3.488C22.7076 5.736 23.9436 8.724 23.9426 11.902C23.9396 18.459 18.6046 23.794 12.0496 23.794C10.0596 23.793 8.09864 23.294 6.36164 22.346L0.0566406 24ZM6.65364 20.193C8.32964 21.188 9.92964 21.784 12.0456 21.785C17.4936 21.785 21.9316 17.351 21.9346 11.9C21.9366 6.438 17.5196 2.01 12.0536 2.008C6.60164 2.008 2.16664 6.442 2.16464 11.892C2.16364 14.117 2.81564 15.783 3.91064 17.526L2.91164 21.174L6.65364 20.193ZM18.0406 14.729C17.9666 14.605 17.7686 14.531 17.4706 14.382C17.1736 14.233 15.7126 13.514 15.4396 13.415C15.1676 13.316 14.9696 13.266 14.7706 13.564C14.5726 13.861 14.0026 14.531 13.8296 14.729C13.6566 14.927 13.4826 14.952 13.1856 14.803C12.8886 14.654 11.9306 14.341 10.7956 13.328C9.91264 12.54 9.31564 11.567 9.14264 11.269C8.96964 10.972 9.12464 10.811 9.27264 10.663C9.40664 10.53 9.56964 10.316 9.71864 10.142C9.86964 9.97 9.91864 9.846 10.0186 9.647C10.1176 9.449 10.0686 9.275 9.99364 9.126C9.91864 8.978 9.32464 7.515 9.07764 6.92C8.83564 6.341 8.59064 6.419 8.40864 6.41L7.83864 6.4C7.64064 6.4 7.31864 6.474 7.04664 6.772C6.77464 7.07 6.00664 7.788 6.00664 9.251C6.00664 10.714 7.07164 12.127 7.21964 12.325C7.36864 12.523 9.31464 15.525 12.2956 16.812C13.0046 17.118 13.5586 17.301 13.9896 17.438C14.7016 17.664 15.3496 17.632 15.8616 17.556C16.4326 17.471 17.6196 16.837 17.8676 16.143C18.1156 15.448 18.1156 14.853 18.0406 14.729Z"
      fill="#F47738"
    />
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
      fill="#F47738"
    />
  </svg>
);

const CaseIcon = ({ className, styles }) => (
  <svg className={className} style={{ ...styles }} fill="#ffffff" width="24" height="24" viewBox="0 0 34 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.3333 6.99967H23.6667V3.66634C23.6667 1.81634 22.1833 0.333008 20.3333 0.333008H13.6667C11.8167 0.333008 10.3333 1.81634 10.3333 3.66634V6.99967H3.66667C1.81667 6.99967 0.350001 8.48301 0.350001 10.333L0.333334 28.6663C0.333334 30.5163 1.81667 31.9997 3.66667 31.9997H30.3333C32.1833 31.9997 33.6667 30.5163 33.6667 28.6663V10.333C33.6667 8.48301 32.1833 6.99967 30.3333 6.99967ZM20.3333 6.99967H13.6667V3.66634H20.3333V6.99967Z" />
  </svg>
);

const TLIcon = ({ className, styles }) => (
  <svg className={className} style={{ ...styles }} fill="#ffffff" width="24" height="24" viewBox="0 0 34 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.3333 6.99967H23.6667V3.66634C23.6667 1.81634 22.1833 0.333008 20.3333 0.333008H13.6667C11.8167 0.333008 10.3333 1.81634 10.3333 3.66634V6.99967H3.66667C1.81667 6.99967 0.350001 8.48301 0.350001 10.333L0.333334 28.6663C0.333334 30.5163 1.81667 31.9997 3.66667 31.9997H30.3333C32.1833 31.9997 33.6667 30.5163 33.6667 28.6663V10.333C33.6667 8.48301 32.1833 6.99967 30.3333 6.99967ZM20.3333 6.99967H13.6667V3.66634H20.3333V6.99967Z" />
  </svg>
);

const PersonIcon = ({ className, styles }) => (
  <svg className={className} style={{ ...styles }} width="24" height="24" viewBox="0 0 38 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.6667 10.3333C28.4334 10.3333 30.65 8.1 30.65 5.33333C30.65 2.56666 28.4334 0.333328 25.6667 0.333328C22.9 0.333328 20.6667 2.56666 20.6667 5.33333C20.6667 8.1 22.9 10.3333 25.6667 10.3333ZM12.3334 10.3333C15.1 10.3333 17.3167 8.1 17.3167 5.33333C17.3167 2.56666 15.1 0.333328 12.3334 0.333328C9.56669 0.333328 7.33335 2.56666 7.33335 5.33333C7.33335 8.1 9.56669 10.3333 12.3334 10.3333ZM12.3334 13.6667C8.45002 13.6667 0.666687 15.6167 0.666687 19.5V23.6667H24V19.5C24 15.6167 16.2167 13.6667 12.3334 13.6667ZM25.6667 13.6667C25.1834 13.6667 24.6334 13.7 24.05 13.75C25.9834 15.15 27.3334 17.0333 27.3334 19.5V23.6667H37.3334V19.5C37.3334 15.6167 29.55 13.6667 25.6667 13.6667Z" />
  </svg>
);

const ReceiptIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z" fill="white"></path>
  </svg>
);

const AnnouncementIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24.6665 0.666016H3.33317C1.8665 0.666016 0.679837 1.86602 0.679837 3.33268L0.666504 27.3327L5.99984 21.9993H24.6665C26.1332 21.9993 27.3332 20.7993 27.3332 19.3327V3.33268C27.3332 1.86602 26.1332 0.666016 24.6665 0.666016ZM15.3332 12.666H12.6665V4.66602H15.3332V12.666ZM15.3332 17.9993H12.6665V15.3327H15.3332V17.9993Z"
      fill="#F47738"
    />
  </svg>
);

const PTIcon = ({ className, styles }) => (
  <svg width="34" height="30" style={{ ...styles }} viewBox="0 0 34 30" fill="#ffffff" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9999 6.66667V0H0.333252V30H33.6666V6.66667H16.9999ZM6.99992 26.6667H3.66659V23.3333H6.99992V26.6667ZM6.99992 20H3.66659V16.6667H6.99992V20ZM6.99992 13.3333H3.66659V10H6.99992V13.3333ZM6.99992 6.66667H3.66659V3.33333H6.99992V6.66667ZM13.6666 26.6667H10.3333V23.3333H13.6666V26.6667ZM13.6666 20H10.3333V16.6667H13.6666V20ZM13.6666 13.3333H10.3333V10H13.6666V13.3333ZM13.6666 6.66667H10.3333V3.33333H13.6666V6.66667ZM30.3333 26.6667H16.9999V23.3333H20.3333V20H16.9999V16.6667H20.3333V13.3333H16.9999V10H30.3333V26.6667ZM26.9999 13.3333H23.6666V16.6667H26.9999V13.3333ZM26.9999 20H23.6666V23.3333H26.9999V20Z" />
  </svg>
);

const OBPSIcon = ({ className, styles }) => (
  <svg className={className} style={{ ...styles }} width="34" height="30" viewBox="0 0 34 30" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.3333 0H3.66659C1.83325 0 0.333252 1.5 0.333252 3.33333V26.6667C0.333252 28.5 1.83325 30 3.66659 30H30.3333C32.1666 30 33.6666 28.5 33.6666 26.6667V3.33333C33.6666 1.5 32.1666 0 30.3333 0ZM13.6666 23.3333H5.33325V20H13.6666V23.3333ZM13.6666 16.6667H5.33325V13.3333H13.6666V16.6667ZM13.6666 10H5.33325V6.66667H13.6666V10ZM21.6999 20L16.9999 15.2667L19.3499 12.9167L21.6999 15.2833L26.9833 10L29.3499 12.3667L21.6999 20Z"
    />
  </svg>
);

const OBPSIconSolidBg = () => (
  <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.333 0H3.66634C1.83301 0 0.333008 1.5 0.333008 3.33333V26.6667C0.333008 28.5 1.83301 30 3.66634 30H30.333C32.1663 30 33.6663 28.5 33.6663 26.6667V3.33333C33.6663 1.5 32.1663 0 30.333 0ZM13.6663 23.3333H5.33301V20H13.6663V23.3333ZM13.6663 16.6667H5.33301V13.3333H13.6663V16.6667ZM13.6663 10H5.33301V6.66667H13.6663V10ZM21.6997 20L16.9997 15.2667L19.3497 12.9167L21.6997 15.2833L26.983 10L29.3497 12.3667L21.6997 20Z"
      fill="white"
    />
  </svg>
);

const CitizenTruck = ({ className }) => (
  <svg width="40" height="40" viewBox="0 0 23 19" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill={"#F47738"}
      d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
    />
  </svg>
);

const FSMIcon = ({ className, styles }) => (
  <svg width="40" height="40" viewBox="0 0 23 19" className={className} style={{ ...styles }} fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

const EDCRIcon = ({ className }) => (
  <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 15.3333V5.33333L15 0.333334L10 5.33333V8.66667H0V32H30V15.3333H20ZM6.66667 28.6667H3.33333V25.3333H6.66667V28.6667ZM6.66667 22H3.33333V18.6667H6.66667V22ZM6.66667 15.3333H3.33333V12H6.66667V15.3333ZM16.6667 28.6667H13.3333V25.3333H16.6667V28.6667ZM16.6667 22H13.3333V18.6667H16.6667V22ZM16.6667 15.3333H13.3333V12H16.6667V15.3333ZM16.6667 8.66667H13.3333V5.33333H16.6667V8.66667ZM26.6667 28.6667H23.3333V25.3333H26.6667V28.6667ZM26.6667 22H23.3333V18.6667H26.6667V22Z"
      fill="#F47738"
    />
  </svg>
);

const BPAIcon = ({ className }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.3333 29.0333H3.33333V8.66667H15V5.33334H3.33333C1.5 5.33334 0 6.83334 0 8.66667V28.6667C0 30.5 1.5 32 3.33333 32H23.3333C25.1667 32 26.6667 30.5 26.6667 28.6667V17H23.3333V29.0333Z"
      fill="#F47738"
    />
    <path
      d="M26.6667 0.333336H23.3333V5.33334H18.3333C18.35 5.35 18.3333 8.66667 18.3333 8.66667H23.3333V13.65C23.35 13.6667 26.6667 13.65 26.6667 13.65V8.66667H31.6667V5.33334H26.6667V0.333336Z"
      fill="#F47738"
    />
    <path d="M20 12H6.66666V15.3333H20V12Z" fill="#F47738" />
    <path d="M6.66666 17V20.3333H20V17H15H6.66666Z" fill="#F47738" />
    <path d="M20 22H6.66666V25.3333H20V22Z" fill="#F47738" />
  </svg>
);

const BPAHomeIcon = ({ className, styles }) => (
  <svg width="34" height="30" className={className} style={{ ...styles }} viewBox="0 0 34 30" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.3333 0H3.66659C1.83325 0 0.333252 1.5 0.333252 3.33333V26.6667C0.333252 28.5 1.83325 30 3.66659 30H30.3333C32.1666 30 33.6666 28.5 33.6666 26.6667V3.33333C33.6666 1.5 32.1666 0 30.3333 0ZM13.6666 23.3333H5.33325V20H13.6666V23.3333ZM13.6666 16.6667H5.33325V13.3333H13.6666V16.6667ZM13.6666 10H5.33325V6.66667H13.6666V10ZM21.6999 20L16.9999 15.2667L19.3499 12.9167L21.6999 15.2833L26.9833 10L29.3499 12.3667L21.6999 20Z"
      fill="white"
    />
  </svg>
);

const HelpIcon = () => (
  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H22C23.1 18 23.99 17.1 23.99 16L24 2C24 0.9 23.1 0 22 0ZM8 3C9.66 3 11 4.34 11 6C11 7.66 9.66 9 8 9C6.34 9 5 7.66 5 6C5 4.34 6.34 3 8 3ZM14 15H2V14C2 12 6 10.9 8 10.9C10 10.9 14 12 14 14V15ZM17.85 11H19.49L21 13L19.01 14.99C17.7 14.01 16.73 12.61 16.28 11C16.1 10.36 16 9.69 16 9C16 8.31 16.1 7.64 16.28 7C16.73 5.38 17.7 3.99 19.01 3.01L21 5L19.49 7H17.85C17.63 7.63 17.5 8.3 17.5 9C17.5 9.7 17.63 10.37 17.85 11Z"
      fill="#F47738"
    />
  </svg>
);
const EventCalendar = () => {
  return (
    <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.6667 15.0002H12V21.6668H18.6667V15.0002ZM17.3333 0.333496V3.00016H6.66667V0.333496H4V3.00016H2.66667C1.18667 3.00016 0.0133333 4.20016 0.0133333 5.66683L0 24.3335C0 25.8002 1.18667 27.0002 2.66667 27.0002H21.3333C22.8 27.0002 24 25.8002 24 24.3335V5.66683C24 4.20016 22.8 3.00016 21.3333 3.00016H20V0.333496H17.3333ZM21.3333 24.3335H2.66667V9.66683H21.3333V24.3335Z"
        fill="#F47738"
      />
    </svg>
  );
};

const NotificationBell = () => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.89 20 8 20ZM14 14V9C14 5.93 12.36 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.63 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14Z"
      fill="white"
    />
  </svg>
);

const MapMarker = () => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 0.333496C2.42 0.333496 0.333328 2.42016 0.333328 5.00016C0.333328 6.16016 0.666661 7.24683 1.27333 8.22683C1.90666 9.2535 2.73999 10.1335 3.37999 11.1602C3.69333 11.6602 3.91999 12.1268 4.15999 12.6668C4.33333 13.0335 4.47333 13.6668 5 13.6668C5.52666 13.6668 5.66666 13.0335 5.83333 12.6668C6.08 12.1268 6.29999 11.6602 6.61333 11.1602C7.25333 10.1402 8.08666 9.26016 8.72 8.22683C9.33333 7.24683 9.66666 6.16016 9.66666 5.00016C9.66666 2.42016 7.58 0.333496 5 0.333496ZM5 6.8335C4.07999 6.8335 3.33333 6.08683 3.33333 5.16683C3.33333 4.24683 4.07999 3.50016 5 3.50016C5.92 3.50016 6.66666 4.24683 6.66666 5.16683C6.66666 6.08683 5.92 6.8335 5 6.8335Z"
      fill="#505A5F"
    />
  </svg>
);

const Clock = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.992 0C3.576 0 0 3.584 0 8C0 12.416 3.576 16 7.992 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 7.992 0ZM7.99994 14.4C4.46393 14.4 1.59993 11.536 1.59993 7.99999C1.59993 4.46399 4.46393 1.59999 7.99994 1.59999C11.5359 1.59999 14.3999 4.46399 14.3999 7.99999C14.3999 11.536 11.5359 14.4 7.99994 14.4ZM7.20003 4H8.40003V8.2L12 10.336L11.4 11.32L7.20003 8.8V4Z"
      fill="#505A5F"
    />
  </svg>
);

const TickMark = ({ fillColor = "white" }) => (
  <svg style={{ display: "inline-block", margin: "auto" }} width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.75012 8.1275L1.62262 5L0.557617 6.0575L4.75012 10.25L13.7501 1.25L12.6926 0.192505L4.75012 8.1275Z" fill={fillColor} />
  </svg>
);

const EditIcon = ({ style }) => (
  <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.126 5.125L11.063 3.188L14.81 6.935L12.873 8.873L9.126 5.125ZM17.71 2.63L15.37 0.289999C15.1826 0.103748 14.9292 -0.000793457 14.665 -0.000793457C14.4008 -0.000793457 14.1474 0.103748 13.96 0.289999L12.13 2.12L15.88 5.87L17.71 4C17.8844 3.81454 17.9815 3.56956 17.9815 3.315C17.9815 3.06044 17.8844 2.81546 17.71 2.63ZM5.63 8.63L0 14.25V18H3.75L9.38 12.38L12.873 8.873L9.126 5.125L5.63 8.63Z"
      fill="#F47738"
    />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
      fill="#505A5F"
    />
  </svg>
);

const DeleteIcon = ({ style, fill }) => (
  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill={fill} />
  </svg>
);

const CreateLoiIcon = ({ style, fill = "#F47738" }) => (
  <svg style={style} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.126 5.12506L11.063 3.18806L14.81 6.93506L12.873 8.87306L9.126 5.12506ZM17.71 2.63006L15.37 0.29006C15.1826 0.103809 14.9292 -0.000732422 14.665 -0.000732422C14.4008 -0.000732422 14.1474 0.103809 13.96 0.29006L12.13 2.12006L15.88 5.87006L17.71 4.00006C17.8844 3.8146 17.9815 3.56962 17.9815 3.31506C17.9815 3.0605 17.8844 2.81552 17.71 2.63006ZM5.63 8.63006L0 14.2501V18.0001H3.75L9.38 12.3801L12.873 8.87306L9.126 5.12506L5.63 8.63006Z"
      fill={fill}
    />
  </svg>
);

const WSICon = ({ className, styles }) => (
  <svg width="28" height="34" viewBox="0 0 28 34" fill="#ffffff" style={{ ...styles }} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M23.4332 10.3337L13.9998 0.916992L4.5665 10.3337C1.9665 12.9337 0.666504 16.4003 0.666504 19.7337C0.666504 23.067 1.9665 26.5837 4.5665 29.1837C7.1665 31.7837 10.5832 33.1003 13.9998 33.1003C17.4165 33.1003 20.8332 31.7837 23.4332 29.1837C26.0332 26.5837 27.3332 23.067 27.3332 19.7337C27.3332 16.4003 26.0332 12.9337 23.4332 10.3337ZM3.99984 20.3337C4.0165 17.0003 5.03317 14.8837 6.93317 13.0003L13.9998 5.78366L21.0665 13.0837C22.9665 14.9503 23.9832 17.0003 23.9998 20.3337H3.99984Z" />
  </svg>
);

const ArrowVectorDown = ({ className, styles }) => (
  <svg style={{ ...styles }} className={className} viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2.33331L14.12 0.453308L8 6.55997L1.88 0.453307L-8.21774e-08 2.33331L8 10.3333L16 2.33331Z" fill="#F47738" />
  </svg>
);

const ArrowDirection = ({ className, styles }) => (
  <svg style={{ ...styles }} className={className} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.0013 2.66669L7.0613 3.60669L10.7813 7.33335H2.66797V8.66669H10.7813L7.0613 12.3934L8.0013 13.3334L13.3346 8.00002L8.0013 2.66669Z" />
  </svg>
);

const CameraIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.0002 5L11.9502 8.33333H6.66683C4.8335 8.33333 3.3335 9.83333 3.3335 11.6667V31.6667C3.3335 33.5 4.8335 35 6.66683 35H33.3335C35.1668 35 36.6668 33.5 36.6668 31.6667V11.6667C36.6668 9.83333 35.1668 8.33333 33.3335 8.33333H28.0502L25.0002 5H15.0002ZM20.0002 30C15.4002 30 11.6668 26.2667 11.6668 21.6667C11.6668 17.0667 15.4002 13.3333 20.0002 13.3333C24.6002 13.3333 28.3335 17.0667 28.3335 21.6667C28.3335 26.2667 24.6002 30 20.0002 30Z"
      fill="#F47738"
    />
    <path
      d="M20.0002 28.3333L22.0835 23.75L26.6668 21.6667L22.0835 19.5833L20.0002 15L17.9168 19.5833L13.3335 21.6667L17.9168 23.75L20.0002 28.3333Z"
      fill="#F47738"
    />
  </svg>
);
const RemoveIcon = () => (
  <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.00016 26.6667C2.00016 28.5 3.50016 30 5.3335 30H18.6668C20.5002 30 22.0002 28.5 22.0002 26.6667V6.66667H2.00016V26.6667ZM23.6668 1.66667H17.8335L16.1668 0H7.8335L6.16683 1.66667H0.333496V5H23.6668V1.66667Z"
      fill="#F47738"
    />
  </svg>
);

const GalleryIcon = () => (
  <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.33333 7.00016H0V15.3335H0.0166667L0 30.3335C0 32.1668 1.5 33.6668 3.33333 33.6668H33.3333V30.3335H3.33333V7.00016ZM36.6667 3.66683H23.3333L20 0.333496H10C8.16667 0.333496 6.68333 1.8335 6.68333 3.66683L6.66667 23.6668C6.66667 25.5002 8.16667 27.0002 10 27.0002H36.6667C38.5 27.0002 40 25.5002 40 23.6668V7.00016C40 5.16683 38.5 3.66683 36.6667 3.66683ZM11.6667 22.0002L19.1667 12.0002L25 19.5168L29.1667 14.5002L35 22.0002H11.6667Z"
      fill="#F47738"
    />
  </svg>
);

const EditPencilIcon = ({ className, width = 18, height = 18 }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.126 5.12482L11.063 3.18782L14.81 6.93482L12.873 8.87282L9.126 5.12482ZM17.71 2.62982L15.37 0.289816C15.1826 0.103565 14.9292 -0.000976562 14.665 -0.000976562C14.4008 -0.000976563 14.1474 0.103565 13.96 0.289816L12.13 2.11982L15.88 5.86982L17.71 3.99982C17.8844 3.81436 17.9815 3.56938 17.9815 3.31482C17.9815 3.06025 17.8844 2.81528 17.71 2.62982ZM5.63 8.62982L0 14.2498V17.9998H3.75L9.38 12.3798L12.873 8.87282L9.126 5.12482L5.63 8.62982Z"
      fill="#505A5F"
    />
  </svg>
);
const AddressBookIcon = ({ styles, className }) => (
  <svg className={className} style={{ ...styles }} viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 0H2V2H18V0ZM2 24H18V22H2V24ZM18 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM10 6.75C11.24 6.75 12.25 7.76 12.25 9C12.25 10.24 11.24 11.25 10 11.25C8.76 11.25 7.75 10.24 7.75 9C7.75 7.76 8.76 6.75 10 6.75ZM15 17H5V15.5C5 13.83 8.33 13 10 13C11.67 13 15 13.83 15 15.5V17Z"
      fill="#B1B4B6"
    />
  </svg>
);

const LocationIcon = ({ styles, className }) => (
  <svg className={className} style={{ ...styles }} viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 0C3.13 0 0 3.13 0 7C0 8.74 0.5 10.37 1.41 11.84C2.36 13.38 3.61 14.7 4.57 16.24C5.04 16.99 5.38 17.69 5.74 18.5C6 19.05 6.21 20 7 20C7.79 20 8 19.05 8.25 18.5C8.62 17.69 8.95 16.99 9.42 16.24C10.38 14.71 11.63 13.39 12.58 11.84C13.5 10.37 14 8.74 14 7C14 3.13 10.87 0 7 0ZM7 9.75C5.62 9.75 4.5 8.63 4.5 7.25C4.5 5.87 5.62 4.75 7 4.75C8.38 4.75 9.5 5.87 9.5 7.25C9.5 8.63 8.38 9.75 7 9.75Z"
      fill="#B1B4B6"
    />
  </svg>
);
const CollectionsBookmarIcons = ({ styles, className }) => (
  <svg width="22" height="28" className={className} style={{ ...styles }} viewBox="0 0 22 28" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9999 0.666992H2.99992C1.53325 0.666992 0.333252 1.86699 0.333252 3.33366V24.667C0.333252 26.1337 1.53325 27.3337 2.99992 27.3337H18.9999C20.4666 27.3337 21.6666 26.1337 21.6666 24.667V3.33366C21.6666 1.86699 20.4666 0.666992 18.9999 0.666992ZM2.99992 3.33366H9.66658V14.0003L6.33325 12.0003L2.99992 14.0003V3.33366Z" />
  </svg>
);

const FinanceChartIcon = ({ styles, className }) => (
  <svg width="30" height="30" className={className} style={{ ...styles }} viewBox="0 0 30 30" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V26.6667C0 28.5 1.5 30 3.33333 30H26.6667C28.5 30 30 28.5 30 26.6667V3.33333C30 1.5 28.5 0 26.6667 0ZM10 23.3333H6.66667V11.6667H10V23.3333ZM16.6667 23.3333H13.3333V6.66667H16.6667V23.3333ZM23.3333 23.3333H20V16.6667H23.3333V23.3333Z" />
  </svg>
);

const CollectionIcon = ({ styles, className }) => (
  <svg width="24" height="27" className={className} style={{ ...styles }} viewBox="0 0 24 27" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.3333 2.99967H15.76C15.2 1.45301 13.7333 0.333008 12 0.333008C10.2667 0.333008 8.8 1.45301 8.24 2.99967H2.66667C1.2 2.99967 0 4.19967 0 5.66634V24.333C0 25.7997 1.2 26.9997 2.66667 26.9997H21.3333C22.8 26.9997 24 25.7997 24 24.333V5.66634C24 4.19967 22.8 2.99967 21.3333 2.99967ZM12 2.99967C12.7333 2.99967 13.3333 3.59967 13.3333 4.33301C13.3333 5.06634 12.7333 5.66634 12 5.66634C11.2667 5.66634 10.6667 5.06634 10.6667 4.33301C10.6667 3.59967 11.2667 2.99967 12 2.99967ZM14.6667 21.6663H5.33333V18.9997H14.6667V21.6663ZM18.6667 16.333H5.33333V13.6663H18.6667V16.333ZM18.6667 10.9997H5.33333V8.33301H18.6667V10.9997Z" />
  </svg>
);

const BillsIcon = ({ styles, className }) => (
  <svg width="24" height="27" className={className} style={{ ...styles }} viewBox="0 0 24 27" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.3333 2.99967H15.76C15.2 1.45301 13.7333 0.333008 12 0.333008C10.2667 0.333008 8.8 1.45301 8.24 2.99967H2.66667C1.2 2.99967 0 4.19967 0 5.66634V24.333C0 25.7997 1.2 26.9997 2.66667 26.9997H21.3333C22.8 26.9997 24 25.7997 24 24.333V5.66634C24 4.19967 22.8 2.99967 21.3333 2.99967ZM12 2.99967C12.7333 2.99967 13.3333 3.59967 13.3333 4.33301C13.3333 5.06634 12.7333 5.66634 12 5.66634C11.2667 5.66634 10.6667 5.06634 10.6667 4.33301C10.6667 3.59967 11.2667 2.99967 12 2.99967ZM14.6667 21.6663H5.33333V18.9997H14.6667V21.6663ZM18.6667 16.333H5.33333V13.6663H18.6667V16.333ZM18.6667 10.9997H5.33333V8.33301H18.6667V10.9997Z" />
  </svg>
);

const MCollectIcon = ({ styles, className }) => (
  <svg width="37" height="35" className={className} style={{ ...styles }} viewBox="0 0 37 35" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.375 28.75V30.625C34.375 32.6875 32.6875 34.375 30.625 34.375H4.375C2.29375 34.375 0.625 32.6875 0.625 30.625V4.375C0.625 2.3125 2.29375 0.625 4.375 0.625H30.625C32.6875 0.625 34.375 2.3125 34.375 4.375V6.25H17.5C15.4187 6.25 13.75 7.9375 13.75 10V25C13.75 27.0625 15.4187 28.75 17.5 28.75H34.375ZM17.5 25H36.25V10H17.5V25ZM25 20.3125C23.4438 20.3125 22.1875 19.0562 22.1875 17.5C22.1875 15.9438 23.4438 14.6875 25 14.6875C26.5562 14.6875 27.8125 15.9438 27.8125 17.5C27.8125 19.0562 26.5562 20.3125 25 20.3125Z" />
  </svg>
);

const PGRIcon = ({ styles, className }) => (
  <svg width="35" height="39" className={className} style={{ ...styles }} viewBox="0 0 35 39" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.168 0.75H3.83464C1.95547 0.75 0.435052 2.4375 0.435052 4.5L0.417969 38.25L7.2513 30.75H31.168C33.0471 30.75 34.5846 29.0625 34.5846 27V4.5C34.5846 2.4375 33.0471 0.75 31.168 0.75ZM19.2096 17.625H15.793V6.375H19.2096V17.625ZM19.2096 25.125H15.793V21.375H19.2096V25.125Z" />
  </svg>
);
const FirenocIcon = ({ styles, className }) => (
  <svg width="35" height="39" className={className} style={{ ...styles }} viewBox="0 0 35 39" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.5142857,14.0571429 C21.12,13.5428571 20.6571429,13.0971429 20.2114286,12.6514286 C19.0971429,11.6228571 17.8114286,10.8857143 16.7314286,9.80571429 C14.2285714,7.30285714 13.7142857,3.17142857 15.2742857,0 C13.7142857,0.394285714 12.2742857,1.28571429 11.0742857,2.26285714 C6.72,5.82857143 5.00571429,12.12 7.06285714,17.52 C7.13142857,17.6914286 7.2,17.8628571 7.2,18.0857143 C7.2,18.4628571 6.94285714,18.8057143 6.6,18.9428571 C6.22285714,19.1142857 5.81142857,19.0114286 5.50285714,18.7371429 C5.4,18.6514286 5.33142857,18.5657143 5.24571429,18.4457143 C3.36,15.9942857 3.05142857,12.48 4.33714286,9.66857143 C1.52571429,12 8.60422844e-16,15.9428571 0.24,19.6628571 C0.308571429,20.52 0.411428571,21.3771429 0.702857143,22.2342857 C0.942857143,23.2628571 1.38857143,24.2914286 1.93714286,25.2 C3.72,28.1657143 6.85714286,30.2914286 10.2342857,30.72 C13.8342857,31.1828571 17.6914286,30.5142857 20.4514286,27.9771429 C23.5371429,25.1314286 24.6514286,20.5714286 23.0228571,16.6628571 L22.8,16.2171429 C22.4571429,15.4285714 21.9942857,14.7257143 21.4285714,14.0742857 L21.5142857,14.0571429 L21.5142857,14.0571429 Z M16.2,24.8571429 C15.72,25.2685714 14.9485714,25.7142857 14.3485714,25.8857143 C12.4628571,26.5714286 10.5771429,25.6114286 9.42857143,24.48 C11.4685714,24 12.6685714,22.4914286 13.0114286,20.9657143 C13.3028571,19.5942857 12.7714286,18.4628571 12.5485714,17.1428571 C12.3428571,15.8742857 12.3771429,14.7942857 12.8571429,13.6114286 C13.1485714,14.2628571 13.4914286,14.9142857 13.8857143,15.4285714 C15.1885714,17.1428571 17.2285714,17.8971429 17.6571429,20.2285714 C17.7257143,20.4685714 17.76,20.7085714 17.76,20.9657143 C17.8114286,22.3714286 17.2114286,23.9142857 16.1828571,24.8571429 L16.2,24.8571429 Z"
      id="Shape"
    ></path>
  </svg>
);
const BirthIcon = ({ styles, className }) => (
  <svg width="35" height="39" className={className} style={{ ...styles }} viewBox="0 0 35 39" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.7502 0.916016H3.25016C1.646 0.916016 0.333496 2.22852 0.333496 3.83268V27.166C0.333496 28.7702 1.646 30.0827 3.25016 30.0827H20.7502C22.3543 30.0827 23.6668 28.7702 23.6668 27.166V3.83268C23.6668 2.22852 22.3543 0.916016 20.7502 0.916016ZM3.25016 3.83268H10.5418V15.4994L6.896 13.3119L3.25016 15.4994V3.83268Z" />
  </svg>
);
const DeathIcon = ({ styles, className }) => (
  <svg width="35" height="39" className={className} style={{ ...styles }} viewBox="0 0 35 39" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M27.1665 0.375H3.83317C2.229 0.375 0.916504 1.6875 0.916504 3.29167V23.7083C0.916504 25.3125 2.229 26.625 3.83317 26.625H27.1665C28.7707 26.625 30.0832 25.3125 30.0832 23.7083V3.29167C30.0832 1.6875 28.7707 0.375 27.1665 0.375ZM12.5832 20.7917H5.2915V17.875H12.5832V20.7917ZM12.5832 14.9583H5.2915V12.0417H12.5832V14.9583ZM12.5832 9.125H5.2915V6.20833H12.5832V9.125ZM19.6123 17.875L15.4998 13.7333L17.5561 11.6771L19.6123 13.7479L24.2353 9.125L26.3061 11.1958L19.6123 17.875Z"
    />
  </svg>
);
const ErrorIcon = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
      fill="white"
    />
  </svg>
);
const DownloadBtnCommon = () => (
  <svg width="112" height="32" viewBox="0 0 112 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.3337 12H20.0003V4H12.0003V12H6.66699L16.0003 21.3333L25.3337 12ZM6.66699 24V26.6667H25.3337V24H6.66699Z" fill="#F47738" />
    <path
      d="M44.3984 21.5H42.0234L42.0391 20.2734H44.3984C45.2109 20.2734 45.888 20.1042 46.4297 19.7656C46.9714 19.4219 47.3776 18.9427 47.6484 18.3281C47.9245 17.7083 48.0625 16.9844 48.0625 16.1562V15.4609C48.0625 14.8099 47.9844 14.2318 47.8281 13.7266C47.6719 13.2161 47.4427 12.7865 47.1406 12.4375C46.8385 12.0833 46.4688 11.8151 46.0312 11.6328C45.599 11.4505 45.1016 11.3594 44.5391 11.3594H41.9766V10.125H44.5391C45.2839 10.125 45.9635 10.25 46.5781 10.5C47.1927 10.7448 47.7214 11.1016 48.1641 11.5703C48.612 12.0339 48.9557 12.5964 49.1953 13.2578C49.4349 13.9141 49.5547 14.6536 49.5547 15.4766V16.1562C49.5547 16.9792 49.4349 17.7214 49.1953 18.3828C48.9557 19.0391 48.6094 19.599 48.1562 20.0625C47.7083 20.526 47.1667 20.8828 46.5312 21.1328C45.901 21.3776 45.1901 21.5 44.3984 21.5ZM42.8281 10.125V21.5H41.3203V10.125H42.8281ZM51.2188 17.3672V17.1875C51.2188 16.5781 51.3073 16.013 51.4844 15.4922C51.6615 14.9661 51.9167 14.5104 52.25 14.125C52.5833 13.7344 52.987 13.4323 53.4609 13.2188C53.9349 13 54.4661 12.8906 55.0547 12.8906C55.6484 12.8906 56.1823 13 56.6562 13.2188C57.1354 13.4323 57.5417 13.7344 57.875 14.125C58.2135 14.5104 58.4714 14.9661 58.6484 15.4922C58.8255 16.013 58.9141 16.5781 58.9141 17.1875V17.3672C58.9141 17.9766 58.8255 18.5417 58.6484 19.0625C58.4714 19.5833 58.2135 20.0391 57.875 20.4297C57.5417 20.8151 57.138 21.1172 56.6641 21.3359C56.1953 21.5495 55.6641 21.6562 55.0703 21.6562C54.4766 21.6562 53.9427 21.5495 53.4688 21.3359C52.9948 21.1172 52.5885 20.8151 52.25 20.4297C51.9167 20.0391 51.6615 19.5833 51.4844 19.0625C51.3073 18.5417 51.2188 17.9766 51.2188 17.3672ZM52.6641 17.1875V17.3672C52.6641 17.7891 52.7135 18.1875 52.8125 18.5625C52.9115 18.9323 53.0599 19.2604 53.2578 19.5469C53.4609 19.8333 53.7135 20.0599 54.0156 20.2266C54.3177 20.388 54.6693 20.4688 55.0703 20.4688C55.4661 20.4688 55.8125 20.388 56.1094 20.2266C56.4115 20.0599 56.6615 19.8333 56.8594 19.5469C57.0573 19.2604 57.2057 18.9323 57.3047 18.5625C57.4089 18.1875 57.4609 17.7891 57.4609 17.3672V17.1875C57.4609 16.7708 57.4089 16.3776 57.3047 16.0078C57.2057 15.6328 57.0547 15.3021 56.8516 15.0156C56.6536 14.724 56.4036 14.4948 56.1016 14.3281C55.8047 14.1615 55.4557 14.0781 55.0547 14.0781C54.6589 14.0781 54.3099 14.1615 54.0078 14.3281C53.7109 14.4948 53.4609 14.724 53.2578 15.0156C53.0599 15.3021 52.9115 15.6328 52.8125 16.0078C52.7135 16.3776 52.6641 16.7708 52.6641 17.1875ZM62.8672 20L65.0391 13.0469H65.9922L65.8047 14.4297L63.5938 21.5H62.6641L62.8672 20ZM61.4062 13.0469L63.2578 20.0781L63.3906 21.5H62.4141L59.9609 13.0469H61.4062ZM68.0703 20.0234L69.8359 13.0469H71.2734L68.8203 21.5H67.8516L68.0703 20.0234ZM66.2031 13.0469L68.3281 19.8828L68.5703 21.5H67.6484L65.375 14.4141L65.1875 13.0469H66.2031ZM74.2031 14.8516V21.5H72.7578V13.0469H74.125L74.2031 14.8516ZM73.8594 16.9531L73.2578 16.9297C73.263 16.3516 73.349 15.8177 73.5156 15.3281C73.6823 14.8333 73.9167 14.4036 74.2188 14.0391C74.5208 13.6745 74.8802 13.3932 75.2969 13.1953C75.7188 12.9922 76.1849 12.8906 76.6953 12.8906C77.112 12.8906 77.487 12.9479 77.8203 13.0625C78.1536 13.1719 78.4375 13.349 78.6719 13.5938C78.9115 13.8385 79.0938 14.1562 79.2188 14.5469C79.3438 14.9323 79.4062 15.4036 79.4062 15.9609V21.5H77.9531V15.9453C77.9531 15.5026 77.888 15.1484 77.7578 14.8828C77.6276 14.612 77.4375 14.4167 77.1875 14.2969C76.9375 14.1719 76.6302 14.1094 76.2656 14.1094C75.9062 14.1094 75.5781 14.1849 75.2812 14.3359C74.9896 14.487 74.737 14.6953 74.5234 14.9609C74.3151 15.2266 74.151 15.5312 74.0312 15.875C73.9167 16.2135 73.8594 16.5729 73.8594 16.9531ZM83.1719 9.5V21.5H81.7188V9.5H83.1719ZM85.1094 17.3672V17.1875C85.1094 16.5781 85.1979 16.013 85.375 15.4922C85.5521 14.9661 85.8073 14.5104 86.1406 14.125C86.474 13.7344 86.8776 13.4323 87.3516 13.2188C87.8255 13 88.3568 12.8906 88.9453 12.8906C89.5391 12.8906 90.0729 13 90.5469 13.2188C91.026 13.4323 91.4323 13.7344 91.7656 14.125C92.1042 14.5104 92.362 14.9661 92.5391 15.4922C92.7161 16.013 92.8047 16.5781 92.8047 17.1875V17.3672C92.8047 17.9766 92.7161 18.5417 92.5391 19.0625C92.362 19.5833 92.1042 20.0391 91.7656 20.4297C91.4323 20.8151 91.0286 21.1172 90.5547 21.3359C90.0859 21.5495 89.5547 21.6562 88.9609 21.6562C88.3672 21.6562 87.8333 21.5495 87.3594 21.3359C86.8854 21.1172 86.4792 20.8151 86.1406 20.4297C85.8073 20.0391 85.5521 19.5833 85.375 19.0625C85.1979 18.5417 85.1094 17.9766 85.1094 17.3672ZM86.5547 17.1875V17.3672C86.5547 17.7891 86.6042 18.1875 86.7031 18.5625C86.8021 18.9323 86.9505 19.2604 87.1484 19.5469C87.3516 19.8333 87.6042 20.0599 87.9062 20.2266C88.2083 20.388 88.5599 20.4688 88.9609 20.4688C89.3568 20.4688 89.7031 20.388 90 20.2266C90.3021 20.0599 90.5521 19.8333 90.75 19.5469C90.9479 19.2604 91.0964 18.9323 91.1953 18.5625C91.2995 18.1875 91.3516 17.7891 91.3516 17.3672V17.1875C91.3516 16.7708 91.2995 16.3776 91.1953 16.0078C91.0964 15.6328 90.9453 15.3021 90.7422 15.0156C90.5443 14.724 90.2943 14.4948 89.9922 14.3281C89.6953 14.1615 89.3464 14.0781 88.9453 14.0781C88.5495 14.0781 88.2005 14.1615 87.8984 14.3281C87.6016 14.4948 87.3516 14.724 87.1484 15.0156C86.9505 15.3021 86.8021 15.6328 86.7031 16.0078C86.6042 16.3776 86.5547 16.7708 86.5547 17.1875ZM99.6016 20.0547V15.7031C99.6016 15.3698 99.5339 15.0807 99.3984 14.8359C99.2682 14.5859 99.0703 14.3932 98.8047 14.2578C98.5391 14.1224 98.2109 14.0547 97.8203 14.0547C97.4557 14.0547 97.1354 14.1172 96.8594 14.2422C96.5885 14.3672 96.375 14.5312 96.2188 14.7344C96.0677 14.9375 95.9922 15.1562 95.9922 15.3906H94.5469C94.5469 15.0885 94.625 14.7891 94.7812 14.4922C94.9375 14.1953 95.1615 13.9271 95.4531 13.6875C95.75 13.4427 96.1042 13.25 96.5156 13.1094C96.9323 12.9635 97.3958 12.8906 97.9062 12.8906C98.5208 12.8906 99.0625 12.9948 99.5312 13.2031C100.005 13.4115 100.375 13.7266 100.641 14.1484C100.911 14.5651 101.047 15.0885 101.047 15.7188V19.6562C101.047 19.9375 101.07 20.237 101.117 20.5547C101.169 20.8724 101.245 21.1458 101.344 21.375V21.5H99.8359C99.763 21.3333 99.7057 21.112 99.6641 20.8359C99.6224 20.5547 99.6016 20.2943 99.6016 20.0547ZM99.8516 16.375L99.8672 17.3906H98.4062C97.9948 17.3906 97.6276 17.4245 97.3047 17.4922C96.9818 17.5547 96.7109 17.651 96.4922 17.7812C96.2734 17.9115 96.1068 18.0755 95.9922 18.2734C95.8776 18.4661 95.8203 18.6927 95.8203 18.9531C95.8203 19.2188 95.8802 19.4609 96 19.6797C96.1198 19.8984 96.2995 20.0729 96.5391 20.2031C96.7839 20.3281 97.0833 20.3906 97.4375 20.3906C97.8802 20.3906 98.2708 20.2969 98.6094 20.1094C98.9479 19.9219 99.2161 19.6927 99.4141 19.4219C99.6172 19.151 99.7266 18.888 99.7422 18.6328L100.359 19.3281C100.323 19.5469 100.224 19.7891 100.062 20.0547C99.901 20.3203 99.6849 20.5755 99.4141 20.8203C99.1484 21.0599 98.8307 21.2604 98.4609 21.4219C98.0964 21.5781 97.6849 21.6562 97.2266 21.6562C96.6536 21.6562 96.151 21.5443 95.7188 21.3203C95.2917 21.0964 94.9583 20.7969 94.7188 20.4219C94.4844 20.0417 94.3672 19.6172 94.3672 19.1484C94.3672 18.6953 94.4557 18.2969 94.6328 17.9531C94.8099 17.6042 95.0651 17.3151 95.3984 17.0859C95.7318 16.8516 96.1328 16.6745 96.6016 16.5547C97.0703 16.4349 97.5938 16.375 98.1719 16.375H99.8516ZM108.648 19.8594V9.5H110.102V21.5H108.773L108.648 19.8594ZM102.961 17.3672V17.2031C102.961 16.5573 103.039 15.9714 103.195 15.4453C103.357 14.9141 103.583 14.4583 103.875 14.0781C104.172 13.6979 104.523 13.4062 104.93 13.2031C105.341 12.9948 105.799 12.8906 106.305 12.8906C106.836 12.8906 107.299 12.9844 107.695 13.1719C108.096 13.3542 108.435 13.6224 108.711 13.9766C108.992 14.3255 109.214 14.7474 109.375 15.2422C109.536 15.737 109.648 16.2969 109.711 16.9219V17.6406C109.654 18.2604 109.542 18.8177 109.375 19.3125C109.214 19.8073 108.992 20.2292 108.711 20.5781C108.435 20.9271 108.096 21.1953 107.695 21.3828C107.294 21.5651 106.826 21.6562 106.289 21.6562C105.794 21.6562 105.341 21.5495 104.93 21.3359C104.523 21.1224 104.172 20.8229 103.875 20.4375C103.583 20.0521 103.357 19.599 103.195 19.0781C103.039 18.5521 102.961 17.9818 102.961 17.3672ZM104.414 17.2031V17.3672C104.414 17.7891 104.456 18.1849 104.539 18.5547C104.628 18.9245 104.763 19.25 104.945 19.5312C105.128 19.8125 105.359 20.0339 105.641 20.1953C105.922 20.3516 106.258 20.4297 106.648 20.4297C107.128 20.4297 107.521 20.3281 107.828 20.125C108.141 19.9219 108.391 19.6536 108.578 19.3203C108.766 18.987 108.911 18.625 109.016 18.2344V16.3516C108.953 16.0651 108.862 15.7891 108.742 15.5234C108.628 15.2526 108.477 15.013 108.289 14.8047C108.107 14.5911 107.88 14.4219 107.609 14.2969C107.344 14.1719 107.029 14.1094 106.664 14.1094C106.268 14.1094 105.927 14.1927 105.641 14.3594C105.359 14.5208 105.128 14.7448 104.945 15.0312C104.763 15.3125 104.628 15.6406 104.539 16.0156C104.456 16.3854 104.414 16.7812 104.414 17.2031Z"
      fill="#F47738"
    />
  </svg>
);

const PrintBtnCommon = () => (
  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32.1663 13.8333H8.83301C6.06634 13.8333 3.83301 16.0667 3.83301 18.8333V28.8333H10.4997V35.5H30.4997V28.8333H37.1663V18.8333C37.1663 16.0667 34.933 13.8333 32.1663 13.8333ZM27.1663 32.1667H13.833V23.8333H27.1663V32.1667ZM32.1663 20.5C31.2497 20.5 30.4997 19.75 30.4997 18.8333C30.4997 17.9167 31.2497 17.1667 32.1663 17.1667C33.083 17.1667 33.833 17.9167 33.833 18.8333C33.833 19.75 33.083 20.5 32.1663 20.5ZM30.4997 5.5H10.4997V12.1667H30.4997V5.5Z"
      fill="#505A5F"
    />
  </svg>
);

const WhatsappIconGreen = ({ className, styles }) => (
  <svg className={className} style={{ ...styles }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.0566406 24L1.74364 17.837C0.702641 16.033 0.155641 13.988 0.156641 11.891C0.159641 5.335 5.49464 0 12.0496 0C15.2306 0.001 18.2166 1.24 20.4626 3.488C22.7076 5.736 23.9436 8.724 23.9426 11.902C23.9396 18.459 18.6046 23.794 12.0496 23.794C10.0596 23.793 8.09864 23.294 6.36164 22.346L0.0566406 24ZM6.65364 20.193C8.32964 21.188 9.92964 21.784 12.0456 21.785C17.4936 21.785 21.9316 17.351 21.9346 11.9C21.9366 6.438 17.5196 2.01 12.0536 2.008C6.60164 2.008 2.16664 6.442 2.16464 11.892C2.16364 14.117 2.81564 15.783 3.91064 17.526L2.91164 21.174L6.65364 20.193ZM18.0406 14.729C17.9666 14.605 17.7686 14.531 17.4706 14.382C17.1736 14.233 15.7126 13.514 15.4396 13.415C15.1676 13.316 14.9696 13.266 14.7706 13.564C14.5726 13.861 14.0026 14.531 13.8296 14.729C13.6566 14.927 13.4826 14.952 13.1856 14.803C12.8886 14.654 11.9306 14.341 10.7956 13.328C9.91264 12.54 9.31564 11.567 9.14264 11.269C8.96964 10.972 9.12464 10.811 9.27264 10.663C9.40664 10.53 9.56964 10.316 9.71864 10.142C9.86964 9.97 9.91864 9.846 10.0186 9.647C10.1176 9.449 10.0686 9.275 9.99364 9.126C9.91864 8.978 9.32464 7.515 9.07764 6.92C8.83564 6.341 8.59064 6.419 8.40864 6.41L7.83864 6.4C7.64064 6.4 7.31864 6.474 7.04664 6.772C6.77464 7.07 6.00664 7.788 6.00664 9.251C6.00664 10.714 7.07164 12.127 7.21964 12.325C7.36864 12.523 9.31464 15.525 12.2956 16.812C13.0046 17.118 13.5586 17.301 13.9896 17.438C14.7016 17.664 15.3496 17.632 15.8616 17.556C16.4326 17.471 17.6196 16.837 17.8676 16.143C18.1156 15.448 18.1156 14.853 18.0406 14.729Z"
      fill="#25D366"
    />
  </svg>
);

const HelpLineIcon = ({ className, styles }) => (
  <svg className={className} style={{ ...styles }} width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H22C23.1 18 23.99 17.1 23.99 16L24 2C24 0.9 23.1 0 22 0ZM8 3C9.66 3 11 4.34 11 6C11 7.66 9.66 9 8 9C6.34 9 5 7.66 5 6C5 4.34 6.34 3 8 3ZM14 15H2V14C2 12 6 10.9 8 10.9C10 10.9 14 12 14 14V15ZM17.85 11H19.49L21 13L19.01 14.99C17.7 14.01 16.73 12.61 16.28 11C16.1 10.36 16 9.69 16 9C16 8.31 16.1 7.64 16.28 7C16.73 5.38 17.7 3.99 19.01 3.01L21 5L19.49 7H17.85C17.63 7.63 17.5 8.3 17.5 9C17.5 9.7 17.63 10.37 17.85 11Z"
      fill="#0B0C0C"
    />
  </svg>
);

const ServiceCenterIcon = ({ className, styles }) => (
  <svg className={className} style={{ ...styles }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10H4V17H7V10Z" fill="#0B0C0C" />
    <path d="M13.5 10H10.5V17H13.5V10Z" fill="#0B0C0C" />
    <path d="M22 19H2V22H22V19Z" fill="#0B0C0C" />
    <path d="M20 10H17V17H20V10Z" fill="#0B0C0C" />
    <path d="M12 1L2 6V8H22V6L12 1Z" fill="#0B0C0C" />
  </svg>
);

const TimerIcon = ({ className, styles }) => (
  <svg className={className} style={{ ...styles }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.0998 17.3701L14.0998 19.1101C13.1398 19.5501 12.0898 19.84 10.9998 19.9501V17.93C11.7398 17.84 12.4398 17.6501 13.0998 17.3701ZM2.0698 11H0.0498047C0.159805 12.1 0.449805 13.14 0.889805 14.1L2.6298 13.1C2.3498 12.44 2.1598 11.74 2.0698 11ZM13.0998 2.63005L14.0998 0.890049C13.1398 0.450049 12.0998 0.160049 10.9998 0.0500488V2.07005C11.7398 2.16005 12.4398 2.35005 13.0998 2.63005ZM17.9298 9.00005H19.9498C19.8398 7.90005 19.5498 6.86005 19.1098 5.90005L17.3698 6.90005C17.6498 7.56005 17.8398 8.26005 17.9298 9.00005ZM6.8998 17.3701L5.89981 19.1101C6.85981 19.5501 7.9098 19.84 8.9998 19.9501V17.93C8.2598 17.84 7.5598 17.6501 6.8998 17.3701ZM8.9998 2.07005V0.0500488C7.8998 0.160049 6.85981 0.450049 5.89981 0.890049L6.8998 2.63005C7.5598 2.35005 8.2598 2.16005 8.9998 2.07005ZM16.3598 5.17005L18.0998 4.16005C17.4698 3.29005 16.6998 2.52005 15.8298 1.89005L14.8198 3.63005C15.4098 4.08005 15.9198 4.59005 16.3598 5.17005ZM2.6298 6.90005L0.889805 5.90005C0.449805 6.86005 0.159805 7.90005 0.0498047 9.00005H2.0698C2.1598 8.26005 2.3498 7.56005 2.6298 6.90005ZM17.9298 11C17.8398 11.74 17.6498 12.44 17.3698 13.1L19.1098 14.1C19.5498 13.14 19.8398 12.09 19.9498 11H17.9298ZM14.8298 16.3601L15.8398 18.1C16.7098 17.4701 17.4798 16.7 18.1098 15.83L16.3698 14.82C15.9198 15.41 15.4098 15.9201 14.8298 16.3601ZM5.1698 3.64005L4.1698 1.89005C3.2898 2.53005 2.5298 3.29005 1.8998 4.17005L3.6398 5.18005C4.0798 4.59005 4.5898 4.08005 5.1698 3.64005ZM3.6398 14.83L1.8998 15.83C2.5298 16.7 3.2998 17.4701 4.1698 18.1L5.1798 16.3601C4.5898 15.9201 4.0798 15.41 3.6398 14.83ZM10.9998 5.00005H8.9998V10.41L13.2898 14.7L14.6998 13.29L10.9998 9.59005V5.00005Z"
      fill="#F47738"
    />
  </svg>
);

const RupeeSymbol = ({ className, styles }) => (
  <svg className={className} style={{ ...styles }} width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.5781 3.26953H9.12891C9.48828 3.83203 9.72266 4.48438 9.83203 5.22656H12.1875L11.5664 7.54688H9.82031C9.64062 8.71094 9.17578 9.63672 8.42578 10.3242C7.67578 11.0117 6.59766 11.4922 5.19141 11.7656L10.3125 17.8359V18H6.43359L0.761719 11.3555L0.75 9.29297H3.52734C4.97266 9.29297 5.87891 8.71094 6.24609 7.54688H0.46875L1.07812 5.22656H6.17578C5.79297 4.28125 4.95312 3.80078 3.65625 3.78516H0.46875L1.16016 0.9375H12.1875L11.5781 3.26953Z"
      fill="#F47738"
    />
  </svg>
);

const ValidityTimeIcon = ({ className, styles }) => (
  <svg className={className} style={{ ...styles }} width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 0C7.03 0 3 4.03 3 9H0L3.89 12.89L3.96 13.03L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.07 16 8.32 15.21 7.06 13.94L5.64 15.36C7.27 16.99 9.51 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0ZM11 5V10L15.28 12.54L16 11.33L12.5 9.25V5H11Z"
      fill="#F47738"
    />
  </svg>
);

const AddIcon = ({ styles, className, fill = "white" }) => (
  <svg width="14" height="14" className={className} style={{ ...styles }} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.7896 2.58402C9.24786 0.0490554 5.13886 0.0490554 2.59717 2.58402C0.0554699 5.11898 0.0554701 9.21709 2.59717 11.752C5.13886 14.287 9.24786 14.287 11.7896 11.752C14.3312 9.21709 14.3312 5.11898 11.7896 2.58402ZM7.84142 11.1057H6.5453V7.81438H3.24523L3.24523 6.52169H6.5453V3.23036H7.84142V6.52169H11.1415L11.1415 7.81438H7.84142V11.1057Z"
      fill={fill}
    />
  </svg>
);

const UploadIcon = () => (
  <svg width="14" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.62061 13H10.6206V7H14.6206L7.62061 0L0.620605 7H4.62061V13ZM0.620605 15H14.6206V17H0.620605V15Z" fill="#007E7E" />
  </svg>
);

const DeleteIconv2 = ({ styles, className, fill = "#F47738", height = "24", width = "24" }) => (
  <svg width={width} style={styles} className={className} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_431_5088)">
      <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill={fill} />
    </g>
    <defs>
      <clipPath id="clip0_431_5088">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CloseIconWhite = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.66927 1.27203L8.72927 0.332031L5.0026 4.0587L1.27594 0.332031L0.335938 1.27203L4.0626 4.9987L0.335938 8.72536L1.27594 9.66537L5.0026 5.9387L8.72927 9.66537L9.66927 8.72536L5.9426 4.9987L9.66927 1.27203Z"
      fill="white"
    />
  </svg>
);

const InfoIconOutline = ({ styles, className, fill = "#505A5F", height = "20", width = "20" }) => (
  <svg style={styles} className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill={fill}>
    <path
      d="M8.7085 5.54171H10.2918V7.12504H8.7085V5.54171ZM8.7085 8.70837H10.2918V13.4584H8.7085V8.70837ZM9.50016 1.58337C5.13016 1.58337 1.5835 5.13004 1.5835 9.50004C1.5835 13.87 5.13016 17.4167 9.50016 17.4167C13.8702 17.4167 17.4168 13.87 17.4168 9.50004C17.4168 5.13004 13.8702 1.58337 9.50016 1.58337ZM9.50016 15.8334C6.00891 15.8334 3.16683 12.9913 3.16683 9.50004C3.16683 6.00879 6.00891 3.16671 9.50016 3.16671C12.9914 3.16671 15.8335 6.00879 15.8335 9.50004C15.8335 12.9913 12.9914 15.8334 9.50016 15.8334Z"
      fill="#505A5F"
    />
  </svg>
);

const FileIcon = ({ styles, className, fill = "white", height = "64", width = "64" }) => (
  <svg styles={styles} className={className} width="24" height="24" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_431_5092)">
      <path
        d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
        fill="#505A5F"
      />
    </g>
    <defs>
      <clipPath id="clip0_431_5092">
        <rect width="24" height="24" fill={fill} />
      </clipPath>
    </defs>
  </svg>
);

const SubtractIcon = ({ styles, className, fill = "white" }) => (
  <svg width="12" height="14" className={className} style={{ ...styles }} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.24609 0.783203V3.45508H0.667969V0.783203H9.24609Z" fill={fill} />
  </svg>
);

const AddNewIcon = ({ style }) => (
  <svg style={style} width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.3333 14.5833C24.3542 14.5833 25.3312 14.7729 26.25 15.0938V8.75L17.5 0H2.91667C1.29792 0 0 1.29792 0 2.91667V23.3333C0 24.9521 1.3125 26.25 2.91667 26.25H15.0938C14.7729 25.3312 14.5833 24.3542 14.5833 23.3333C14.5833 18.5062 18.5062 14.5833 23.3333 14.5833ZM16.0417 2.1875L24.0625 10.2083H16.0417V2.1875ZM29.1667 21.875V24.7917H24.7917V29.1667H21.875V24.7917H17.5V21.875H21.875V17.5H24.7917V21.875H29.1667Z"
      fill="#F47738"
    />
  </svg>
);

const ViewReportIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M26.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V26.6667C0 28.5 1.5 30 3.33333 30H26.6667C28.5 30 30 28.5 30 26.6667V3.33333C30 1.5 28.5 0 26.6667 0ZM18.3333 23.3333H6.66667V20H18.3333V23.3333ZM23.3333 16.6667H6.66667V13.3333H23.3333V16.6667ZM23.3333 10H6.66667V6.66667H23.3333V10Z"
      fill="#F47738"
    />
  </svg>
);

const InboxIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M26.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V15C0 16.8333 1.5 18.3333 3.33333 18.3333H26.6667C28.5 18.3333 30 16.8333 30 15V3.33333C30 1.5 28.5 0 26.6667 0ZM26.6667 10H20C20 12.7 17.7 15 15 15C12.3 15 10 12.7 10 10H3.33333V3.33333H26.6667V10ZM20 21.6667H30V26.6667C30 28.5 28.5 30 26.6667 30H3.33333C1.5 30 0 28.5 0 26.6667V21.6667H10C10 24.4333 12.2333 26.6667 15 26.6667C17.7667 26.6667 20 24.4333 20 21.6667Z"
      fill="#F47738"
    />
  </svg>
);

const ArrowCollapseUp = () => (
  <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6369 7.3491L12.029 5.9214L5.9536 -0.00228767L0.0299208 6.07307L1.45763 7.46514L5.98937 2.82749L10.6369 7.3491Z" fill="#0B0C0C" />
  </svg>
);

const ArrowCollapseDown = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.41 0.59L-2.62268e-07 2L6 8L12 2L10.59 0.59L6 5.17L1.41 0.59Z" fill="#0B0C0C" />
  </svg>
);

const AddFilled = ({ style = {} }) => (
  <svg width="15" height="15" style={style} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.8828 2.98323C10.1643 0.227501 5.7393 0.19747 2.98357 2.91604C0.227848 5.63461 0.197817 10.0596 2.91639 12.8153C5.63496 15.571 10.0599 15.6011 12.8157 12.8825C15.5714 10.1639 15.6014 5.73895 12.8828 2.98323ZM8.56866 12.1557L7.17286 12.1463L7.19698 8.59243L3.64314 8.56831L3.65261 7.17251L7.20645 7.19663L7.23057 3.6428L8.62637 3.65227L8.60225 7.20611L12.1561 7.23022L12.1466 8.62602L8.59278 8.6019L8.56866 12.1557Z"
      fill="#F47738"
    />
  </svg>
);

const NoResultsFoundIcon = () => (
  <svg width="336" height="262" viewBox="0 0 336 262" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_7426_33765)">
      <path
        opacity="0.1"
        d="M117.863 256.926C150.233 256.926 176.474 251.972 176.474 245.862C176.474 239.751 150.233 234.797 117.863 234.797C85.4937 234.797 59.2529 239.751 59.2529 245.862C59.2529 251.972 85.4937 256.926 117.863 256.926Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M195.218 36.9475C173.677 36.2045 153.162 29.2725 133.572 21.6904C113.982 14.1083 94.5782 5.71033 73.5537 1.69374C60.031 -0.890006 44.5647 -1.25817 33.6713 5.95908C23.184 12.9243 19.7958 24.9143 17.9753 36.0486C16.604 44.4267 15.7986 53.246 19.5529 61.0901C22.1622 66.5362 26.7885 71.1133 29.9903 76.3306C41.1299 94.4798 33.2553 116.861 21.187 134.583C15.529 142.894 8.95573 150.835 4.58574 159.674C0.215751 168.513 -1.8045 178.676 2.01966 187.717C5.80721 196.672 14.8367 203.385 24.6185 208.112C44.4848 217.714 67.8857 220.46 90.7208 222.019C141.254 225.462 192.053 223.972 242.719 222.477C261.47 221.926 280.301 221.365 298.746 218.477C308.991 216.871 319.564 214.324 327.003 208.175C336.442 200.37 338.782 187.156 332.455 177.372C321.844 160.954 292.516 156.878 285.091 139.263C281.01 129.564 285.2 118.765 291.135 109.773C303.862 90.4798 325.193 73.5544 326.314 51.5047C327.086 36.3604 316.832 21.1929 300.976 14.0254C284.358 6.51298 261.31 7.45825 249.056 19.8927C236.425 32.6821 214.239 37.6075 195.218 36.9475Z"
        fill="#F47738"
      />
      <path
        d="M178.101 119.976L167.907 113.127L173.049 105.499L146.123 103.359L136.448 110.815L124.336 104.049L114.235 105.26L114.115 102.607C113.99 99.8403 113.711 97.0832 113.28 94.3478C113.323 93.5186 113.353 92.5667 113.35 91.5319C113.35 87.1704 112.757 81.3893 110.155 77.5352L110.754 72.1687L105.895 66.4473C106.675 64.8982 107.565 63.4064 108.557 61.983C108.724 61.7441 108.89 61.512 109.07 61.2864C115.377 60.832 120.353 55.6645 120.353 49.3461C120.353 49.0543 120.353 48.7624 120.319 48.4738C120.319 48.3577 120.296 48.2383 120.283 48.1223C120.898 48.4539 121.521 48.7856 122.143 49.1173C122.26 49.2831 122.393 49.449 122.539 49.6446L122.569 49.6811L122.756 49.91L122.815 49.9796C122.882 50.0592 122.952 50.1355 123.022 50.2151L123.068 50.2682C123.245 50.4639 123.431 50.6629 123.631 50.8586C123.655 50.8779 123.677 50.8989 123.697 50.9216L123.947 51.1538L124.017 51.2168C124.23 51.4058 124.456 51.5883 124.683 51.7607L124.756 51.8138L125.042 52.0095L125.135 52.0692C125.245 52.1355 125.358 52.2052 125.468 52.2682L125.508 52.2914C125.638 52.3611 125.771 52.4274 125.904 52.4904L125.971 52.517C126.084 52.5656 126.195 52.612 126.303 52.6563L126.407 52.6927C126.523 52.7325 126.636 52.769 126.756 52.8022L126.829 52.8221C126.976 52.8586 127.122 52.8884 127.272 52.9116H127.289C127.43 52.9344 127.572 52.9488 127.715 52.9548H127.811C127.939 52.9614 128.066 52.9614 128.194 52.9548H128.277C128.437 52.9456 128.596 52.9268 128.753 52.8984C129.498 52.8008 130.213 52.5452 130.85 52.1488C131.012 52.0407 131.156 51.9075 131.276 51.7541C131.941 50.8851 131.209 49.9332 131.209 49.9332C130.95 49.3163 129.266 48.8818 129.266 48.8818C129.266 48.8818 123.94 46.6662 123.94 44.9017C123.94 43.1372 122.609 33.983 108.867 31.8901C108.867 31.8901 99.927 31.3893 97.4142 36.1587L97.361 36.716C96.6221 37.177 96.0097 38.1024 95.2808 38.3743C94.9659 38.4417 94.6622 38.5534 94.3788 38.706V38.643C94.2947 38.7163 94.2257 38.8053 94.1758 38.905C94.0193 39.2155 93.9254 39.5535 93.8996 39.9C93.8246 40.3233 93.6771 40.7306 93.4636 41.104C93.404 41.2101 93.3373 41.3121 93.2639 41.4092L93.2073 41.4987C93.5937 41.5287 93.9817 41.4662 94.3389 41.3163C94.2826 41.7704 94.1709 42.2159 94.0061 42.643C94.2177 42.6498 94.4268 42.5959 94.6085 42.4877C94.7902 42.3795 94.9369 42.2216 95.0312 42.0327V42.0062L95.0745 41.9465C95.1582 41.7929 95.2272 41.6319 95.2808 41.4655L95.2442 41.5053C95.3108 41.2898 95.3707 41.0708 95.4439 40.8586C95.4774 40.739 95.5327 40.6266 95.607 40.5269C95.6958 40.4377 95.8044 40.3705 95.9241 40.3307C96.0438 40.291 96.1711 40.2798 96.2959 40.298L96.1595 43.1737H96.2194C96.1392 43.3828 96.0412 43.5848 95.9265 43.7773C95.4539 44.5402 94.5952 45.0609 94.279 45.8967C94.1427 46.2998 94.0906 46.7265 94.1259 47.1504C94.1259 47.3992 94.1559 47.6513 94.1758 47.9V47.8801C94.2224 48.5435 94.2357 49.1737 93.8763 49.7077C93.63 50.0725 93.2339 50.3478 93.0975 50.7624C93.0597 50.8779 93.0428 50.9992 93.0475 51.1206C93.0743 51.4841 93.1504 51.8422 93.2739 52.1853C93.2753 52.1787 93.2753 52.1719 93.2739 52.1654C93.3569 52.4177 93.3763 52.6865 93.3305 52.9481C93.1807 53.6115 92.3719 54.1654 92.4119 54.7989C92.4096 54.8822 92.422 54.9653 92.4485 55.0443C92.6041 55.3537 92.8735 55.5914 93.2007 55.7077C93.7138 55.9985 94.3031 56.1279 94.8914 56.0791C95.1119 56.0394 95.3251 55.9668 95.5238 55.8636C95.2908 56.3975 95.0512 56.9249 94.8082 57.4257C94.7716 57.5053 94.7316 57.5849 94.6917 57.6645C94.6917 57.6645 92.6348 56.2947 91.4666 59.0874C91.1256 59.6678 90.8817 60.2996 90.7444 60.9581C90.6859 61.2215 90.6034 61.479 90.4981 61.7276C89.9795 62.6025 89.2033 63.2973 88.2748 63.7176C85.8918 64.8055 76.2665 76.769 76.0968 79.8669C76.0135 81.0761 75.8083 82.274 75.4844 83.4423C74.7267 86.1937 74.532 89.0688 74.9119 91.8967C75.0308 92.8106 75.2279 93.7128 75.501 94.5932C76.5228 97.6878 77.2051 103.462 77.2051 103.462L78.3101 113.485C78.269 114.869 78.3291 116.253 78.4898 117.628C77.3615 118.912 72.8318 124.262 74.5625 125.718C75.8938 126.865 78.2235 126.676 79.5315 126.441C78.4299 129.157 76.6959 133.88 76.4662 137.124C76.1334 141.923 77.0353 148.281 78.4632 150.723C79.891 153.164 84.6504 159.426 84.6504 159.426C84.6504 159.426 84.4274 168.016 86.1281 171.137C87.8289 174.258 88.5145 180.733 88.5145 180.733C88.5145 180.733 90.1021 186.199 89.3066 188.208C88.5111 190.218 90.781 191.89 88.398 193.227C86.015 194.563 82.9663 224.689 82.9663 224.689C82.9663 224.689 81.7382 244.434 82.9663 245.439C83.032 245.487 83.1022 245.528 83.176 245.562V252.195C83.176 252.195 82.3239 253.588 85.7886 253.87C88.1617 254.059 94.8881 254.487 98.8786 254.736L101.971 254.928C101.971 254.928 109.293 256.381 112.528 254.928C115.763 253.475 121.497 253.509 120.645 249.671C120.532 249.149 120.381 248.636 120.193 248.136C119.258 245.754 117.67 245.482 114.744 244.819C114.575 244.782 114.412 244.749 114.262 244.723C111.18 244.189 110.168 245.618 108.441 243.757C106.94 242.149 102.16 240.348 100.533 239.777C100.573 239.658 100.623 239.542 100.663 239.419C100.202 239.341 99.7731 239.133 99.4278 238.819L103.838 239.097L106.464 239.26C106.464 239.26 112.688 240.497 115.45 239.26C118.212 238.023 123.072 238.056 122.346 234.796C122.251 234.351 122.123 233.915 121.963 233.489C121.168 231.466 119.817 231.243 117.33 230.683C117.187 230.653 117.054 230.623 116.921 230.6C114.302 230.145 113.443 231.359 111.975 229.781C110.717 228.434 106.747 226.925 105.319 226.411C105.319 225.674 104.32 224.626 103.691 223.575C102.952 222.348 104.317 218.053 104.317 218.053L105.096 200.232C105.392 200.1 105.706 200.011 106.028 199.966C106.028 199.966 109.549 196.616 108.754 193.048C108.591 191.968 108.507 190.879 108.501 189.787C109.659 188.716 111.253 187.134 111.706 186.159C112.445 184.57 111.706 176.872 111.706 176.872V147.436L117.597 148.029L122.942 148.577L124.569 148.743L129.915 149.28L142.199 150.517L153.269 148.427L158.058 147.525L167.907 145.668V121.655L178.101 119.976ZM97.0215 40.4042L96.3359 40.3312C96.5622 40.3412 96.8018 40.3843 97.0215 40.4042Z"
        fill="url(#paint0_linear_7426_33765)"
      />
      <path
        d="M154.207 135.571C150.879 140.318 138.914 137.803 138.914 137.803L129.642 129.157L128.394 127.986L130.487 123.555C130.487 123.555 131.153 123.737 132.294 124.062C138.288 125.797 157.016 131.581 154.207 135.571Z"
        fill="#EFB7B9"
      />
      <path
        opacity="0.1"
        d="M132.288 124.062C131.878 125.482 130.757 127.608 129.642 129.157L128.394 127.986L130.487 123.555C130.487 123.555 131.159 123.737 132.288 124.062Z"
        fill="black"
      />
      <path
        d="M100.486 74.0925C100.486 74.0925 91.9393 77.8703 92.3587 87.1472C92.6604 93.1239 93.3139 99.0777 94.3157 104.978C94.3157 104.978 92.5684 118.938 99.8439 122.537C107.119 126.136 113.853 129.094 113.853 129.094C113.853 129.094 125.235 130.315 126.65 130.819C128.064 131.323 132.484 123.615 131.669 122.414C130.853 121.214 120.406 118.696 119.075 116.693C117.743 114.689 114.665 113.452 114.665 113.452C114.665 113.452 111.486 111.535 111.27 109.804C111.053 108.073 111.892 106.782 112.105 106.023C112.318 105.263 112.857 97.93 112.857 97.93C112.857 97.93 116.445 71.8271 100.486 74.0925Z"
        fill="#DCE6F2"
      />
      <path
        opacity="0.1"
        d="M106.128 104.594C106.128 104.594 94.4024 106.551 95.5373 110.64C95.5373 110.64 99.7942 106.226 106.128 104.594Z"
        fill="black"
      />
      <path
        opacity="0.1"
        d="M106.218 106.25C106.218 106.25 99.7713 111.494 101.033 111.762C102.294 112.031 106.218 106.25 106.218 106.25Z"
        fill="black"
      />
      <path
        opacity="0.1"
        d="M109.316 108.078C109.316 108.078 107.589 111.604 108.651 111.365C109.712 111.126 109.316 108.078 109.316 108.078Z"
        fill="black"
      />
      <path
        opacity="0.1"
        d="M132.72 124.441L132.008 124.239C132.211 123.575 132.268 123.038 132.101 122.789C131.286 121.589 120.845 119.074 119.517 117.068C118.189 115.061 115.107 113.827 115.107 113.827C115.107 113.827 111.929 111.91 111.713 110.179C111.496 108.448 112.335 107.157 112.548 106.398C112.761 105.638 113.3 98.3017 113.3 98.3017C113.3 98.3017 116.878 72.2022 100.919 74.4675C100.919 74.4675 92.3721 78.2486 92.7881 87.5255C93.09 93.5023 93.7446 99.4563 94.7485 105.356C94.7485 105.356 93.0012 119.317 100.277 122.915C107.552 126.514 114.285 129.472 114.285 129.472C114.285 129.472 125.665 130.69 127.082 131.197C127.618 131.39 128.587 130.398 129.535 129.035L130.075 129.536L139.347 138.179C139.347 138.179 151.312 140.696 154.64 135.95C157.453 131.957 138.728 126.172 132.72 124.441Z"
        fill="black"
      />
      <path
        d="M95.5671 39.2748C95.2413 39.3382 94.9292 39.4584 94.6452 39.6296C94.3123 39.9049 94.3123 40.3759 94.2291 40.7872C94.1314 41.3593 93.9037 41.9016 93.5635 42.3726C93.9422 42.4003 94.3221 42.3378 94.6718 42.1902C94.6148 42.6441 94.5031 43.0896 94.339 43.5169C94.5463 43.5221 94.7508 43.4677 94.9279 43.36C95.105 43.2524 95.2472 43.0961 95.3374 42.9099C95.5135 42.5362 95.6529 42.1463 95.7535 41.7457C95.7847 41.6259 95.839 41.5133 95.9132 41.4141C96.2194 41.0525 96.7885 41.2151 97.2612 41.2615C97.6545 41.2945 98.0495 41.2222 98.4053 41.0519C98.7611 40.8816 99.0647 40.6196 99.2847 40.293C99.7873 39.5335 99.8172 37.5898 98.6191 37.3842C97.3677 37.1786 96.5888 38.8966 95.5671 39.2748Z"
        fill="#965D7B"
      />
      <g opacity="0.1">
        <path
          opacity="0.1"
          d="M94.6118 40.0333C94.6417 39.8707 94.6617 39.7016 94.6983 39.5391C94.3821 39.8144 94.3655 40.282 94.2823 40.6966C94.2404 40.9358 94.1746 41.1703 94.0859 41.3964C94.348 40.9802 94.5266 40.5173 94.6118 40.0333Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M94.7183 42.772C94.884 42.3453 94.9958 41.8996 95.0511 41.4453C94.7178 41.5851 94.357 41.6475 93.996 41.6277C93.8909 41.861 93.7627 42.0832 93.6133 42.2911C93.9907 42.3202 94.3696 42.2588 94.7183 42.112C94.663 42.5663 94.5512 43.0119 94.3854 43.4387C94.5927 43.4435 94.7971 43.3889 94.9741 43.2813C95.1511 43.1737 95.2934 43.0176 95.3839 42.8317C95.4668 42.681 95.5338 42.522 95.5836 42.3574C95.4859 42.4934 95.3555 42.6027 95.2042 42.6752C95.053 42.7476 94.8858 42.7809 94.7183 42.772Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M97.6407 40.5157C97.1681 40.4693 96.5956 40.3068 96.2894 40.6683C96.2165 40.7684 96.1624 40.8807 96.1297 41C96.0997 41.0862 96.0731 41.1758 96.0498 41.2653C96.366 41.0166 96.8785 41.1492 97.3079 41.1924C97.7011 41.2243 98.0957 41.1515 98.4513 40.9813C98.8069 40.8111 99.1107 40.5497 99.3314 40.2239C99.4323 40.0628 99.5076 39.8871 99.5544 39.7031C99.3265 39.9843 99.0328 40.2054 98.6992 40.347C98.3655 40.4887 98.0021 40.5466 97.6407 40.5157Z"
          fill="black"
        />
      </g>
      <path d="M105.585 66.6641L110.661 72.747L109.998 78.8863L103.864 69.3175L105.585 66.6641Z" fill="#DCE6F2" />
      <path
        opacity="0.1"
        d="M110.657 72.747L110.035 78.5214L109.995 78.8863L104.46 70.2495L103.864 69.3175L104.037 69.0488L105.582 66.6641L105.924 67.0753L110.657 72.747Z"
        fill="black"
      />
      <path
        d="M113.293 58.4308C111.576 58.9217 109.935 60.6066 108.507 62.653C107.542 64.065 106.679 65.5436 105.925 67.0776C105.455 68.0129 105.043 68.9117 104.7 69.6945L104.46 70.2517C103.881 71.6149 103.558 72.527 103.558 72.527C103.558 72.527 90.4116 62.6763 92.4917 62.0129C93.1907 61.7907 94.1092 60.2982 95.0179 58.4176L95.131 58.1788C95.7068 56.9715 96.2726 55.6249 96.7752 54.3579C97.8036 51.7542 98.5658 49.4922 98.5658 49.4922C98.5658 49.4922 118.535 56.9383 113.293 58.4308Z"
        fill="#EFB7B9"
      />
      <path
        d="M121.158 48.9375C121.158 48.9375 124.194 54.4101 128.271 53.6639C132.348 52.9176 130.67 50.7252 130.67 50.7252L121.158 48.9375Z"
        fill="#0B4B66"
      />
      <path
        d="M115.277 238.376C112.588 239.6 106.507 238.376 106.507 238.376L103.945 238.217C100.616 238.005 95.0449 237.647 93.0746 237.488C90.199 237.252 90.9046 236.078 90.9046 236.078V228.983L104.857 225.461C104.857 225.461 110.372 227.342 111.883 228.983C113.317 230.549 114.156 229.345 116.715 229.796C116.842 229.819 116.975 229.846 117.115 229.879C119.544 230.433 120.862 230.652 121.641 232.658C121.797 233.08 121.923 233.512 122.017 233.952C122.736 237.182 117.963 237.159 115.277 238.376Z"
        fill="#A36468"
      />
      <path
        opacity="0.1"
        d="M121.641 232.659C121.141 232.971 120.616 233.239 120.07 233.462C118.24 234.294 116.499 235.309 114.648 236.095C112.798 236.881 110.804 237.442 108.801 237.293C107.752 237.216 106.68 236.961 105.679 237.26C105.059 237.498 104.476 237.82 103.945 238.218C100.616 238.006 95.0449 237.648 93.0746 237.488C90.199 237.253 90.9046 236.079 90.9046 236.079V235.25C91.0078 235.25 91.1243 235.22 91.2574 235.21C91.9462 235.199 92.632 235.301 93.2876 235.512C94.7321 235.903 96.1699 236.288 97.6143 236.672C97.7331 236.226 97.942 235.808 98.228 235.444C98.5141 235.08 98.8715 234.778 99.2785 234.556C100.103 234.12 101.028 233.909 101.961 233.943C104.201 233.973 106.321 235.031 108.558 235.137C109.183 235.194 109.812 235.089 110.385 234.832C110.691 234.679 110.961 234.457 111.26 234.288C111.74 234.057 112.246 233.886 112.768 233.78C114.235 233.416 115.675 232.953 117.078 232.394C117.477 232.238 117.943 231.956 117.89 231.532C117.82 230.968 116.932 230.901 116.699 230.384C116.657 230.291 116.638 230.189 116.643 230.087C116.648 229.986 116.676 229.886 116.725 229.797C116.852 229.82 116.985 229.847 117.125 229.88C119.544 230.434 120.862 230.653 121.641 232.659Z"
        fill="black"
      />
      <path
        d="M112.435 253.896C109.273 255.335 102.118 253.896 102.118 253.896L99.1055 253.72C95.2048 253.471 88.6348 253.057 86.315 252.861C82.9302 252.583 83.7623 251.203 83.7623 251.203V242.841L100.181 238.695C100.181 238.695 106.671 240.908 108.448 242.841C110.135 244.682 111.11 243.266 114.136 243.796C114.286 243.823 114.442 243.856 114.605 243.893C117.464 244.556 119.015 244.805 119.93 247.166C120.116 247.662 120.264 248.171 120.373 248.689C121.198 252.49 115.597 252.46 112.435 253.896Z"
        fill="#A36468"
      />
      <path
        opacity="0.1"
        d="M119.924 247.166C119.336 247.532 118.718 247.848 118.077 248.111C115.923 249.089 113.873 250.283 111.696 251.209C109.52 252.134 107.173 252.791 104.813 252.618C103.582 252.529 102.321 252.22 101.152 252.579C100.42 252.863 99.7315 253.247 99.1055 253.72C95.2048 253.471 88.6348 253.056 86.315 252.861C82.9302 252.582 83.7623 251.202 83.7623 251.202V250.227C83.9001 250.205 84.0389 250.189 84.1783 250.181C84.9891 250.166 85.7967 250.286 86.568 250.536L91.6569 251.902C91.7986 251.375 92.0468 250.882 92.3861 250.454C92.7255 250.026 93.1489 249.671 93.6305 249.411C94.6006 248.896 95.6905 248.646 96.789 248.688C99.425 248.725 101.918 249.968 104.551 250.094C105.284 250.161 106.022 250.039 106.694 249.74C107.057 249.557 107.36 249.295 107.726 249.099C108.289 248.825 108.885 248.624 109.5 248.502C111.216 248.071 112.902 247.526 114.545 246.871C115.015 246.685 115.564 246.353 115.5 245.856C115.417 245.192 114.372 245.113 114.096 244.502C114.049 244.392 114.028 244.273 114.034 244.154C114.04 244.034 114.072 243.918 114.129 243.812C114.279 243.839 114.435 243.872 114.598 243.909C117.457 244.545 119.008 244.804 119.924 247.166Z"
        fill="black"
      />
      <path
        d="M105.279 196.523L104.39 217.363C104.39 217.363 103.059 221.618 103.781 222.835C104.503 224.052 105.721 225.266 105.279 225.986C104.836 226.706 99.5109 234.487 97.7902 231.502C96.0695 228.517 94.3721 215.581 94.3721 215.581L95.9596 199.605L105.279 196.523Z"
        fill="#0B4B66"
      />
      <path
        d="M109.133 144.602L111.603 147.892V176.509C111.603 176.509 112.325 184.137 111.603 185.713C110.88 187.288 107.219 190.439 107.219 190.439L104.141 174.684L104.806 158.018L109.133 144.602Z"
        fill="#0B4B66"
      />
      <path
        opacity="0.1"
        d="M105.279 196.523L104.39 217.363C104.39 217.363 103.059 221.618 103.781 222.835C104.503 224.052 105.721 225.266 105.279 225.986C104.836 226.706 99.5109 234.487 97.7902 231.502C96.0695 228.517 94.3721 215.581 94.3721 215.581L95.9596 199.605L105.279 196.523Z"
        fill="black"
      />
      <path
        opacity="0.1"
        d="M109.133 144.602L111.603 147.892V176.509C111.603 176.509 112.325 184.137 111.603 185.713C110.88 187.288 107.219 190.439 107.219 190.439L104.141 174.684L104.806 158.018L109.133 144.602Z"
        fill="black"
      />
      <path
        d="M111.603 132.398V147.877L108.83 159.927C108.83 159.927 107.942 189.005 108.717 192.54C109.492 196.076 106.054 199.396 106.054 199.396C106.054 199.396 104.057 199.618 104.057 201.164C104.057 202.71 100.729 207.134 100.729 207.134L100.839 215.758C100.839 215.758 102.283 231.9 100.064 234.995C97.8436 238.089 100.839 238.534 100.839 238.534C98.0666 247.598 84.7536 245.499 83.5521 244.504C82.3506 243.509 83.5521 223.94 83.5521 223.94C83.5521 223.94 86.5276 194.089 88.8573 192.763C91.1871 191.436 88.9705 189.777 89.746 187.787C90.5215 185.797 88.9705 180.381 88.9705 180.381C88.9705 180.381 88.3048 173.967 86.6407 170.872C84.9766 167.777 85.1963 159.263 85.1963 159.263C85.1963 159.263 80.5367 153.071 79.1522 150.64C77.7676 148.209 76.8756 141.907 77.2085 137.151C77.4348 133.937 79.1289 129.257 80.2039 126.564C80.7198 125.273 81.0925 124.438 81.0925 124.438L81.4087 124.52L99.5876 129.263L111.603 132.398Z"
        fill="#0B4B66"
      />
      <path
        opacity="0.1"
        d="M113.294 58.4306C111.577 58.9215 109.936 60.6064 108.508 62.6528H108.135C106.042 62.6543 103.986 62.1052 102.174 61.061C100.363 60.0168 98.8599 58.5145 97.8175 56.7059C97.3819 55.9565 97.0314 55.1611 96.7725 54.3344C97.8009 51.7308 98.5631 49.4688 98.5631 49.4688C98.5631 49.4688 118.536 56.9381 113.294 58.4306Z"
        fill="black"
      />
      <path
        d="M120.033 50.1397C120.036 51.9545 119.621 53.7458 118.82 55.3755C118.019 57.0053 116.853 58.43 115.412 59.5399C113.971 60.6499 112.294 61.4155 110.51 61.7777C108.725 62.14 106.881 62.0892 105.12 61.6293C103.358 61.1694 101.726 60.3127 100.349 59.1251C98.9717 57.9376 97.8865 56.4508 97.1769 54.7795C96.4673 53.1082 96.1521 51.2968 96.2556 49.4849C96.3591 47.6731 96.8786 45.9091 97.774 44.3288C98.1347 43.6867 98.5559 43.0803 99.032 42.5179C99.8169 41.586 100.739 40.7786 101.768 40.1232C103.505 39.0231 105.499 38.3908 107.555 38.2883C109.61 38.1857 111.657 38.6163 113.496 39.538C115.335 40.4597 116.902 41.841 118.045 43.5469C119.188 45.2528 119.867 47.225 120.017 49.2708C120.023 49.5626 120.033 49.8512 120.033 50.1397Z"
        fill="#EFB7B9"
      />
      <path
        opacity="0.1"
        d="M110.035 78.5246L109.995 78.8895L104.46 70.2659C103.881 71.6291 103.558 72.5412 103.558 72.5412C103.558 72.5412 90.4116 62.6772 92.4917 62.0138C93.1907 61.7916 94.1092 60.2991 95.0179 58.4185L95.131 58.1797C96.0962 61.0454 101.704 66.7734 104.037 69.0686C104.307 69.3339 104.53 69.5528 104.703 69.712L105.059 70.0437L105.246 70.2294C106.094 71.1017 109.675 74.9492 110.035 78.5246Z"
        fill="black"
      />
      <path
        d="M114.172 107.788L113.566 127.214L113.46 130.673C113.46 130.673 106.284 130.01 99.5875 129.28C94.1958 128.693 89.1135 128.06 88.3314 127.688C87.3329 127.22 85.1929 126.859 83.5054 126.63C82.2008 126.454 81.1757 126.361 81.1757 126.361C81.1757 126.361 80.7929 126.474 80.2038 126.58C78.9191 126.812 76.6625 127.002 75.3479 125.864C73.6671 124.408 78.0837 119.118 79.1854 117.847L79.4283 117.572L79.0123 113.741L77.9306 103.808C77.9306 103.808 77.265 98.0861 76.2665 95.0181C75.9995 94.1458 75.8069 93.2527 75.6907 92.3481C75.3197 89.546 75.5098 86.6985 76.2498 83.97C76.566 82.8107 76.7667 81.623 76.8489 80.4244C77.0153 77.3564 86.4176 65.499 88.7474 64.4211C89.7955 63.9341 90.6388 63.096 91.1305 62.0529C91.2928 61.725 91.4146 61.3786 91.4932 61.0214C92.4917 56.7097 95.0178 58.4211 95.0178 58.4211C95.6269 61.7942 105.056 70.7229 105.056 70.7229L105.242 70.9087C106.177 71.8639 110.344 76.3481 110.048 80.1757C109.989 81.6002 110.203 83.023 110.677 84.368C112.595 90.3862 113.698 96.6327 113.956 102.942L114.172 107.788Z"
        fill="#DCE6F2"
      />
      <path
        opacity="0.1"
        d="M100.812 84.7188C100.812 84.7188 98.4824 90.3572 96.7351 91.2693C94.9877 92.1815 101.644 93.1931 100.812 84.7188Z"
        fill="black"
      />
      <path opacity="0.1" d="M102.56 95.25C102.56 95.25 97.2344 95.9133 97.2344 96.9084C97.2344 97.9034 102.56 95.25 102.56 95.25Z" fill="black" />
      <path
        opacity="0.1"
        d="M108.135 101.711C108.135 101.711 100.397 118.129 98.2333 118.626C96.0699 119.124 108.135 101.711 108.135 101.711Z"
        fill="black"
      />
      <path
        opacity="0.1"
        d="M104.909 71.5493L98.509 74.3221L90.7842 62.6936C90.9465 62.3656 91.0683 62.0192 91.147 61.6621C92.1454 57.3503 94.6716 59.0617 94.6716 59.0617C95.2806 62.4349 104.71 71.3636 104.71 71.3636L104.909 71.5493Z"
        fill="black"
      />
      <path
        d="M105.242 70.8852L98.842 73.658L91.1172 62.0295C91.2795 61.7015 91.4013 61.3552 91.48 60.998C92.4784 56.6862 95.0046 58.3977 95.0046 58.3977C95.6136 61.7708 105.043 70.6995 105.043 70.6995L105.242 70.8852Z"
        fill="#DCE6F2"
      />
      <path
        opacity="0.1"
        d="M113.46 130.668C113.46 130.668 106.285 130.004 99.5882 129.275L111.603 132.409V136.057C111.077 136.532 110.621 136.777 110.325 136.651C108.941 136.071 97.6412 134.246 97.6412 134.246C97.6412 134.246 91.0779 130.93 83.9954 126.95C83.8234 126.855 83.6568 126.751 83.4961 126.638C82.6703 126.079 81.9587 125.369 81.3993 124.545C80.0913 122.658 79.4523 120.233 79.1761 117.855C79.0208 116.492 78.9629 115.12 79.003 113.749C79.0373 112.194 79.1796 110.644 79.429 109.109C78.744 103.163 78.4106 97.1828 78.4305 91.1983C78.5137 81.9114 87.2504 78.5946 87.2504 78.5946C103.309 77.185 98.3301 103.056 98.3301 103.056C98.3301 103.056 97.4015 110.353 97.1486 111.099C96.8956 111.845 95.987 113.089 96.1102 114.83C96.2333 116.571 99.302 118.654 99.302 118.654C99.302 118.654 102.297 120.054 103.532 122.127C104.431 123.656 110.269 125.729 113.567 127.208L113.46 130.668Z"
        fill="black"
      />
      <path
        opacity="0.1"
        d="M118.839 42.773C118.845 43.3193 118.731 43.8604 118.506 44.3584C118.335 44.7648 118.137 45.1593 117.913 45.5392C117.563 46.2379 117.066 46.8533 116.456 47.3435C115.687 47.8907 114.715 48.0433 113.793 48.2655C112.871 48.4877 111.912 48.8426 111.387 49.6254C111.102 50.1286 110.911 50.6793 110.824 51.2506C110.736 51.8214 110.507 52.3615 110.158 52.8227C109.977 53.0479 109.725 53.2066 109.443 53.2738C109.161 53.3411 108.865 53.3131 108.601 53.1942C108.323 53.0072 108.111 52.7364 107.998 52.4214C107.619 51.569 107.523 50.6237 107.369 49.705C107.216 48.7863 107 47.841 106.434 47.1013C105.868 46.3617 104.867 45.8742 103.978 46.1627C103.681 46.2768 103.409 46.4496 103.18 46.6708C102.952 46.8919 102.77 47.1568 102.647 47.4496C102.401 48.0358 102.232 48.6511 102.144 49.2805C101.731 51.5314 101.244 53.7691 100.683 55.9936C100.666 56.0847 100.628 56.1709 100.573 56.2456C100.485 56.3335 100.365 56.3835 100.24 56.3849C99.4948 56.4844 98.7792 55.9637 98.027 56.0201C97.9495 56.0252 97.8727 56.0374 97.7974 56.0566C96.5813 53.9503 96.0443 51.5224 96.2592 49.1018C96.4741 46.6812 97.4305 44.385 98.9989 42.5242L99.0588 42.5077C99.5591 42.3306 100.014 42.0452 100.39 41.6718C100.871 41.1927 101.315 40.6795 101.721 40.1362L101.988 39.8045C102.753 38.8861 103.624 38.0611 104.584 37.3468C104.846 37.1329 105.146 36.9708 105.469 36.8692C105.745 36.8155 106.029 36.8066 106.308 36.8426C107.457 36.9802 108.616 37.0234 109.772 36.972C110.578 36.8458 111.39 36.7638 112.205 36.7266C114.312 36.7863 116.109 38.2689 117.441 39.8941C118.156 40.7266 118.795 41.6851 118.839 42.773Z"
        fill="black"
      />
      <path
        d="M96.2201 44.6417C95.7575 45.398 94.9221 45.9121 94.6092 46.7412C94.1499 47.9452 94.9254 49.4444 94.2132 50.519C93.9769 50.8805 93.5875 51.1492 93.4543 51.5638C93.228 52.2636 93.8471 53.0099 93.6873 53.7296C93.5276 54.4494 92.5757 55.0563 92.8286 55.7595C92.9781 56.0661 93.2403 56.3037 93.5608 56.4228C94.0652 56.7111 94.6456 56.8395 95.225 56.791C96.1336 56.6417 96.8092 55.7528 97.7311 55.6865C98.48 55.6334 99.1956 56.1509 99.9411 56.0547C100.066 56.0503 100.185 55.9994 100.274 55.9121C100.33 55.8381 100.368 55.7516 100.384 55.66C100.943 53.4378 101.431 51.2001 101.848 48.9469C101.933 48.3174 102.101 47.7018 102.347 47.116C102.472 46.8238 102.654 46.5594 102.882 46.3384C103.111 46.1174 103.382 45.9442 103.679 45.8291C104.567 45.5439 105.566 46.0281 106.135 46.7678C106.704 47.5074 106.92 48.4527 107.074 49.3714C107.227 50.2902 107.323 51.2354 107.699 52.0878C107.814 52.404 108.026 52.6758 108.305 52.864C108.804 53.1525 109.477 52.9237 109.859 52.4925C110.21 52.0311 110.439 51.4894 110.525 50.917C110.612 50.3468 110.802 49.7971 111.087 49.2951C111.613 48.5124 112.575 48.1575 113.494 47.9353C114.412 47.713 115.381 47.5572 116.156 47.0099C116.766 46.5203 117.263 45.9061 117.614 45.2089C118.107 44.3532 118.566 43.4245 118.526 42.4394C118.483 41.3648 117.844 40.4062 117.161 39.5704C115.83 37.9452 114.03 36.4626 111.923 36.4062C111.108 36.4402 110.295 36.5222 109.49 36.6517C108.333 36.7035 107.174 36.6591 106.025 36.519C105.746 36.4857 105.463 36.4958 105.186 36.5489C104.863 36.6473 104.563 36.8097 104.304 37.0265C103.344 37.7396 102.471 38.5635 101.705 39.4809C101.211 40.1337 100.675 40.7542 100.101 41.3383C99.7245 41.7122 99.2699 41.9987 98.7696 42.1774C98.4367 42.2703 98.1039 42.2039 97.7877 42.3067C96.8059 42.6152 96.6761 43.8922 96.2201 44.6417Z"
        fill="#965D7B"
      />
      <path
        opacity="0.1"
        d="M128.271 53.6606C125.608 54.1481 123.401 52.0022 122.18 50.4367C121.805 49.9612 121.463 49.4603 121.158 48.9375L130.298 50.6556L130.667 50.7252C130.667 50.7252 132.348 52.9176 128.271 53.6606Z"
        fill="black"
      />
      <g opacity="0.1">
        <path
          opacity="0.1"
          d="M93.687 52.7814C93.7242 52.3477 93.6581 51.9113 93.4939 51.5078C93.4939 51.541 93.464 51.5741 93.454 51.6073C93.3109 52.0518 93.5039 52.5128 93.6271 52.9738C93.6535 52.9119 93.6736 52.8474 93.687 52.7814Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M94.4794 47.3516C94.4451 47.8102 94.454 48.271 94.506 48.728C94.5401 48.2694 94.5312 47.8086 94.4794 47.3516Z"
          fill="black"
        />
        <path
          opacity="0.1"
          d="M117.594 44.2487C117.243 44.9474 116.746 45.5628 116.136 46.053C115.367 46.6003 114.399 46.7528 113.473 46.975C112.548 47.1973 111.593 47.5522 111.067 48.3349C110.783 48.8383 110.592 49.389 110.505 49.9601C110.418 50.5323 110.189 51.0739 109.839 51.5356C109.456 51.9668 108.784 52.1989 108.285 51.907C108.005 51.7189 107.793 51.4471 107.679 51.1309C107.303 50.2785 107.203 49.3366 107.053 48.4145C106.903 47.4925 106.68 46.5505 106.115 45.8109C105.549 45.0712 104.547 44.5837 103.658 44.8722C103.361 44.9868 103.09 45.1598 102.862 45.3809C102.633 45.602 102.451 45.8666 102.327 46.1591C102.081 46.7449 101.913 47.3605 101.828 47.99C101.413 50.2431 100.925 52.4808 100.363 54.7031C100.348 54.7947 100.31 54.8812 100.254 54.9551C100.164 55.0425 100.046 55.0934 99.9207 55.0978C99.1752 55.1939 98.4596 54.6765 97.7108 54.7296C96.7889 54.7959 96.1132 55.6848 95.2046 55.8308C94.625 55.8826 94.0436 55.7539 93.5405 55.4626C93.3091 55.3634 93.1016 55.2165 92.9314 55.0314C92.8535 55.1426 92.802 55.2698 92.7807 55.4037C92.7593 55.5376 92.7688 55.6745 92.8083 55.8042C92.9549 56.113 93.2181 56.3515 93.5405 56.4676C94.0436 56.7589 94.625 56.8875 95.2046 56.8357C96.1132 56.6898 96.7889 55.8009 97.7108 55.7346C98.4596 55.6815 99.1752 56.1989 99.9207 56.1027C100.046 56.0984 100.164 56.0475 100.254 55.9601C100.31 55.8862 100.348 55.7997 100.363 55.708C100.923 53.4969 101.411 51.2592 101.828 48.9949C101.913 48.3655 102.081 47.7499 102.327 47.1641C102.451 46.8716 102.633 46.607 102.862 46.3859C103.09 46.1648 103.361 45.9918 103.658 45.8772C104.547 45.5886 105.545 46.0762 106.115 46.8158C106.684 47.5555 106.9 48.5007 107.053 49.4195C107.206 50.3382 107.303 51.2835 107.679 52.1359C107.793 52.452 108.005 52.7238 108.285 52.912C108.784 53.2006 109.456 52.9717 109.839 52.5405C110.189 52.0789 110.418 51.5373 110.505 50.9651C110.592 50.3939 110.783 49.8433 111.067 49.3399C111.593 48.5571 112.555 48.2056 113.473 47.98C114.392 47.7545 115.36 47.6052 116.136 47.058C116.746 46.5678 117.243 45.9524 117.594 45.2537C118.086 44.4012 118.546 43.4726 118.506 42.4875C118.499 42.3608 118.486 42.2346 118.466 42.1094C118.305 42.8685 118.01 43.593 117.594 44.2487Z"
          fill="black"
        />
      </g>
      <path
        opacity="0.1"
        d="M118.519 44.3493C119.372 45.8616 119.878 47.5439 120 49.2747C117.034 47.6163 114.245 45.7954 112.837 45.1619C110.384 44.0574 101.212 44.2233 97.7637 44.3261C98.1244 43.684 98.5456 43.0776 99.0217 42.5151C99.8096 41.5825 100.736 40.775 101.768 40.1204C103.134 39.2561 104.664 38.6785 106.262 38.4231C107.86 38.1677 109.494 38.2398 111.063 38.635C112.633 39.0301 114.105 39.7401 115.39 40.7215C116.674 41.7029 117.745 42.935 118.535 44.3427L118.519 44.3493Z"
        fill="black"
      />
      <path
        opacity="0.1"
        d="M129.103 52.2543C127.502 52.7451 124.889 51.7965 122.18 50.4367C121.805 49.9612 121.463 49.4603 121.158 48.9375L130.298 50.6556C130.903 51.0669 131.056 51.6539 129.103 52.2543Z"
        fill="black"
      />
      <path
        d="M108.844 32.851C108.844 32.851 100.107 32.3535 97.6509 37.0798L97.2548 41.2689L96.5892 41.1959L96.4561 44.045C96.4561 44.045 109.809 43.4646 112.848 44.8311C115.886 46.1976 125.329 53.0832 129.113 51.9223C132.897 50.7614 128.78 49.6835 128.78 49.6835C128.78 49.6835 123.571 47.4845 123.571 45.7598C123.571 44.0351 122.28 34.924 108.844 32.851Z"
        fill="#0B4B66"
      />
      <path
        opacity="0.1"
        d="M91.9932 188.141C91.9932 188.141 97.568 193.53 99.981 193.116C99.981 193.116 93.1581 192.535 91.9932 188.141Z"
        fill="black"
      />
      <path
        opacity="0.1"
        d="M90.8281 190.641C90.8281 190.641 91.3274 193.413 92.6587 193.141C93.99 192.869 90.8281 190.641 90.8281 190.641Z"
        fill="black"
      />
      <path
        opacity="0.1"
        d="M99.5646 236.984C99.5646 236.984 91.65 243.12 92.9846 243.286C94.3193 243.452 99.5646 236.984 99.5646 236.984Z"
        fill="black"
      />
      <path d="M110.151 115.203L135.779 111.047V135.226L111.429 133.956L110.151 115.203Z" fill="#F47738" />
      <path opacity="0.05" d="M110.151 115.203L135.779 111.047V135.226L111.429 133.956L110.151 115.203Z" fill="black" />
      <path d="M135.779 111.047L166.512 113.339L164.812 134.38L135.779 135.226V111.047Z" fill="#F47738" />
      <path opacity="0.1" d="M135.779 111.047L166.512 113.339L164.812 134.38L135.779 135.226V111.047Z" fill="black" />
      <path d="M145.228 103.664L135.779 111.044L166.512 113.336L171.535 105.783L145.228 103.664Z" fill="#F47738" />
      <path d="M100.873 107.143L123.944 104.344L135.78 111.047L110.152 115.203L100.873 107.143Z" fill="#F47738" />
      <path
        d="M141.397 117.326V150.384L129.392 149.157L124.17 148.626L122.579 148.46L117.36 147.926L110.151 147.19V115.203L135.776 116.941L141.397 117.326Z"
        fill="#F47738"
      />
      <path d="M166.512 113.336V145.575L156.89 147.416L152.211 148.311L141.397 150.381V117.323L166.512 113.336Z" fill="#F47738" />
      <path opacity="0.05" d="M166.512 113.336V145.575L156.89 147.416L152.211 148.311L141.397 150.381V117.323L166.512 113.336Z" fill="black" />
      <path d="M100.873 122.162L110.152 115.203L141.398 117.326L136.798 125.047L100.873 122.162Z" fill="#F47738" />
      <path opacity="0.1" d="M100.873 122.162L110.152 115.203L141.398 117.326L136.798 125.047L100.873 122.162Z" fill="white" />
      <path d="M166.512 113.336L141.397 117.323L149.572 124.62L176.474 120.122L166.512 113.336Z" fill="#F47738" />
      <path opacity="0.1" d="M166.512 113.336L141.397 117.323L149.572 124.62L176.474 120.122L166.512 113.336Z" fill="white" />
      <path opacity="0.1" d="M156.89 147.415L152.211 148.31V141.421L156.594 140.32L156.89 147.415Z" fill="white" />
      <path opacity="0.1" d="M129.392 144.594V149.151L124.17 148.62V144.594H129.392Z" fill="white" />
      <path opacity="0.1" d="M122.579 146.031V148.456L117.36 147.922V146.031H122.579Z" fill="white" />
      <path
        opacity="0.1"
        d="M138.255 142.181C134.677 146.742 122.862 143.591 122.862 143.591L114.082 134.463L112.891 133.226L115.22 128.914C115.22 128.914 115.886 129.133 116.998 129.518C122.882 131.567 141.267 138.344 138.255 142.181Z"
        fill="black"
      />
      <path
        d="M137.922 141.517C134.344 146.077 122.529 142.927 122.529 142.927L113.749 133.799L112.558 132.562L114.887 128.25C114.887 128.25 115.553 128.469 116.665 128.854C122.549 130.903 140.934 137.68 137.922 141.517Z"
        fill="#EFB7B9"
      />
      <path
        opacity="0.1"
        d="M116.652 128.854C116.166 130.247 114.931 132.31 113.736 133.799L112.545 132.562L114.875 128.25C114.875 128.25 115.544 128.469 116.652 128.854Z"
        fill="black"
      />
      <path
        d="M87.5834 77.2678C87.5834 77.2678 78.8467 80.5845 78.7635 89.8714C78.7436 95.8559 79.0771 101.836 79.762 107.782C79.762 107.782 77.2658 121.629 84.3384 125.609C91.4109 129.589 97.9842 132.906 97.9842 132.906C97.9842 132.906 109.284 134.73 110.671 135.311C112.059 135.891 116.882 128.429 116.133 127.185C115.384 125.941 105.097 122.873 103.875 120.8C102.654 118.727 99.645 117.331 99.645 117.331C99.645 117.331 96.5763 115.245 96.4532 113.503C96.33 111.762 97.2353 110.518 97.4916 109.772C97.7479 109.026 98.6764 101.729 98.6764 101.729C98.6764 101.729 103.642 75.8416 87.5834 77.2678Z"
        fill="#DCE6F2"
      />
      <path
        opacity="0.1"
        d="M91.5765 108.016C91.5765 108.016 79.7613 109.342 80.6765 113.488C80.6765 113.488 85.1663 109.306 91.5765 108.016Z"
        fill="black"
      />
      <path
        opacity="0.1"
        d="M91.5771 109.672C91.5771 109.672 84.8707 114.564 86.1021 114.896C87.3336 115.227 91.5771 109.672 91.5771 109.672Z"
        fill="black"
      />
      <path
        opacity="0.1"
        d="M94.5725 111.664C94.5725 111.664 92.6588 115.094 93.7404 114.914C94.8221 114.735 94.5725 111.664 94.5725 111.664Z"
        fill="black"
      />
      <path
        d="M217.591 37.2741C217.591 37.2741 204.943 36.5146 206.421 45.3571C206.421 45.3571 206.125 46.9192 207.546 47.629C207.546 47.629 207.569 46.9657 208.844 47.1945C209.298 47.2707 209.759 47.2929 210.218 47.2609C210.841 47.2195 211.432 46.976 211.903 46.5677C211.903 46.5677 215.46 45.105 216.845 39.3073C216.845 39.3073 217.87 38.0403 217.843 37.7153L215.707 38.6274C215.707 38.6274 216.436 40.163 215.86 41.44C215.86 41.44 215.793 38.6838 215.381 38.7468C215.297 38.7468 214.272 39.2808 214.272 39.2808C214.272 39.2808 215.527 41.9541 214.578 43.901C214.578 43.901 214.938 40.6042 213.88 39.4731L212.375 40.3488C212.375 40.3488 213.843 43.1116 212.848 45.367C212.848 45.367 213.104 41.9076 212.059 40.561L210.694 41.6191C210.694 41.6191 212.076 44.3455 211.234 46.2161C211.234 46.2161 211.124 42.1896 210.398 41.8844C210.398 41.8844 209.207 42.9325 209.027 43.3637C209.027 43.3637 209.969 45.3537 209.383 46.3853C209.383 46.3853 209.024 43.702 208.717 43.6887C208.717 43.6887 207.529 45.4665 207.406 46.6738C207.464 45.5483 207.816 44.4574 208.428 43.5096C207.743 43.6387 207.111 43.9651 206.611 44.4483C206.611 44.4483 206.794 43.1912 208.721 43.0818C208.721 43.0818 209.719 41.7319 209.965 41.6489C209.965 41.6489 208.048 41.4897 206.887 42.0038C206.887 42.0038 207.909 40.8197 210.318 41.3405L211.65 40.2459C211.65 40.2459 209.127 39.9143 208.055 40.2824C208.055 40.2824 209.287 39.2343 212.012 39.9972L213.477 39.1249C213.477 39.1249 211.327 38.6605 210.045 38.8297C210.045 38.8297 211.397 38.1033 213.906 38.8894L214.955 38.4217C214.955 38.4217 213.377 38.1133 212.918 38.0635C212.458 38.0138 212.432 37.8877 212.432 37.8877C213.43 37.7222 214.454 37.8371 215.391 38.2194C215.391 38.2194 217.637 37.4134 217.591 37.2741Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M256.019 81.5007C256.019 81.5007 243.372 80.7412 244.85 89.5836C244.85 89.5836 244.553 91.1458 245.975 91.8556C245.975 91.8556 245.998 91.1922 247.276 91.4211C247.73 91.4972 248.191 91.5195 248.65 91.4874C249.265 91.443 249.849 91.2009 250.315 90.7976C250.315 90.7976 253.876 89.3316 255.26 83.5339C255.26 83.5339 256.282 82.2702 256.242 81.9451L254.105 82.8539C254.105 82.8539 254.834 84.3896 254.262 85.6665C254.262 85.6665 254.192 82.9103 253.783 82.9733C253.699 82.9733 252.671 83.5073 252.671 83.5073C252.671 83.5073 253.929 86.1839 252.98 88.1276C252.98 88.1276 253.34 84.8307 252.278 83.6997L250.791 84.5654C250.791 84.5654 252.258 87.3282 251.263 89.5836C251.263 89.5836 251.519 86.1243 250.474 84.7777L249.113 85.839C249.113 85.839 250.491 88.5621 249.652 90.4327C249.652 90.4327 249.542 86.4062 248.817 86.101C248.817 86.101 247.625 87.1491 247.442 87.5803C247.442 87.5803 248.388 89.5704 247.802 90.6019C247.802 90.6019 247.442 87.9186 247.136 87.9053C247.136 87.9053 245.948 89.6831 245.825 90.8904C245.884 89.7647 246.238 88.674 246.85 87.7262C246.164 87.8557 245.531 88.1819 245.029 88.6649C245.029 88.6649 245.216 87.4078 247.143 87.2984C247.143 87.2984 248.125 85.9485 248.388 85.8655C248.388 85.8655 246.47 85.7063 245.309 86.2204C245.309 86.2204 246.331 85.0364 248.737 85.5737L250.068 84.4791C250.068 84.4791 247.542 84.1475 246.474 84.5156C246.474 84.5156 247.705 83.4675 250.431 84.2304L251.895 83.3581C251.895 83.3581 249.742 82.897 248.461 83.0629C248.461 83.0629 249.815 82.3365 252.325 83.1226L253.373 82.6549C253.373 82.6549 251.796 82.3465 251.333 82.2967C250.87 82.247 250.847 82.1209 250.847 82.1209C251.846 81.9553 252.872 82.0701 253.809 82.4526C253.809 82.4526 256.059 81.64 256.019 81.5007Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M179.186 73.6538C179.186 73.6538 182.098 61.352 173.099 61.3088C173.099 61.3088 171.604 60.7516 170.662 62.0253C170.662 62.0253 171.305 62.1613 170.869 63.3752C170.718 63.8044 170.617 64.2496 170.569 64.7019C170.505 65.3184 170.644 65.9391 170.965 66.4697C170.965 66.4697 171.807 70.2176 177.289 72.5659C177.289 72.5659 178.367 73.7865 178.693 73.7997L178.161 71.5477C178.161 71.5477 176.517 72.002 175.352 71.216C175.352 71.216 178.091 71.6173 178.094 71.216C178.094 71.1331 177.761 70.0352 177.761 70.0352C177.761 70.0352 174.903 70.8113 173.139 69.5477C173.139 69.5477 176.337 70.4631 177.638 69.6173L177.039 67.9855C177.039 67.9855 174.044 68.9573 171.994 67.5941C171.994 67.5941 175.372 68.4365 176.883 67.6405L176.067 66.1215C176.067 66.1215 173.139 67.0103 171.431 65.8661C171.431 65.8661 175.425 66.4432 175.858 65.7865C175.858 65.7865 175.026 64.4365 174.63 64.1845C174.63 64.1845 172.513 64.7749 171.581 64.022C171.581 64.022 174.293 64.1248 174.357 63.8395C174.357 63.8395 172.802 62.3702 171.618 62.0385C172.722 62.2891 173.741 62.8217 174.576 63.5841C174.564 62.889 174.349 62.2125 173.957 61.6372C173.957 61.6372 175.169 62.0352 174.956 63.9589C174.956 63.9589 176.121 65.153 176.157 65.4249C176.157 65.4249 176.64 63.5709 176.33 62.3404C176.33 62.3404 177.329 63.5477 176.387 65.8196L177.239 67.3287C177.239 67.3287 178.011 64.9075 177.815 63.7931C177.815 63.7931 178.643 65.1795 177.422 67.7268L178.038 69.3155C178.038 69.3155 178.86 67.279 178.913 65.9987C178.913 65.9987 179.402 67.4515 178.194 69.7831L178.48 70.8909C178.48 70.8909 179.053 69.3951 179.179 68.9506C179.306 68.5062 179.436 68.5029 179.436 68.5029C179.431 69.5119 179.144 70.4996 178.607 71.3553C178.607 71.3553 179.043 73.6704 179.186 73.6538Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M151.489 77.8424C151.489 77.8424 141.331 70.2703 137.7 78.4726C137.7 78.4726 136.592 79.6169 137.387 80.9867C137.387 80.9867 137.766 80.4527 138.718 81.3383C139.055 81.6508 139.429 81.9225 139.83 82.1476C140.373 82.4492 141.001 82.5656 141.617 82.4792C141.617 82.4792 145.398 83.2056 149.751 79.1227C149.751 79.1227 151.306 78.6252 151.452 78.3333L149.159 77.932C149.159 77.932 148.919 79.6136 147.738 80.3665C147.738 80.3665 149.199 78.0248 148.82 77.8557C148.743 77.8192 147.598 77.6898 147.598 77.6898C147.598 77.6898 147.172 80.6152 145.308 81.7197C145.308 81.7197 147.428 79.1625 147.165 77.6368L145.425 77.5439C145.425 77.5439 145.128 80.6583 143.052 81.9983C143.052 81.9983 145.172 79.2487 145.049 77.5505L143.325 77.6898C143.325 77.6898 142.975 80.718 141.241 81.8192C141.241 81.8192 143.368 78.3963 142.932 77.7462C142.932 77.7462 141.358 77.9685 140.968 78.2272C140.968 78.2272 140.665 80.3963 139.6 80.9469C139.6 80.9469 140.782 78.5091 140.542 78.3399C140.542 78.3399 138.569 79.1724 137.793 80.121C138.464 79.2128 139.361 78.4948 140.396 78.0381C139.752 77.7714 139.044 77.6977 138.359 77.8258C138.359 77.8258 139.204 76.8772 140.875 77.8424C140.875 77.8424 142.439 77.2553 142.706 77.3283C142.706 77.3283 141.191 76.1442 139.936 75.9386C139.936 75.9386 141.447 75.5074 143.161 77.2653L144.889 77.0895C144.889 77.0895 142.968 75.4311 141.867 75.1525C141.867 75.1525 143.474 74.9502 145.328 77.0796L147.032 77.1558C147.032 77.1558 145.491 75.5903 144.33 75.0265C144.33 75.0265 145.857 75.1592 147.521 77.1923L148.656 77.3748C148.656 77.3748 147.508 76.2537 147.149 75.9618C146.789 75.6699 146.839 75.5472 146.839 75.5472C147.765 75.9558 148.559 76.6126 149.132 77.4444C149.132 77.4444 151.446 77.9784 151.489 77.8424Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M185.307 7.49233C185.307 7.49233 175.149 -0.0831323 171.518 8.12251C171.518 8.12251 170.41 9.26679 171.205 10.6366C171.205 10.6366 171.585 10.1026 172.537 10.9882C172.876 11.2992 173.25 11.5696 173.652 11.7941C174.195 12.096 174.823 12.2125 175.439 12.1258C175.439 12.1258 179.22 12.8522 183.573 8.76596C183.573 8.76596 185.127 8.27176 185.271 7.97657L182.977 7.58188C182.977 7.58188 182.741 9.26347 181.556 10.0164C181.556 10.0164 183.021 7.67475 182.641 7.50559C182.565 7.46911 181.42 7.33976 181.42 7.33976C181.42 7.33976 180.98 10.2718 179.117 11.3696C179.117 11.3696 181.233 8.81239 180.974 7.28669L179.233 7.19382C179.233 7.19382 178.934 10.3082 176.86 11.6449C176.86 11.6449 178.98 8.89531 178.857 7.19714L177.136 7.33644C177.136 7.33644 176.783 10.3679 175.049 11.4691C175.049 11.4691 177.18 8.04622 176.744 7.39614C176.744 7.39614 175.169 7.61836 174.78 7.87707C174.78 7.87707 174.477 10.0462 173.412 10.5968C173.412 10.5968 174.593 8.15899 174.354 7.98652C174.354 7.98652 172.38 8.82234 171.605 9.77093C172.275 8.86171 173.172 8.14351 174.207 7.68801C173.563 7.41938 172.853 7.34556 172.167 7.47574C172.167 7.47574 173.016 6.52715 174.687 7.49233C174.687 7.49233 176.251 6.90194 176.517 6.97823C176.517 6.97823 175.003 5.79415 173.748 5.5852C173.748 5.5852 175.256 5.15733 176.97 6.9119L178.697 6.73611C178.697 6.73611 176.78 5.07773 175.675 4.79581C175.675 4.79581 177.283 4.5968 179.14 6.72616L180.844 6.79912C180.844 6.79912 179.303 5.23362 178.138 4.67309C178.138 4.67309 179.669 4.80576 181.333 6.83893L182.465 7.02135C182.465 7.02135 181.313 5.91355 180.954 5.62831C180.594 5.34307 180.644 5.21704 180.644 5.21704C181.57 5.62519 182.364 6.28207 182.937 7.11422C182.937 7.11422 185.251 7.61836 185.307 7.49233Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M224.121 17.0849C224.121 17.0849 220.061 5.10814 212.402 9.81461C212.402 9.81461 210.838 10.1463 210.715 11.7085C210.715 11.7085 211.331 11.4829 211.603 12.7433C211.705 13.1916 211.858 13.6268 212.059 14.0402C212.335 14.5964 212.783 15.0491 213.337 15.3304C213.337 15.3304 216.04 18.0667 221.951 17.1612C221.951 17.1612 223.512 17.6322 223.798 17.4697L222.134 15.8412C222.134 15.8412 220.982 17.0916 219.578 17.0418C219.578 17.0418 222.117 15.9407 221.908 15.5858C221.864 15.5161 220.996 14.7632 220.996 14.7632C220.996 14.7632 218.979 16.929 216.816 16.7864C216.816 16.7864 220.014 15.8776 220.666 14.4647L219.288 13.4067C219.288 13.4067 217.271 15.8013 214.799 15.7284C214.799 15.7284 218.127 14.6637 218.969 13.1911L217.471 12.332C217.471 12.332 215.474 14.6305 213.404 14.5576C213.404 14.5576 217.105 12.9423 217.115 12.1596C217.115 12.1596 215.694 11.4531 215.225 11.4465C215.225 11.4465 213.74 13.0617 212.562 12.9158C212.562 12.9158 214.918 11.5725 214.819 11.2972C214.819 11.2972 212.722 10.8693 211.54 11.2143C212.609 10.8435 213.756 10.7577 214.868 10.9655C214.489 10.3814 213.946 9.92039 213.308 9.63883C213.308 9.63883 214.546 9.337 215.374 11.075C215.374 11.075 216.999 11.4763 217.172 11.6853C217.172 11.6853 216.599 9.85773 215.684 8.97548C215.684 8.97548 217.172 9.47631 217.578 11.9009L219.102 12.73C219.102 12.73 218.473 10.2723 217.714 9.41329C217.714 9.41329 219.155 10.1562 219.468 12.9589L220.833 13.9838C220.833 13.9838 220.453 11.8212 219.814 10.7002C219.814 10.7002 220.999 11.6753 221.212 14.2922L222.041 15.0816C222.041 15.0816 221.735 13.5095 221.608 13.065C221.482 12.6206 221.585 12.5907 221.585 12.5907C222.114 13.4511 222.394 14.4407 222.394 15.4498C222.394 15.4498 224.005 17.1712 224.121 17.0849Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M197.622 17.6814C197.622 17.6814 185.008 16.2818 186.049 25.2005C186.049 25.2005 185.673 26.7461 187.048 27.5222C187.048 27.5222 187.104 26.8589 188.379 27.1574C188.83 27.254 189.29 27.2996 189.75 27.2934C190.373 27.2822 190.975 27.0691 191.464 26.6864C191.464 26.6864 195.096 25.4028 196.79 19.6814C196.79 19.6814 197.875 18.4708 197.851 18.1425L195.671 18.9451C195.671 18.9451 196.337 20.5139 195.671 21.761C195.671 21.761 195.741 19.0048 195.339 19.0479C195.255 19.0479 194.204 19.5256 194.204 19.5256C194.204 19.5256 195.322 22.2619 194.277 24.169C194.277 24.169 194.803 20.8921 193.801 19.7113L192.253 20.5073C192.253 20.5073 193.585 23.3431 192.47 25.5455C192.47 25.5455 192.902 22.1027 191.927 20.7063L190.513 21.7013C190.513 21.7013 191.751 24.4907 190.815 26.3183C190.815 26.3183 190.912 22.2917 190.203 21.9501C190.203 21.9501 188.958 22.9451 188.755 23.3564C188.755 23.3564 189.597 25.3796 188.962 26.3912C188.962 26.3912 188.739 23.6947 188.446 23.6682C188.446 23.6682 187.168 25.3829 186.981 26.5935C187.097 25.4712 187.505 24.3985 188.166 23.4824C187.476 23.5775 186.828 23.8715 186.302 24.3282C186.302 24.3282 186.549 23.0844 188.479 23.0712C188.479 23.0712 189.527 21.7743 189.81 21.7047C189.81 21.7047 187.903 21.4493 186.715 21.9037C186.715 21.9037 187.797 20.7693 190.173 21.4294L191.574 20.4045C191.574 20.4045 189.042 19.8937 187.97 20.2254C187.97 20.2254 189.255 19.2304 191.937 20.1425L193.445 19.3431C193.445 19.3431 191.318 18.7727 190.03 18.8755C190.03 18.8755 191.418 18.2121 193.884 19.1309L194.956 18.7163C194.956 18.7163 193.395 18.3282 192.936 18.2552C192.476 18.1823 192.46 18.0562 192.46 18.0562C193.466 17.9412 194.484 18.1065 195.402 18.5338C195.402 18.5338 197.645 17.8207 197.622 17.6814Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M307.986 115.244C307.986 115.244 295.379 113.844 296.421 122.753C296.421 122.753 296.044 124.299 297.419 125.075C297.419 125.075 297.476 124.412 298.75 124.707C299.2 124.807 299.661 124.852 300.122 124.843C300.744 124.833 301.347 124.62 301.836 124.236C301.836 124.236 305.467 122.952 307.144 117.234C307.144 117.234 308.229 116.02 308.206 115.695L306.026 116.494C306.026 116.494 306.692 118.067 306.026 119.314C306.026 119.314 306.096 116.554 305.693 116.601C305.61 116.601 304.558 117.075 304.558 117.075C304.558 117.075 305.676 119.811 304.631 121.718C304.631 121.718 305.157 118.445 304.155 117.261L302.608 118.06C302.608 118.06 303.939 120.896 302.827 123.098C302.827 123.098 303.257 119.655 302.282 118.256L300.867 119.251C300.867 119.251 302.105 122.04 301.17 123.864C301.17 123.864 301.267 119.838 300.558 119.499C300.558 119.499 299.316 120.494 299.11 120.906C299.11 120.906 299.955 122.929 299.316 123.941C299.316 123.941 299.093 121.244 298.8 121.218C298.8 121.218 297.522 122.932 297.336 124.143C297.451 123.021 297.86 121.948 298.521 121.032C297.83 121.125 297.181 121.419 296.657 121.878C296.657 121.878 296.903 120.63 298.834 120.617C298.834 120.617 299.885 119.32 300.165 119.254C300.165 119.254 298.258 118.995 297.07 119.45C297.07 119.45 298.151 118.319 300.531 118.979L301.929 117.954C301.929 117.954 299.426 117.483 298.338 117.808C298.338 117.808 299.622 116.813 302.305 117.722L303.813 116.926C303.813 116.926 301.686 116.355 300.398 116.458C300.398 116.458 301.786 115.795 304.252 116.713L305.324 116.295C305.324 116.295 303.763 115.907 303.303 115.838C302.844 115.768 302.827 115.639 302.827 115.639C303.833 115.522 304.852 115.686 305.77 116.113C305.77 116.113 308.02 115.387 307.986 115.244Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M327.26 126.978C327.26 126.978 314.652 125.582 315.694 134.487C315.694 134.487 315.321 136.033 316.692 136.809C316.692 136.809 316.749 136.145 318.024 136.444C318.473 136.541 318.932 136.586 319.392 136.577C320.011 136.564 320.61 136.352 321.099 135.973C321.099 135.973 324.727 134.689 326.404 128.968C326.404 128.968 327.493 127.757 327.466 127.429L325.286 128.228C325.286 128.228 325.952 129.801 325.286 131.048C325.286 131.048 325.356 128.291 324.953 128.335C324.87 128.335 323.818 128.809 323.818 128.809C323.818 128.809 324.937 131.545 323.891 133.452C323.891 133.452 324.417 130.179 323.416 128.998L321.868 129.794C321.868 129.794 323.199 132.63 322.088 134.832C322.088 134.832 322.517 131.389 321.542 129.993L320.127 130.988C320.127 130.988 321.365 133.777 320.433 135.605C320.433 135.605 320.527 131.575 319.818 131.237C319.818 131.237 318.576 132.232 318.37 132.643C318.37 132.643 319.215 134.666 318.576 135.678C318.576 135.678 318.353 132.981 318.06 132.955C318.06 132.955 316.782 134.67 316.599 135.88C316.714 134.758 317.122 133.686 317.781 132.769C317.09 132.864 316.442 133.158 315.917 133.615C315.917 133.615 316.167 132.368 318.097 132.358C318.097 132.358 319.145 131.061 319.428 130.991C319.428 130.991 317.521 130.736 316.333 131.19C316.333 131.19 317.415 130.056 319.794 130.716L321.192 129.691C321.192 129.691 318.689 129.22 317.601 129.545C317.601 129.545 318.886 128.55 321.568 129.462L323.076 128.663C323.076 128.663 320.949 128.092 319.661 128.195C319.661 128.195 321.049 127.532 323.515 128.451L324.587 128.036C324.587 128.036 323.026 127.648 322.57 127.575C322.114 127.502 322.091 127.376 322.091 127.376C323.097 127.261 324.116 127.426 325.033 127.854C325.033 127.854 327.293 127.121 327.26 126.978Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M284.469 28.1393C284.469 28.1393 274.311 20.5672 270.68 28.7695C270.68 28.7695 269.572 29.9138 270.367 31.2836C270.367 31.2836 270.747 30.7496 271.699 31.6351C272.036 31.9477 272.409 32.2194 272.81 32.4444C273.354 32.7458 273.982 32.8623 274.598 32.7761C274.598 32.7761 278.379 33.5025 282.735 29.4196C282.735 29.4196 284.286 28.922 284.433 28.6302L282.146 28.2189C282.146 28.2189 281.906 29.9005 280.725 30.6534C280.725 30.6534 282.186 28.3118 281.807 28.1426C281.73 28.1061 280.588 27.9768 280.588 27.9768C280.588 27.9768 280.159 30.9021 278.295 32.0066C278.295 32.0066 280.415 29.4494 280.152 27.9237L278.412 27.8308C278.412 27.8308 278.116 30.9453 276.039 32.2852C276.039 32.2852 278.162 29.5356 278.036 27.8375L276.312 27.9768C276.312 27.9768 275.979 31.005 274.228 32.1061C274.228 32.1061 276.358 28.6832 275.919 28.0332C275.919 28.0332 274.345 28.2554 273.955 28.5141C273.955 28.5141 273.656 30.6832 272.591 31.2338C272.591 31.2338 273.769 28.796 273.529 28.6269C273.529 28.6269 271.556 29.4594 270.78 30.4079C271.451 29.4997 272.348 28.7817 273.383 28.325C272.739 28.0584 272.031 27.9846 271.346 28.1128C271.346 28.1128 272.195 27.1642 273.865 28.1293C273.865 28.1293 275.426 27.5423 275.693 27.6152C275.693 27.6152 274.178 26.4312 272.924 26.2255C272.924 26.2255 274.435 25.7944 276.149 27.5522L277.876 27.3764C277.876 27.3764 275.959 25.7181 274.854 25.4395C274.854 25.4395 276.461 25.2371 278.315 27.3665L280.023 27.4428C280.023 27.4428 278.478 25.8773 277.317 25.3134C277.317 25.3134 278.848 25.4461 280.509 27.4793L281.644 27.6617C281.644 27.6617 280.495 26.5406 280.136 26.2487C279.776 25.9569 279.83 25.8607 279.83 25.8607C280.754 26.27 281.547 26.9267 282.119 27.7579C282.119 27.7579 284.426 28.2753 284.469 28.1393Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M292.317 82.8032C292.317 82.8032 288.816 70.6539 280.941 75.0154C280.941 75.0154 279.363 75.2575 279.167 76.8297C279.167 76.8297 279.793 76.634 280.009 77.9043C280.089 78.3607 280.223 78.806 280.408 79.231C280.655 79.8026 281.083 80.2778 281.627 80.5843C281.627 80.5843 284.203 83.4367 290.147 82.7998C290.147 82.7998 291.685 83.3371 291.977 83.1912L290.403 81.4864C290.403 81.4864 289.195 82.6871 287.797 82.5743C287.797 82.5743 290.38 81.5793 290.18 81.2244C290.14 81.1514 289.308 80.3587 289.308 80.3587C289.308 80.3587 287.198 82.435 285.041 82.1929C285.041 82.1929 288.28 81.43 288.992 80.0569L287.661 78.9358C287.661 78.9358 285.537 81.2376 283.071 81.0585C283.071 81.0585 286.426 80.1398 287.351 78.7103L285.893 77.7849C285.893 77.7849 283.78 79.9905 281.73 79.8247C281.73 79.8247 285.501 78.3753 285.547 77.5959C285.547 77.5959 284.156 76.8264 283.687 76.7998C283.687 76.7998 282.132 78.3454 280.951 78.1464C280.951 78.1464 283.367 76.9093 283.281 76.6307C283.281 76.6307 281.204 76.11 280.009 76.3985C281.091 76.0787 282.238 76.0456 283.337 76.3023C282.985 75.7022 282.465 75.2179 281.84 74.9093C281.84 74.9093 283.091 74.6605 283.837 76.435C283.837 76.435 285.437 76.906 285.604 77.1249C285.604 77.1249 285.115 75.2708 284.239 74.3521C284.239 74.3521 285.704 74.9159 286 77.357L287.484 78.2559C287.484 78.2559 286.965 75.7683 286.246 74.8927C286.246 74.8927 287.651 75.6987 287.84 78.5113L289.172 79.5959C289.172 79.5959 288.889 77.4201 288.303 76.2791C288.303 76.2791 289.445 77.3073 289.538 79.9275L290.33 80.7567C290.33 80.7567 290.097 79.1713 289.997 78.7202C289.897 78.2692 289.997 78.2061 289.997 78.2061C290.49 79.0884 290.726 80.0898 290.679 81.0983C290.679 81.0983 292.197 82.8828 292.317 82.8032Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M214.295 110.182C214.295 110.182 207.496 99.5089 201.182 105.897C201.182 105.897 199.738 106.56 199.991 108.136C199.991 108.136 200.54 107.771 201.106 108.932C201.309 109.343 201.561 109.729 201.858 110.079C202.255 110.558 202.798 110.894 203.405 111.035C203.405 111.035 206.684 113.051 212.209 110.769C212.209 110.769 213.836 110.855 214.076 110.633L212.079 109.439C212.079 109.439 211.257 110.932 209.882 111.214C209.882 111.214 212.086 109.555 211.789 109.25C211.733 109.19 210.708 108.666 210.708 108.666C210.708 108.666 209.266 111.247 207.13 111.622C207.13 111.622 210.022 109.98 210.322 108.461L208.727 107.761C208.727 107.761 207.339 110.564 204.923 111.078C204.923 111.078 207.885 109.257 208.368 107.625L206.704 107.147C206.704 107.147 205.299 109.857 203.286 110.272C203.286 110.272 206.494 107.824 206.318 107.061C206.318 107.061 204.767 106.713 204.321 106.819C204.321 106.819 203.266 108.739 202.074 108.879C202.074 108.879 204.044 107.015 203.881 106.769C203.881 106.769 201.741 106.852 200.676 107.466C201.626 106.852 202.721 106.498 203.851 106.438C203.345 105.96 202.71 105.641 202.024 105.519C202.024 105.519 203.152 104.932 204.354 106.424C204.354 106.424 206.018 106.424 206.248 106.59C206.248 106.59 205.249 104.932 204.154 104.312C204.154 104.312 205.719 104.444 206.69 106.703L208.371 107.147C208.371 107.147 207.17 104.909 206.234 104.268C206.234 104.268 207.809 104.647 208.784 107.297L210.355 107.96C210.355 107.96 209.47 105.953 208.581 105.015C208.581 105.015 209.965 105.678 210.794 108.169L211.793 108.743C211.793 108.743 211.127 107.287 210.891 106.885C210.654 106.484 210.748 106.391 210.748 106.391C211.468 107.1 211.976 107.995 212.215 108.975C212.215 108.975 214.206 110.295 214.295 110.182Z"
        fill="#F47738"
      />
      <path
        d="M258.985 55.6458C258.985 55.6458 252.518 44.7702 246.005 50.9593C246.005 50.9593 244.54 51.5894 244.746 53.1616C244.746 53.1616 245.302 52.81 245.835 53.9875C246.025 54.406 246.265 54.8002 246.55 55.1616C246.933 55.6507 247.466 56.0005 248.068 56.1566C248.068 56.1566 251.28 58.2727 256.875 56.1566C256.875 56.1566 258.499 56.2926 258.745 56.077L256.791 54.8233C256.791 54.8233 255.926 56.286 254.542 56.5281C254.542 56.5281 256.795 54.9261 256.512 54.6243C256.452 54.5613 255.447 54.004 255.447 54.004C255.447 54.004 253.926 56.5414 251.786 56.8498C251.786 56.8498 254.728 55.2976 255.071 53.7918L253.5 53.0554C253.5 53.0554 252.025 55.8183 249.592 56.2594C249.592 56.2594 252.611 54.5314 253.144 52.9161L251.499 52.3855C251.499 52.3855 250.008 55.0389 247.985 55.4037C247.985 55.4037 251.266 53.0555 251.113 52.2893C251.113 52.2893 249.576 51.8913 249.116 51.9841C249.116 51.9841 248.002 53.8714 246.807 53.9742C246.807 53.9742 248.834 52.1765 248.68 51.9244C248.68 51.9244 246.537 51.941 245.455 52.5215C246.424 51.939 247.529 51.6189 248.66 51.5928C248.169 51.0997 247.543 50.7608 246.86 50.6176C246.86 50.6176 248.008 50.0637 249.19 51.5928C249.19 51.5928 250.854 51.6491 251.077 51.8183C251.077 51.8183 250.135 50.1599 249.057 49.4767C249.057 49.4767 250.614 49.6558 251.516 51.9443L253.18 52.4418C253.18 52.4418 252.052 50.1666 251.133 49.4966C251.133 49.4966 252.698 49.9244 253.59 52.6011L255.137 53.3208C255.137 53.3208 254.315 51.2876 253.473 50.3357C253.473 50.3357 254.834 51.0422 255.59 53.5563L256.565 54.1599C256.565 54.1599 255.939 52.684 255.72 52.276C255.5 51.868 255.593 51.7785 255.593 51.7785C256.291 52.5092 256.771 53.4186 256.981 54.4054C256.981 54.4054 258.888 55.7553 258.985 55.6458Z"
        fill="#F47738"
      />
      <path
        d="M218.07 78.5199C218.07 78.5199 218.403 65.8831 209.593 67.6642C209.593 67.6642 208.015 67.4221 207.35 68.8616C207.35 68.8616 208.015 68.8616 207.829 70.1385C207.768 70.5938 207.761 71.0547 207.809 71.5116C207.869 72.1314 208.132 72.7141 208.558 73.17C208.558 73.17 210.145 76.6659 216.006 77.8533C216.006 77.8533 217.308 78.8317 217.634 78.7786L216.635 76.6825C216.635 76.6825 215.121 77.4586 213.82 76.9312C213.82 76.9312 216.582 76.7687 216.506 76.3641C216.506 76.2811 215.933 75.2728 215.933 75.2728C215.933 75.2728 213.291 76.6161 211.31 75.7339C211.31 75.7339 214.639 75.9826 215.727 74.8914L214.798 73.4221C214.798 73.4221 212.076 74.9743 209.779 74.0589C209.779 74.0589 213.257 74.1982 214.575 73.1136L213.467 71.7869C213.467 71.7869 210.781 73.2529 208.877 72.4768C208.877 72.4768 212.911 72.2347 213.204 71.5017C213.204 71.5017 212.112 70.3508 211.673 70.175C211.673 70.175 209.723 71.17 208.658 70.6327C208.658 70.6327 211.32 70.1883 211.337 69.8931C211.337 69.8931 209.516 68.7687 208.288 68.6858C209.421 68.7059 210.528 69.0216 211.5 69.6012C211.348 68.9232 211.001 68.3042 210.501 67.8201C210.501 67.8201 211.77 67.9627 211.943 69.8765C211.943 69.8765 213.33 70.8118 213.42 71.0705C213.42 71.0705 213.517 69.1567 212.961 68.0158C212.961 68.0158 214.186 68.9942 213.727 71.4088L214.868 72.7156C214.868 72.7156 215.128 70.1883 214.712 69.1368C214.712 69.1368 215.803 70.3276 215.131 73.0672L216.053 74.4967C216.053 74.4967 216.446 72.3375 216.236 71.0672C216.236 71.0672 217.008 72.3939 216.303 74.9179L216.809 75.9461C216.809 75.9461 217.065 74.364 217.098 73.903C217.131 73.442 217.258 73.4121 217.258 73.4121C217.458 74.4016 217.379 75.427 217.028 76.374C217.028 76.374 217.923 78.5631 218.07 78.5199Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M232.635 239.089C237.585 239.089 241.598 238.413 241.598 237.579C241.598 236.746 237.585 236.07 232.635 236.07C227.685 236.07 223.672 236.746 223.672 237.579C223.672 238.413 227.685 239.089 232.635 239.089Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M199.961 262.003C204.911 262.003 208.924 261.327 208.924 260.493C208.924 259.66 204.911 258.984 199.961 258.984C195.011 258.984 190.998 259.66 190.998 260.493C190.998 261.327 195.011 262.003 199.961 262.003Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M30.9991 250.26C35.9492 250.26 39.9621 249.585 39.9621 248.751C39.9621 247.918 35.9492 247.242 30.9991 247.242C26.049 247.242 22.0361 247.918 22.0361 248.751C22.0361 249.585 26.049 250.26 30.9991 250.26Z"
        fill="#F47738"
      />
      <path
        opacity="0.1"
        d="M267.944 260.487C272.895 260.487 276.907 259.811 276.907 258.978C276.907 258.144 272.895 257.469 267.944 257.469C262.994 257.469 258.981 258.144 258.981 258.978C258.981 259.811 262.994 260.487 267.944 260.487Z"
        fill="#F47738"
      />
      <path
        d="M277.276 242.089C284.668 242.089 290.659 241.079 290.659 239.834C290.659 238.588 284.668 237.578 277.276 237.578C269.885 237.578 263.894 238.588 263.894 239.834C263.894 241.079 269.885 242.089 277.276 242.089Z"
        fill="#F47738"
      />
      <path
        d="M282.825 236.143C283.436 235.648 283.88 234.979 284.1 234.226C284.266 233.463 283.94 232.551 283.211 232.272C282.392 231.96 281.517 232.524 280.851 233.095C280.185 233.665 279.43 234.318 278.561 234.199C279.007 233.795 279.341 233.284 279.53 232.713C279.719 232.143 279.757 231.534 279.64 230.945C279.602 230.701 279.498 230.472 279.34 230.282C278.884 229.798 278.062 230.007 277.516 230.388C275.786 231.602 275.303 233.944 275.293 236.053C275.12 235.294 275.266 234.501 275.263 233.731C275.26 232.962 275.043 232.073 274.381 231.668C273.974 231.442 273.515 231.328 273.05 231.337C272.271 231.31 271.402 231.386 270.873 231.954C270.207 232.657 270.384 233.841 270.956 234.607C271.529 235.373 272.404 235.867 273.209 236.405C273.854 236.788 274.404 237.311 274.82 237.934C274.868 238.021 274.907 238.112 274.937 238.206H279.816C280.908 237.657 281.921 236.963 282.825 236.143Z"
        fill="#F47738"
      />
      <path
        d="M24.9814 241.737C24.9814 241.737 30.0903 241.581 31.6379 240.486C33.1856 239.392 39.5026 238.088 39.8854 239.843C40.2681 241.598 47.567 248.563 41.7958 248.609C36.0246 248.656 28.3862 247.714 26.8486 246.778C25.3109 245.843 24.9814 241.737 24.9814 241.737Z"
        fill="#A8A8A8"
      />
      <path
        opacity="0.2"
        d="M41.8923 248.003C36.1211 248.049 28.4828 247.108 26.9451 246.172C25.7736 245.462 25.3076 242.912 25.1512 241.734H24.9814C24.9814 241.734 25.3143 245.844 26.8419 246.776C28.3696 247.708 36.0179 248.653 41.7891 248.607C43.4532 248.607 44.029 248.003 43.9991 247.127C43.7661 247.661 43.1304 247.993 41.8923 248.003Z"
        fill="black"
      />
    </g>
    <defs>
      <linearGradient id="paint0_linear_7426_33765" x1="74.2163" y1="143.751" x2="178.101" y2="143.751" gradientUnits="userSpaceOnUse">
        <stop stop-color="#808080" stop-opacity="0.25" />
        <stop offset="0.54" stop-color="#808080" stop-opacity="0.12" />
        <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
      </linearGradient>
      <clipPath id="clip0_7426_33765">
        <rect width="336" height="262" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const WorksMgmtIcon = ({ fill = "white" }) => (
  <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M33.1161 29.2786L24.2827 20.4453H22.6327L18.3994 24.6786V26.3286L27.2327 35.162C27.8827 35.812 28.9327 35.812 29.5827 35.162L33.1161 31.6286C33.7661 30.9953 33.7661 29.9286 33.1161 29.2786Z"
      fill={fill}
    />
    <path
      d="M25.8997 15.9807L28.2497 13.6307L31.783 17.1641C33.733 15.2141 33.733 12.0474 31.783 10.0974L25.883 4.1974L23.533 6.5474V1.8474L22.3663 0.664062L16.4663 6.56406L17.6497 7.7474H22.3663L20.0163 10.0974L21.783 11.8641L16.9663 16.6807L10.083 9.7974V7.43073L5.04967 2.3974L0.333008 7.11406L5.38301 12.1641H7.73301L14.6163 19.0474L13.1997 20.4641H9.66634L0.833008 29.2974C0.183008 29.9474 0.183008 30.9974 0.833008 31.6474L4.36634 35.1807C5.01634 35.8307 6.06634 35.8307 6.71634 35.1807L15.5497 26.3474V22.8141L24.133 14.2307L25.8997 15.9807Z"
      fill={fill}
    />
  </svg>
);

const BioMetricIcon = ({ fill = "#F47738" }) => (
  <svg width="30" height="34" viewBox="0 0 30 34" fill={"none"} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24.6886 4.11667C24.5553 4.11667 24.4219 4.08333 24.3053 4.01667C21.1053 2.36667 18.3386 1.66667 15.0219 1.66667C11.7219 1.66667 8.5886 2.45 5.7386 4.01667C5.3386 4.23333 4.8386 4.08333 4.60527 3.68333C4.3886 3.28333 4.5386 2.76667 4.9386 2.55C8.0386 0.866667 11.4386 0 15.0219 0C18.5719 0 21.6719 0.783333 25.0719 2.53333C25.4886 2.75 25.6386 3.25 25.4219 3.65C25.2719 3.95 24.9886 4.11667 24.6886 4.11667ZM0.838598 12.8667C0.671931 12.8667 0.505265 12.8167 0.355265 12.7167C-0.0280686 12.45 -0.111402 11.9333 0.155265 11.55C1.80526 9.21667 3.90527 7.38333 6.40527 6.1C11.6386 3.4 18.3386 3.38333 23.5886 6.08333C26.0886 7.36667 28.1886 9.18333 29.8386 11.5C30.1053 11.8667 30.0219 12.4 29.6386 12.6667C29.2553 12.9333 28.7386 12.85 28.4719 12.4667C26.9719 10.3667 25.0719 8.71667 22.8219 7.56667C18.0386 5.11667 11.9219 5.11667 7.15527 7.58333C4.8886 8.75 2.9886 10.4167 1.4886 12.5167C1.35526 12.75 1.10526 12.8667 0.838598 12.8667ZM11.2553 32.9833C11.0386 32.9833 10.8219 32.9 10.6719 32.7333C9.22193 31.2833 8.4386 30.35 7.32193 28.3333C6.17193 26.2833 5.57193 23.7833 5.57193 21.1C5.57193 16.15 9.80526 12.1167 15.0053 12.1167C20.2053 12.1167 24.4386 16.15 24.4386 21.1C24.4386 21.5667 24.0719 21.9333 23.6053 21.9333C23.1386 21.9333 22.7719 21.5667 22.7719 21.1C22.7719 17.0667 19.2886 13.7833 15.0053 13.7833C10.7219 13.7833 7.2386 17.0667 7.2386 21.1C7.2386 23.5 7.77193 25.7167 8.7886 27.5167C9.85527 29.4333 10.5886 30.25 11.8719 31.55C12.1886 31.8833 12.1886 32.4 11.8719 32.7333C11.6886 32.9 11.4719 32.9833 11.2553 32.9833ZM23.2053 29.9C21.2219 29.9 19.4719 29.4 18.0386 28.4167C15.5553 26.7333 14.0719 24 14.0719 21.1C14.0719 20.6333 14.4386 20.2667 14.9053 20.2667C15.3719 20.2667 15.7386 20.6333 15.7386 21.1C15.7386 23.45 16.9386 25.6667 18.9719 27.0333C20.1553 27.8333 21.5386 28.2167 23.2053 28.2167C23.6053 28.2167 24.2719 28.1667 24.9386 28.05C25.3886 27.9667 25.8219 28.2667 25.9053 28.7333C25.9886 29.1833 25.6886 29.6167 25.2219 29.7C24.2719 29.8833 23.4386 29.9 23.2053 29.9ZM19.8553 33.3333C19.7886 33.3333 19.7053 33.3167 19.6386 33.3C16.9886 32.5667 15.2553 31.5833 13.4386 29.8C11.1053 27.4833 9.82193 24.4 9.82193 21.1C9.82193 18.4 12.1219 16.2 14.9553 16.2C17.7886 16.2 20.0886 18.4 20.0886 21.1C20.0886 22.8833 21.6386 24.3333 23.5553 24.3333C25.4719 24.3333 27.0219 22.8833 27.0219 21.1C27.0219 14.8167 21.6053 9.71667 14.9386 9.71667C10.2053 9.71667 5.87193 12.35 3.92193 16.4333C3.27193 17.7833 2.9386 19.3667 2.9386 21.1C2.9386 22.4 3.05526 24.45 4.05526 27.1167C4.22193 27.55 4.00526 28.0333 3.57193 28.1833C3.1386 28.35 2.65526 28.1167 2.50526 27.7C1.6886 25.5167 1.2886 23.35 1.2886 21.1C1.2886 19.1 1.67193 17.2833 2.42193 15.7C4.6386 11.05 9.55526 8.03333 14.9386 8.03333C22.5219 8.03333 28.6886 13.8833 28.6886 21.0833C28.6886 23.7833 26.3886 25.9833 23.5553 25.9833C20.7219 25.9833 18.4219 23.7833 18.4219 21.0833C18.4219 19.3 16.8719 17.85 14.9553 17.85C13.0386 17.85 11.4886 19.3 11.4886 21.0833C11.4886 23.9333 12.5886 26.6 14.6053 28.6C16.1886 30.1667 17.7053 31.0333 20.0553 31.6833C20.5053 31.8 20.7553 32.2667 20.6386 32.7C20.5553 33.0833 20.2053 33.3333 19.8553 33.3333Z"
      fill={fill}
    />
  </svg>
);

const AddFileFilled = ({ className = "", fill = "", style = {} }) => (
  <svg width="19" className={className} height="18" style={style} viewBox="0 0 19 18" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.6016 8.75C15.2141 8.75 15.8003 8.86375 16.3516 9.05625V5.25L11.1016 0H2.35156C1.38031 0 0.601562 0.77875 0.601562 1.75V14C0.601562 14.9712 1.38906 15.75 2.35156 15.75H9.65781C9.46531 15.1987 9.35156 14.6125 9.35156 14C9.35156 11.1037 11.7053 8.75 14.6016 8.75ZM10.2266 1.3125L15.0391 6.125H10.2266V1.3125ZM18.1016 13.125V14.875H15.4766V17.5H13.7266V14.875H11.1016V13.125H13.7266V10.5H15.4766V13.125H18.1016Z"
      fill="#F47738"
    />
  </svg>
);

const LocateIcon = ({ className = "" }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 7C8.79 7 7 8.79 7 11C7 13.21 8.79 15 11 15C13.21 15 15 13.21 15 11C15 8.79 13.21 7 11 7ZM19.94 10C19.48 5.83 16.17 2.52 12 2.06V0H10V2.06C5.83 2.52 2.52 5.83 2.06 10H0V12H2.06C2.52 16.17 5.83 19.48 10 19.94V22H12V19.94C16.17 19.48 19.48 16.17 19.94 12H22V10H19.94ZM11 18C7.13 18 4 14.87 4 11C4 7.13 7.13 4 11 4C14.87 4 18 7.13 18 11C18 14.87 14.87 18 11 18Z"
      fill="#505A5F"
    />
  </svg>
);

const ProjectIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="28" height="22" viewBox="0 0 28 22" className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.3346 0.333984H3.33464C1.86797 0.333984 0.681302 1.53398 0.681302 3.00065L0.667969 19.0007C0.667969 20.4673 1.86797 21.6673 3.33464 21.6673H24.668C26.1346 21.6673 27.3346 20.4673 27.3346 19.0007V5.66732C27.3346 4.20065 26.1346 3.00065 24.668 3.00065H14.0013L11.3346 0.333984Z"
      fill="white"
    />
  </svg>
);
const EstimateIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="28" height="31" viewBox="0 0 28 31" className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.3333 3.00065H15.76C15.2 1.45398 13.7333 0.333984 12 0.333984C10.2667 0.333984 8.8 1.45398 8.24 3.00065H2.66667C1.2 3.00065 0 4.20065 0 5.66732V24.334C0 25.8007 1.2 27.0007 2.66667 27.0007H21.3333C22.8 27.0007 24 25.8007 24 24.334V5.66732C24 4.20065 22.8 3.00065 21.3333 3.00065ZM12 3.00065C12.7333 3.00065 13.3333 3.60065 13.3333 4.33398C13.3333 5.06732 12.7333 5.66732 12 5.66732C11.2667 5.66732 10.6667 5.06732 10.6667 4.33398C10.6667 3.60065 11.2667 3.00065 12 3.00065ZM12.6667 21.6673H5.33333V19.0007H12.6667V21.6673ZM18.6667 16.334H5.33333V13.6673H18.6667V16.334ZM18.6667 11.0007H5.33333V8.33398H18.6667V11.0007Z"
      fill="white"
    />
    <circle cx="21" cy="24" r="6.5" fill="#F8F8F8" stroke="#0B4B66" />
    <path
      d="M23.998 22.1797L23.6992 23.3164H18.1738L18.4785 22.1797H23.998ZM21.168 28.5723L18.3438 25.2266L18.3379 24.2246H19.7148C20.0352 24.2246 20.2988 24.1621 20.5059 24.0371C20.7129 23.9121 20.8672 23.7441 20.9688 23.5332C21.0703 23.3184 21.1211 23.0801 21.1211 22.8184C21.1211 22.5449 21.0742 22.3027 20.9805 22.0918C20.8867 21.8809 20.7363 21.7168 20.5293 21.5996C20.3223 21.4785 20.0469 21.418 19.7031 21.418H18.1797L18.5254 20.041H19.7031C20.4062 20.041 20.9922 20.1465 21.4609 20.3574C21.9297 20.5684 22.2812 20.873 22.5156 21.2715C22.75 21.666 22.8672 22.1445 22.8672 22.707C22.8672 23.1992 22.7891 23.6309 22.6328 24.002C22.4766 24.373 22.2285 24.6797 21.8887 24.9219C21.5488 25.1602 21.1016 25.3281 20.5469 25.4258L23.0898 28.4902V28.5723H21.168ZM24.0098 20.041L23.7051 21.1719H19.1289L19.4336 20.041H24.0098Z"
      fill="#0B4B66"
    />
  </svg>
);
const OrganisationIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M29.675 21.7392H28.1712L28.1709 17.6893C28.1644 17.6289 28.1525 17.5691 28.1351 17.511C28.1525 17.4527 28.1644 17.3931 28.1709 17.3327C28.1712 17.0481 28.0583 16.775 27.8572 16.5737C27.656 16.3723 27.3832 16.2591 27.0984 16.2589H17.0752V13.5307C18.8187 13.1727 20.2694 11.9699 20.9439 10.3226C21.6183 8.67533 21.4278 6.80052 20.436 5.32254C19.4441 3.84457 17.7812 2.95801 16.0013 2.95801C14.2214 2.95801 12.5584 3.84457 11.5665 5.32254C10.5747 6.80052 10.3842 8.67533 11.0587 10.3226C11.7331 11.9699 13.1838 13.1727 14.9275 13.5307V16.2589H4.90539C4.62057 16.2587 4.3477 16.3715 4.14614 16.5726C3.94479 16.7738 3.83153 17.0468 3.83153 17.3315V17.3327C3.83804 17.3921 3.84978 17.451 3.86677 17.5083C3.84915 17.5674 3.83699 17.628 3.83028 17.6893V21.7392H2.32776C2.04295 21.739 1.77007 21.8519 1.56851 22.053C1.36716 22.2541 1.25391 22.5272 1.25391 22.8118V27.9683C1.2537 28.2529 1.36654 28.526 1.56767 28.7274C1.76881 28.9287 2.04167 29.042 2.3265 29.0422H7.48177C7.76659 29.0424 8.03947 28.9293 8.24103 28.7282C8.44237 28.5271 8.55563 28.2542 8.55563 27.9696V22.8131C8.55584 22.5283 8.443 22.2554 8.24186 22.0538C8.04073 21.8525 7.76787 21.7392 7.48304 21.7392H5.978V18.4066H14.9274L14.9276 21.7392H13.4246C13.14 21.739 12.8671 21.8519 12.6656 22.053C12.4642 22.2541 12.351 22.5272 12.3508 22.8118V27.9683C12.3508 28.2529 12.4636 28.526 12.6647 28.7274C12.8659 28.9287 13.1387 29.042 13.4236 29.0422H18.578C18.8626 29.0424 19.1357 28.9293 19.337 28.7282C19.5384 28.5271 19.6516 28.2542 19.6518 27.9696V22.8131C19.6518 22.5283 19.539 22.2554 19.3379 22.0538C19.1367 21.8525 18.8639 21.7392 18.579 21.7392H17.0752V18.4066H26.0235L26.0233 21.7392H24.5206C24.236 21.739 23.9629 21.8519 23.7615 22.053C23.5602 22.2541 23.4469 22.5272 23.4467 22.8118V27.9683C23.4467 28.2529 23.5596 28.526 23.7607 28.7274C23.9618 28.9287 24.2347 29.042 24.5195 29.0422H29.675H29.6748C29.9596 29.0424 30.2325 28.9293 30.4341 28.7282C30.6354 28.5271 30.7487 28.2542 30.7487 27.9696V22.8131C30.7489 22.5283 30.636 22.2554 30.4349 22.0538C30.2338 21.8525 29.9607 21.7392 29.6761 21.7392L29.675 21.7392ZM12.8082 8.29749C12.8086 7.45061 13.1453 6.63852 13.7443 6.03991C14.343 5.44136 15.1554 5.10514 16.0023 5.10535C16.849 5.10535 17.6611 5.44197 18.2599 6.04099C18.8586 6.63976 19.1949 7.45206 19.1949 8.29878C19.1946 9.14566 18.8582 9.95775 18.2594 10.5566C17.6605 11.1553 16.8484 11.4918 16.0016 11.4918C15.1545 11.4918 14.342 11.1552 13.7433 10.5561C13.1445 9.95694 12.8081 9.14443 12.8083 8.29754L12.8082 8.29749ZM6.40815 26.8947H3.40184V23.8871H6.40837L6.40815 26.8947ZM17.5041 26.8947H14.4986V23.8871H17.5043L17.5041 26.8947ZM28.6011 26.8947H25.5946V23.8871H28.6011V26.8947Z"
      fill="white"
    />
  </svg>
);
const WageseekerIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="32" height="26" className={className} style={style} viewBox="0 0 32 26" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.9997 0C18.0699 0 19.7467 1.6356 19.7467 3.65442C19.7467 5.67349 18.0702 7.30883 15.9997 7.30883C13.9298 7.30883 12.2533 5.67373 12.2533 3.65442C12.2533 1.6356 13.9298 0 15.9997 0ZM6.36438 0C8.43458 0 10.1113 1.6356 10.1113 3.65442C10.1113 5.67349 8.43483 7.30883 6.36438 7.30883C4.29444 7.30883 2.61793 5.67373 2.61793 3.65442C2.61793 1.6356 4.29444 0 6.36438 0ZM10.178 17.0607V25.9994H2.55385V15.9281H0.5V12.5096C0.5 10.151 2.47417 8.22564 4.89249 8.22564H7.83697C8.75633 8.22564 9.61452 8.50528 10.3214 8.97954C9.48153 9.92812 8.97393 11.1619 8.97393 12.5096V17.0602H10.178L10.178 17.0607ZM25.6354 0C27.7053 0 29.3818 1.6356 29.3818 3.65442C29.3818 5.67349 27.7053 7.30883 25.6354 7.30883C23.5652 7.30883 21.8884 5.67373 21.8884 3.65442C21.8884 1.6356 23.5649 0 25.6354 0ZM29.4484 15.9288V26H21.825V17.0613H23.0261V12.5107C23.0261 11.163 22.5182 9.92948 21.6786 8.98065C22.3855 8.50637 23.2437 8.22675 24.163 8.22675H27.1075C29.5258 8.22675 31.5 10.1522 31.5 12.5107V15.9293H29.4486L29.4484 15.9288ZM19.8131 15.9288V26H12.1896V15.9288H10.1352V12.5103C10.1352 10.1517 12.1094 8.22626 14.5277 8.22626H17.4722C19.8905 8.22626 21.8647 10.1517 21.8647 12.5103V15.9288H19.8131Z"
      fill="white"
    />
  </svg>
);
const ContractIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="24" height="27" className={className} style={style} viewBox="0 0 24 27" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.3333 3.00065H15.76C15.2 1.45398 13.7333 0.333984 12 0.333984C10.2667 0.333984 8.8 1.45398 8.24 3.00065H2.66667C1.2 3.00065 0 4.20065 0 5.66732V24.334C0 25.8007 1.2 27.0007 2.66667 27.0007H21.3333C22.8 27.0007 24 25.8007 24 24.334V5.66732C24 4.20065 22.8 3.00065 21.3333 3.00065ZM12 3.00065C12.7333 3.00065 13.3333 3.60065 13.3333 4.33398C13.3333 5.06732 12.7333 5.66732 12 5.66732C11.2667 5.66732 10.6667 5.06732 10.6667 4.33398C10.6667 3.60065 11.2667 3.00065 12 3.00065Z"
      fill="white"
    />
    <g clip-path="url(#clip0_1_3)">
      <path d="M14.9269 16.7879L13.3359 18.3789L17.8331 22.8761L19.4241 21.2851L14.9269 16.7879Z" fill="#0B4B66" />
      <path
        d="M16.1242 14.4996C17.5717 14.4996 18.7492 13.3221 18.7492 11.8746C18.7492 11.4396 18.6292 11.0346 18.4417 10.6746L16.4167 12.6996L15.2992 11.5821L17.3242 9.55711C16.9642 9.36961 16.5592 9.24961 16.1242 9.24961C14.6767 9.24961 13.4992 10.4271 13.4992 11.8746C13.4992 12.1821 13.5592 12.4746 13.6567 12.7446L12.2692 14.1321L10.9342 12.7971L11.4667 12.2646L10.4092 11.2071L11.9992 9.61711C11.1217 8.73961 9.69672 8.73961 8.81922 9.61711L6.16422 12.2721L7.22172 13.3296H5.10672L4.57422 13.8621L7.22922 16.5171L7.76172 15.9846V13.8621L8.81922 14.9196L9.35172 14.3871L10.6867 15.7221L5.12922 21.2796L6.71922 22.8696L15.2542 14.3421C15.5242 14.4396 15.8167 14.4996 16.1242 14.4996Z"
        fill="#0B4B66"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_3">
        <rect width="18" height="18" fill="white" transform="translate(3 7)" />
      </clipPath>
    </defs>
  </svg>
);
const DashboardIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="24" height="24" className={className} style={style} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 13.3333H10.6667V0H0V13.3333ZM0 24H10.6667V16H0V24ZM13.3333 24H24V10.6667H13.3333V24ZM13.3333 0V8H24V0H13.3333Z" fill="white" />
  </svg>
);
const HelperIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="32" height="32" className={className} style={style} viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_4347_41530)">
      <path
        d="M14.668 24.0003H17.3346V21.3337H14.668V24.0003ZM16.0013 2.66699C8.6413 2.66699 2.66797 8.64033 2.66797 16.0003C2.66797 23.3603 8.6413 29.3337 16.0013 29.3337C23.3613 29.3337 29.3346 23.3603 29.3346 16.0003C29.3346 8.64033 23.3613 2.66699 16.0013 2.66699ZM16.0013 26.667C10.1213 26.667 5.33464 21.8803 5.33464 16.0003C5.33464 10.1203 10.1213 5.33366 16.0013 5.33366C21.8813 5.33366 26.668 10.1203 26.668 16.0003C26.668 21.8803 21.8813 26.667 16.0013 26.667ZM16.0013 8.00033C13.0546 8.00033 10.668 10.387 10.668 13.3337H13.3346C13.3346 11.867 14.5346 10.667 16.0013 10.667C17.468 10.667 18.668 11.867 18.668 13.3337C18.668 16.0003 14.668 15.667 14.668 20.0003H17.3346C17.3346 17.0003 21.3346 16.667 21.3346 13.3337C21.3346 10.387 18.948 8.00033 16.0013 8.00033Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_4347_41530">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const AttendanceIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.9674 19.9844C21.0132 19.9844 18.5968 22.2203 18.3063 25.096C18.287 25.2879 18.2773 25.4831 18.2773 25.6798C18.2773 25.8687 18.2875 26.0542 18.3053 26.2382C18.3104 26.2924 18.3208 26.3463 18.3274 26.4004C18.6807 29.2087 21.0613 31.3745 23.9674 31.3745C26.8736 31.3745 29.258 29.2087 29.612 26.4004C29.6186 26.3463 29.6291 26.2924 29.6341 26.2382C29.6519 26.0542 29.6621 25.8687 29.6621 25.6798C29.6621 22.5289 27.1186 19.9844 23.9674 19.9844ZM26.6029 23.0278C26.7603 23.0232 26.9122 23.0839 27.0233 23.1958C27.2439 23.4177 27.2439 23.7765 27.0233 23.9984L23.804 27.2221C23.716 27.3105 23.6017 27.3675 23.4781 27.3845C23.4624 27.3868 23.4464 27.3883 23.4304 27.3891C23.2687 27.3977 23.1109 27.337 22.9967 27.2221L20.9839 25.2083C20.8769 25.1016 20.8167 24.9567 20.8167 24.8052C20.8167 24.654 20.8769 24.5091 20.9839 24.4021C21.0864 24.2986 21.2244 24.2381 21.3698 24.2331C21.5274 24.229 21.6794 24.2902 21.7902 24.4021L23.4003 26.0112L26.2203 23.1957C26.322 23.0933 26.4588 23.0333 26.6029 23.0277L26.6029 23.0278Z"
      fill="white"
    />
    <path
      d="M5.18073 14.0079C5.73151 14.0079 6.25584 14.1431 6.76753 14.2959C6.48515 14.9735 6.31943 15.7296 6.31943 16.5666V22.2623H0.625V17.7065C0.625 16.454 1.16028 15.5837 1.99929 14.962C2.83852 14.3403 4.00518 14.0078 5.18075 14.0078L5.18073 14.0079Z"
      fill="white"
    />
    <path
      d="M13.4337 11.5879C14.5168 11.5879 15.5471 11.898 16.4705 12.3362C15.9083 13.0822 15.5441 13.9667 15.4575 14.9739C15.4376 15.1211 15.4252 15.2721 15.4252 15.4286V23.9687H7.45703V16.5673C7.45703 16.337 7.47228 16.1179 7.49922 15.9068C7.50202 15.8831 7.50837 15.8613 7.51142 15.8379C7.60089 15.2139 7.80067 14.6674 8.08737 14.1843L8.08763 14.1845C8.10212 14.1593 8.11482 14.1334 8.12524 14.1065C8.42694 13.6238 8.81509 13.2093 9.27739 12.861C10.3835 12.0274 11.9045 11.5879 13.4341 11.5879L13.4337 11.5879Z"
      fill="white"
    />
    <path
      d="M23.9678 10.4473C25.8723 10.4473 27.7755 10.8999 29.1495 11.7504C30.5236 12.6011 31.3735 13.7817 31.3735 15.4277V26.2465H30.7508C30.7643 26.0876 30.7859 25.9305 30.7943 25.7717C30.7994 25.7412 30.8022 25.7104 30.8022 25.6794C30.8022 25.6629 30.8001 25.6469 30.7999 25.6303V25.6306V25.626C30.7762 22.5737 28.7388 19.9906 25.9539 19.1419C25.7444 19.0781 25.5317 19.0232 25.3144 18.9795C25.3068 18.978 25.2986 18.9777 25.291 18.9762C25.0818 18.935 24.8693 18.9023 24.6538 18.8806C24.6528 18.8806 24.6515 18.8796 24.6505 18.8796C24.4261 18.857 24.1983 18.8451 23.9678 18.8451C23.7324 18.8451 23.4999 18.8573 23.2706 18.8806C19.8307 19.2314 17.1391 22.1483 17.1391 25.6795C17.1391 25.8709 17.1513 26.059 17.1668 26.2466H16.5664V24.5686V24.5688C16.5667 24.5591 16.5667 24.5495 16.5664 24.5398V15.4278C16.5664 15.2425 16.5809 15.0656 16.602 14.8918C16.6083 14.8402 16.6172 14.7898 16.6254 14.7395C16.6444 14.6198 16.6688 14.5034 16.6976 14.3893C16.7123 14.3313 16.7258 14.2734 16.7431 14.217C16.7751 14.111 16.8147 14.009 16.8554 13.9079C16.9065 13.7826 16.9642 13.6603 17.0277 13.5421C17.0519 13.4969 17.0753 13.4509 17.1012 13.4064C17.1579 13.3106 17.2186 13.2176 17.2834 13.1263C17.2982 13.1052 17.3137 13.0849 17.3289 13.064C17.4799 12.8597 17.6504 12.666 17.8403 12.4825L17.8408 12.4822C17.8553 12.4675 17.869 12.4517 17.882 12.4355C18.1504 12.1861 18.4546 11.9584 18.7904 11.7505C20.1644 10.8998 22.0633 10.4474 23.9678 10.4474L23.9678 10.4473Z"
      fill="white"
    />
    <path
      d="M5.17963 7.46096C6.12974 7.46096 6.88537 8.21789 6.88537 9.16794C6.88537 10.118 6.12974 10.8782 5.17963 10.8782C4.22952 10.8782 3.47266 10.118 3.47266 9.16794C3.47266 9.04924 3.4846 8.93359 3.50722 8.82202C3.66506 8.04069 4.34827 7.46096 5.17963 7.46096Z"
      fill="white"
    />
    <path
      d="M13.1504 2.90457C13.249 2.90457 13.3468 2.9094 13.4429 2.91906H13.4462C13.541 2.92872 13.6346 2.94371 13.7263 2.96252C14.6555 3.15162 15.4173 3.78985 15.777 4.64282C15.8847 4.89877 15.9559 5.17429 15.9849 5.46228C15.9945 5.5581 15.9994 5.6557 15.9994 5.75457C15.9994 5.85319 15.9945 5.95003 15.9849 6.04585C15.9559 6.33383 15.8847 6.60985 15.777 6.86531C15.4176 7.7173 14.6559 8.35372 13.7263 8.54229C13.5418 8.57965 13.3507 8.59973 13.1547 8.59998C13.0561 8.59998 12.9582 8.59414 12.8621 8.58448C11.6136 8.45892 10.6081 7.53657 10.3624 6.32951C10.3248 6.14371 10.3047 5.95207 10.3047 5.75458C10.3047 5.65596 10.3095 5.55811 10.3192 5.46203C10.3288 5.36595 10.3436 5.2714 10.3626 5.17838C10.6084 3.97034 11.6139 3.04488 12.8624 2.91878C12.9569 2.90938 13.0533 2.9043 13.1504 2.9043V2.90457Z"
      fill="white"
    />
    <path
      d="M23.9677 0.626961C24.0861 0.626961 24.2028 0.633061 24.3179 0.644753C25.815 0.795729 27.021 1.90491 27.3158 3.35344C27.3611 3.57635 27.3847 3.80611 27.3847 4.04302C27.3847 4.27965 27.3611 4.51069 27.3158 4.73358C27.021 6.18211 25.815 7.29131 24.3179 7.44227C24.2043 7.45371 24.0889 7.45981 23.972 7.46006C23.8536 7.46006 23.7369 7.45396 23.6218 7.44227C23.5066 7.43058 23.393 7.4138 23.2814 7.39118C22.0558 7.14184 21.0732 6.24007 20.7082 5.06145C20.6086 4.74018 20.5547 4.39782 20.5547 4.04301C20.5547 3.92457 20.5608 3.8079 20.5725 3.69277C20.5956 3.46249 20.6419 3.23984 20.7082 3.02557C21.0732 1.84726 22.0555 0.945432 23.2814 0.695833C23.3927 0.673212 23.5066 0.656183 23.6218 0.644745C23.7354 0.633308 23.8508 0.626961 23.9677 0.626961Z"
      fill="white"
    />
  </svg>
);
const HRIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="28" height="28" className={className} style={style} viewBox="0 0 28 28" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.33464 6.00033H0.667969V24.667C0.667969 26.1337 1.86797 27.3337 3.33464 27.3337H22.0013V24.667H3.33464V6.00033ZM24.668 0.666992H8.66797C7.2013 0.666992 6.0013 1.86699 6.0013 3.33366V19.3337C6.0013 20.8003 7.2013 22.0003 8.66797 22.0003H24.668C26.1346 22.0003 27.3346 20.8003 27.3346 19.3337V3.33366C27.3346 1.86699 26.1346 0.666992 24.668 0.666992ZM16.668 3.33366C18.8813 3.33366 20.668 5.12033 20.668 7.33366C20.668 9.54699 18.8813 11.3337 16.668 11.3337C14.4546 11.3337 12.668 9.54699 12.668 7.33366C12.668 5.12033 14.4546 3.33366 16.668 3.33366ZM24.668 19.3337H8.66797V17.3337C8.66797 14.6803 14.0013 13.3337 16.668 13.3337C19.3346 13.3337 24.668 14.6803 24.668 17.3337V19.3337Z"
      fill="white"
    />
  </svg>
);
const MuktaHomeIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="28" height="23" className={className} style={style} viewBox="0 0 28 23" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3346 22.6667V14.6667H16.668V22.6667H23.3346V12H27.3346L14.0013 0L0.667969 12H4.66797V22.6667H11.3346Z" fill="white" />
  </svg>
);
const DoubleTickIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="32" height="19" viewBox="0 0 32 19" className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24.0002 2.33312L22.1202 0.453125L13.6669 8.90646L15.5469 10.7865L24.0002 2.33312ZM29.6535 0.453125L15.5469 14.5598L9.97354 8.99979L8.09354 10.8798L15.5469 18.3331L31.5469 2.33312L29.6535 0.453125ZM0.546875 10.8798L8.00021 18.3331L9.88021 16.4531L2.44021 8.99979L0.546875 10.8798Z"
      fill="#F47738"
    />
  </svg>
);
const InfoIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 5H11V7H9V5ZM9 9H11V15H9V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
      fill="#505A5F"
    />
  </svg>
);
const PaymentIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="34" height="34" viewBox="0 0 34 34" className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_7555_25801)">
      <path
        d="M23.9987 2.66675H7.9987C6.53203 2.66675 5.33203 3.86675 5.33203 5.33341V26.6667C5.33203 28.1334 6.53203 29.3334 7.9987 29.3334H23.9987C25.4654 29.3334 26.6654 28.1334 26.6654 26.6667V5.33341C26.6654 3.86675 25.4654 2.66675 23.9987 2.66675ZM7.9987 5.33341H14.6654V16.0001L11.332 14.0001L7.9987 16.0001V5.33341Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_7555_25801">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const HistoryIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill={fill} className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30.7437 5.30394C23.7393 -1.76798 12.3808 -1.76798 5.37636 5.30394L3.33196 7.36803V3.88935C3.33196 2.97184 2.5748 2.20731 1.66598 2.20731C0.757234 2.20731 0 2.97177 0 3.88935V11.42C0 12.3375 0.757166 13.102 1.66598 13.102H9.12473C10.0335 13.102 10.7907 12.3376 10.7907 11.42C10.7907 10.5025 10.0335 9.73794 9.12473 9.73794H5.67925L7.72365 7.67385C10.5633 4.80685 14.3116 3.35418 18.0599 3.35418C21.8083 3.35444 25.5565 4.80713 28.3961 7.67412C31.3493 10.6558 32.9017 14.7843 32.6366 18.9892C32.5988 19.9067 33.2802 20.7093 34.189 20.7858H34.3025C35.1733 20.7858 35.8927 20.0979 35.9685 19.2185C36.2714 14.0577 34.3783 8.97375 30.7435 5.304L30.7437 5.30394Z"
      fill="#F47738"
    />
    <path
      d="M18.2519 8.16797C17.3432 8.16797 16.5859 8.93243 16.5859 9.85001V18.1069C16.5859 18.8714 17.0782 19.5213 17.7976 19.7125L23.8176 21.4326C24.6883 21.7003 25.6349 21.1267 25.862 20.2857C26.1271 19.4066 25.5968 18.4509 24.6883 18.2216L19.9178 16.8073V9.85007C19.9178 8.93277 19.1984 8.16804 18.2519 8.16804L18.2519 8.16797Z"
      fill="#F47738"
    />
    <path
      d="M25.4454 31.0611C24.5746 31.5581 23.6659 31.9786 22.7194 32.2845C22.3406 32.3991 22.038 32.6668 21.8486 33.0108C21.6592 33.3548 21.6592 33.7753 21.7728 34.1577C22.038 34.9222 22.8707 35.3427 23.6281 35.1134C24.764 34.731 25.8619 34.2342 26.8842 33.6607C27.6036 33.2402 27.8307 32.3611 27.4143 31.6347C27.0733 30.9083 26.1646 30.6406 25.4454 31.0611Z"
      fill="#F47738"
    />
    <path
      d="M3.40851 20.1747C3.37074 19.7923 3.14335 19.4483 2.84069 19.1808C2.57553 18.9897 2.27287 18.875 1.96994 18.875H1.78058C1.40185 18.9131 1.06114 19.1427 0.796242 19.4483C0.569113 19.7541 0.455548 20.1362 0.531082 20.5567C0.682414 21.7801 0.947574 22.9651 1.36404 24.0736C1.6292 24.838 2.49996 25.2585 3.25712 24.9911C3.63585 24.8764 3.9385 24.5706 4.09008 24.2266C4.24141 23.8826 4.27944 23.4621 4.16588 23.0797C3.78715 22.1622 3.55977 21.1684 3.40844 20.1746L3.40851 20.1747Z"
      fill="#F47738"
    />
    <path
      d="M7.60837 28.6674C7.38124 28.4381 7.19188 28.2088 6.96476 27.9794C6.66183 27.6355 6.28338 27.4824 5.8669 27.4824C5.52621 27.4824 5.18553 27.5971 4.88257 27.8648C4.27672 28.4 4.20119 29.3556 4.769 29.9673C4.99613 30.235 5.26128 30.5025 5.52617 30.7702C6.09398 31.3435 6.73788 31.9171 7.38146 32.4138C8.02507 32.9109 8.97165 32.7578 9.42585 32.108C9.65298 31.8021 9.76655 31.42 9.72878 30.9995C9.69101 30.6172 9.46362 30.2732 9.16096 30.0057C8.63064 29.6231 8.10057 29.1645 7.6083 28.6675L7.60837 28.6674Z"
      fill="#F47738"
    />
    <path
      d="M33.281 24.1352C33.0538 24.0206 32.8645 23.9824 32.6374 23.9824C32.486 23.9824 32.3344 24.0206 32.1831 24.0589C31.8044 24.1736 31.5017 24.4413 31.3123 24.8234C30.8581 25.7026 30.328 26.582 29.7222 27.3464C29.2299 27.9963 29.3434 28.9138 29.9493 29.449C30.5551 29.946 31.5395 29.8313 32.0317 29.2196C32.7512 28.264 33.3948 27.2702 33.9248 26.1999C34.1142 25.8559 34.1142 25.4354 34.0006 25.053C33.8868 24.5939 33.6217 24.288 33.281 24.1352Z"
      fill="#F47738"
    />
    <path
      d="M17.1491 33.0137C16.1648 32.9371 15.1802 32.7844 14.2337 32.5166C14.1201 32.4785 13.9685 32.4785 13.855 32.4785C13.5898 32.4785 13.3627 32.555 13.1355 32.6697C12.7948 32.8609 12.5677 33.2049 12.4542 33.5872C12.227 34.3901 12.7193 35.1927 13.4765 35.422C14.6124 35.7279 15.7861 35.919 16.9975 35.9953H17.0733C17.8305 35.9953 18.4741 35.3836 18.5499 34.6192C18.5877 33.7784 17.9441 33.0521 17.1491 33.0137Z"
      fill="#F47738"
    />
  </svg>
);

const WarningIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill={fill} className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_7513_43945)">
      <path
        d="M1.66797 35.0007H38.3346L20.0013 3.33398L1.66797 35.0007ZM21.668 30.0007H18.3346V26.6673H21.668V30.0007ZM21.668 23.334H18.3346V16.6673H21.668V23.334Z"
        fill="#F47738"
      />
    </g>
    <defs>
      <clipPath id="clip0_7513_43945">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const AttentionListIcon = ({ className = "", fill = "none", style = {} }) => (
  <svg width="36" height="36" viewBox="0 0 24 27" fill={fill} className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.3333 3.00065H15.76C15.2 1.45398 13.7333 0.333984 12 0.333984C10.2667 0.333984 8.8 1.45398 8.24 3.00065H2.66667C1.2 3.00065 0 4.20065 0 5.66732V24.334C0 25.8007 1.2 27.0007 2.66667 27.0007H21.3333C22.8 27.0007 24 25.8007 24 24.334V5.66732C24 4.20065 22.8 3.00065 21.3333 3.00065ZM12 3.00065C12.7333 3.00065 13.3333 3.60065 13.3333 4.33398C13.3333 5.06732 12.7333 5.66732 12 5.66732C11.2667 5.66732 10.6667 5.06732 10.6667 4.33398C10.6667 3.60065 11.2667 3.00065 12 3.00065ZM12.6667 21.6673H5.33333V19.0007H12.6667V21.6673ZM18.6667 16.334H5.33333V13.6673H18.6667V16.334ZM18.6667 11.0007H5.33333V8.33398H18.6667V11.0007Z"
      fill="#F47738"
    />
  </svg>
);

const EmblemLogo = () => (
  <svg width="32" height="50" viewBox="0 0 32 50" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <rect y="0.200195" width="32" height="49.6" fill="url(#pattern0_189_983)" />
    <defs>
      <pattern id="pattern0_189_983" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#image0_189_983" transform="matrix(0.00322917 0 0 0.00208333 -0.000520818 0)" />
      </pattern>
      <image
        id="image0_189_983"
        width="310"
        height="480"
        href="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

const HourGlass = () => (
  <svg width="124" height="125" viewBox="0 0 124 125" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M95.4802 17.8599C96.1651 17.8599 96.7202 17.3047 96.7202 16.6199C96.7202 15.935 96.1651 15.3799 95.4802 15.3799C94.7954 15.3799 94.2402 15.935 94.2402 16.6199C94.2402 17.3047 94.7954 17.8599 95.4802 17.8599Z"
      fill="#F1BC19"
    />
    <path
      d="M61.9991 108.38C87.338 108.38 107.879 87.8389 107.879 62.5001C107.879 37.1613 87.338 16.6201 61.9991 16.6201C36.6603 16.6201 16.1191 37.1613 16.1191 62.5001C16.1191 87.8389 36.6603 108.38 61.9991 108.38Z"
      fill="#F2E6BA"
    />
    <path
      d="M102.921 24.0601C105.66 24.0601 107.881 21.8395 107.881 19.1001C107.881 16.3608 105.66 14.1401 102.921 14.1401C100.182 14.1401 97.9609 16.3608 97.9609 19.1001C97.9609 21.8395 100.182 24.0601 102.921 24.0601Z"
      fill="#F1BC19"
    />
    <path
      d="M107.88 32.7398C109.25 32.7398 110.36 31.6295 110.36 30.2598C110.36 28.8901 109.25 27.7798 107.88 27.7798C106.511 27.7798 105.4 28.8901 105.4 30.2598C105.4 31.6295 106.511 32.7398 107.88 32.7398Z"
      fill="#F2CD49"
    />
    <path
      d="M100.441 97.2198C101.811 97.2198 102.921 96.1094 102.921 94.7398C102.921 93.3701 101.811 92.2598 100.441 92.2598C99.0713 92.2598 97.9609 93.3701 97.9609 94.7398C97.9609 96.1094 99.0713 97.2198 100.441 97.2198Z"
      fill="#FBCD59"
    />
    <path
      d="M18.6006 83.5802C21.34 83.5802 23.5606 81.3595 23.5606 78.6202C23.5606 75.8808 21.34 73.6602 18.6006 73.6602C15.8613 73.6602 13.6406 75.8808 13.6406 78.6202C13.6406 81.3595 15.8613 83.5802 18.6006 83.5802Z"
      fill="#FBCD59"
    />
    <path
      d="M22.9398 67.4598C24.6519 67.4598 26.0398 66.0718 26.0398 64.3598C26.0398 62.6477 24.6519 61.2598 22.9398 61.2598C21.2278 61.2598 19.8398 62.6477 19.8398 64.3598C19.8398 66.0718 21.2278 67.4598 22.9398 67.4598Z"
      fill="white"
    />
    <path
      d="M98.5807 43.9002C99.608 43.9002 100.441 43.0674 100.441 42.0402C100.441 41.0129 99.608 40.1802 98.5807 40.1802C97.5535 40.1802 96.7207 41.0129 96.7207 42.0402C96.7207 43.0674 97.5535 43.9002 98.5807 43.9002Z"
      fill="white"
    />
    <path
      d="M28.5191 105.9C29.8887 105.9 30.9991 104.79 30.9991 103.42C30.9991 102.05 29.8887 100.94 28.5191 100.94C27.1494 100.94 26.0391 102.05 26.0391 103.42C26.0391 104.79 27.1494 105.9 28.5191 105.9Z"
      fill="#F2CD49"
    />
    <path
      d="M55.1185 81.472L40.6191 80.1811C40.67 74.4598 40.6687 74.4251 40.6675 74.4077C40.6638 73.6228 41.2987 69.6957 44.3168 66.6168L49.3029 61.5315C49.9836 60.8161 50.5354 59.3082 49.3029 58.0521L44.6541 53.3128C44.576 53.2409 40.6613 49.6176 40.6613 43.9012V39.1285C40.8696 39.0603 41.1399 38.9883 41.3892 38.9375H68.3021C68.2972 38.94 68.3319 38.9821 68.3666 39.0578V44.5125C68.2662 49.8383 64.9566 53.2769 64.9231 53.3116L60.2744 58.0509C59.0406 59.307 59.5924 60.8148 60.2632 61.5216L65.2592 66.6168C68.3096 69.7279 68.9432 73.6277 68.937 74.4263C68.937 74.9731 69.2607 75.1926 69.7058 75.3005L69.7071 80.1787L55.2127 81.472H55.1185Z"
      fill="#FDFCEF"
    />
    <path
      d="M67.4992 39.8044V44.4792C67.405 49.4503 64.3323 52.6731 64.3013 52.7041L59.6537 57.4421C58.1806 58.9425 58.5439 60.9712 59.6525 62.1392L64.6385 67.2245C67.4955 70.1385 68.0721 73.8163 68.0684 74.4338C68.0684 75.1667 68.4044 75.5994 68.8372 75.8598L68.8384 79.3914L55.1835 80.6041L41.5299 79.3914C41.5361 74.5864 41.5349 74.4252 41.5349 74.4252C41.5311 73.8138 42.109 70.1062 44.9349 67.2245L49.9396 62.1206C51.0295 60.9749 51.3941 58.9462 49.921 57.4434L45.2735 52.7041L45.235 52.6656L45.2015 52.6346C45.1643 52.6012 41.5299 49.2073 41.5299 43.9001V39.8044H54.7892H67.4992ZM68.3213 38.0684C68.3151 38.0684 68.3089 38.0684 68.3027 38.0684H54.7892H41.3042C41.3042 38.0684 39.1702 38.4714 39.7939 38.9401V43.9001C39.7939 50.1001 44.0347 53.9205 44.0347 53.9205C44.0347 53.9205 47.5898 57.545 48.6835 58.6598C49.7771 59.7746 48.6835 60.924 48.6835 60.924C48.6835 60.924 47.0826 62.5571 43.6974 66.0093C40.5205 69.2494 39.7951 73.4046 39.8013 74.4351C39.8026 74.4735 39.7951 80.1788 39.7951 80.1788C39.7951 80.6314 40.12 81.0071 40.5429 81.0455L55.1178 82.3401C55.1625 82.3401 55.2059 82.3401 55.2505 82.3401L69.8267 81.0455C70.2495 81.0071 70.5744 80.6301 70.5744 80.1775L70.5732 74.5454C70.5732 74.5454 69.8044 74.4723 69.8044 74.4326C69.8131 73.3699 69.0529 69.2457 65.8785 66.008C62.4933 62.5559 60.8913 60.9228 60.8913 60.9228C60.8913 60.9228 59.7976 59.7721 60.8913 58.6586C61.9849 57.545 65.54 53.9193 65.54 53.9193C65.54 53.9193 69.1236 50.2935 69.234 44.5114V38.9078C69.1013 38.4453 68.7529 38.0684 68.3213 38.0684Z"
      fill="#472B29"
    />
    <path
      d="M69.2824 81.0997L69.017 80.9955L55.7998 70.649V57.4529C55.9449 54.3938 57.8223 52.4619 58.508 51.8406L64.0248 45.9147C66.3907 43.8414 66.4254 40.4922 66.4279 40.1797H42.9026C42.9026 40.5256 42.9869 43.8798 45.3057 45.9147L50.8944 51.9064C51.5082 52.4606 52.9454 54.3926 53.3198 57.4516V70.6415L40.0469 81.0997H69.2824Z"
      fill="#F6CCA4"
    />
    <path
      d="M70.9125 81.4099H39.1523L53.0106 70.4904V57.4518C52.6597 54.5973 51.3366 52.7237 50.6868 52.1359L45.0808 46.1269C42.6231 43.9705 42.5933 40.3349 42.5933 40.1811V39.8711H66.7423L66.7399 40.1836C66.7349 40.8172 66.5911 44.0809 64.2313 46.1492L58.7357 52.0529C57.9793 52.7398 56.247 54.6048 56.1118 57.4679V70.4991L69.1752 80.7241L70.9125 81.4099ZM40.9429 80.7899H68.2527L55.4906 70.8004V57.4531C55.6381 54.3431 57.5043 52.3319 58.3004 51.6114L63.7998 45.7041C65.7206 44.0189 66.0529 41.4781 66.1087 40.4899H43.2245C43.2815 41.3889 43.6114 44.0152 45.5111 45.6817L51.1208 51.6945C51.8115 52.317 53.2524 54.3407 53.6269 57.4146L53.6293 70.7917L40.9429 80.7899Z"
      fill="#472B29"
    />
    <path
      d="M39.723 40.5522C38.8104 40.5522 38.0664 39.6916 38.0664 38.6327V35.5265C38.0664 34.4687 38.8104 33.6069 39.723 33.6069H69.3938C70.3064 33.6069 71.0504 34.4675 71.0504 35.5265V38.6327C71.0504 39.6904 70.3064 40.5522 69.3938 40.5522H39.723Z"
      fill="#9E400A"
    />
    <path
      d="M69.3946 34.4762C69.8149 34.4762 70.1832 34.9673 70.1832 35.5278V38.634C70.1832 39.1944 69.8149 39.6855 69.3946 39.6855H39.7239C39.3035 39.6855 38.9352 39.1944 38.9352 38.634V35.5278C38.9352 34.9673 39.3035 34.4762 39.7239 34.4762H69.3946ZM69.3946 32.7402H39.7239C38.3351 32.7402 37.1992 33.9951 37.1992 35.5278V38.634C37.1992 40.1666 38.3363 41.4202 39.7239 41.4202H69.3946C70.7821 41.4202 71.9192 40.1666 71.9192 38.6327V35.5265C71.9192 33.9939 70.7821 32.7402 69.3946 32.7402Z"
      fill="#472B29"
    />
    <path
      d="M39.5197 86.432C38.731 86.432 38.0664 85.6335 38.0664 84.6898V81.2315C38.0664 80.2866 38.731 79.4893 39.5197 79.4893H69.5971C70.3858 79.4893 71.0504 80.2878 71.0504 81.2315V84.6898C71.0504 85.6347 70.3858 86.432 69.5971 86.432H39.5197Z"
      fill="#9E400A"
    />
    <path
      d="M69.5979 80.3561C69.8745 80.3561 70.1832 80.7306 70.1832 81.2316V84.6899C70.1832 85.1909 69.8745 85.5654 69.5979 85.5654H39.5205C39.244 85.5654 38.9352 85.1909 38.9352 84.6899V81.2316C38.9352 80.7306 39.244 80.3561 39.5205 80.3561H69.5979ZM69.5979 78.6201H39.5205C38.2433 78.6201 37.1992 79.7944 37.1992 81.2303V84.6887C37.1992 86.1258 38.2433 87.3001 39.5205 87.3001H69.5992C70.8751 87.3001 71.9192 86.1258 71.9192 84.6899V81.2316C71.9192 79.7944 70.8751 78.6201 69.5979 78.6201Z"
      fill="#472B29"
    />
    <path
      d="M77.5 93.5C86.0604 93.5 93 86.5604 93 78C93 69.4396 86.0604 62.5 77.5 62.5C68.9396 62.5 62 69.4396 62 78C62 86.5604 68.9396 93.5 77.5 93.5Z"
      fill="#931847"
    />
    <path
      d="M77.5009 94.1199C68.6125 94.1199 61.3809 86.8882 61.3809 77.9999C61.3809 69.1116 68.6125 61.8799 77.5009 61.8799C86.3892 61.8799 93.6209 69.1116 93.6209 77.9999C93.6209 86.8882 86.3892 94.1199 77.5009 94.1199ZM77.5009 63.1199C69.2958 63.1199 62.6209 69.7948 62.6209 77.9999C62.6209 86.205 69.2958 92.8799 77.5009 92.8799C85.7059 92.8799 92.3809 86.205 92.3809 77.9999C92.3809 69.7948 85.7059 63.1199 77.5009 63.1199Z"
      fill="#472B29"
    />
    <path
      d="M77.5005 91.02C84.6912 91.02 90.5205 85.1907 90.5205 78C90.5205 70.8092 84.6912 64.98 77.5005 64.98C70.3097 64.98 64.4805 70.8092 64.4805 78C64.4805 85.1907 70.3097 91.02 77.5005 91.02Z"
      fill="#FDFCEE"
    />
    <path
      d="M77.4999 91.3299C70.1492 91.3299 64.1699 85.3506 64.1699 77.9999C64.1699 70.6492 70.1492 64.6699 77.4999 64.6699C84.8506 64.6699 90.8299 70.6492 90.8299 77.9999C90.8299 85.3506 84.8506 91.3299 77.4999 91.3299ZM77.4999 65.2899C70.4914 65.2899 64.7899 70.9914 64.7899 77.9999C64.7899 85.0084 70.4914 90.7099 77.4999 90.7099C84.5084 90.7099 90.2099 85.0084 90.2099 77.9999C90.2099 70.9914 84.5084 65.2899 77.4999 65.2899Z"
      fill="#472B29"
    />
    <path
      d="M79.2851 75.5781L69.8995 85.0207C69.6652 85.2563 69.38 85.6432 69.6156 85.8788C69.8499 86.1144 70.2343 85.8292 70.4687 85.5924L79.8542 76.1498C80.256 76.2552 80.9839 76.2006 81.2976 75.8844L82.1507 75.0263C82.6194 74.5539 82.6194 73.7814 82.1507 73.3089C81.682 72.8365 80.9132 72.8365 80.4445 73.3089L79.5914 74.167C79.2776 74.4844 79.1797 75.1739 79.2851 75.5781Z"
      fill="#472B29"
    />
    <path
      d="M85.2416 78.8577H78.9535C78.7142 78.8577 78.5195 78.6643 78.5195 78.4237C78.5195 78.1832 78.7142 77.9897 78.9535 77.9897H85.2416C85.4809 77.9897 85.6756 78.1832 85.6756 78.4237C85.6756 78.6643 85.4809 78.8577 85.2416 78.8577Z"
      fill="#472B29"
    />
    <path
      d="M77.1567 77.5112C76.9173 77.5112 76.7227 77.3178 76.7227 77.0772V66.7455C76.7227 66.5062 76.9173 66.3115 77.1567 66.3115C77.396 66.3115 77.5907 66.505 77.5907 66.7455V77.0772C77.5907 77.3178 77.396 77.5112 77.1567 77.5112Z"
      fill="#472B29"
    />
    <path
      d="M77.1563 76.853C76.2883 76.853 75.584 77.5573 75.584 78.4253C75.584 79.2933 76.2883 79.9977 77.1563 79.9977C78.0243 79.9977 78.7286 79.2933 78.7286 78.4253C78.7286 77.5573 78.0243 76.853 77.1563 76.853Z"
      fill="#FBCD59"
    />
    <path
      d="M77.1567 80.4303C76.0506 80.4303 75.1504 79.5301 75.1504 78.424C75.1504 77.3179 76.0506 76.4189 77.1567 76.4189C78.2628 76.4189 79.163 77.3192 79.163 78.424C79.163 79.5313 78.2628 80.4303 77.1567 80.4303ZM77.1567 77.2857C76.5293 77.2857 76.0184 77.7966 76.0184 78.424C76.0184 79.0527 76.5293 79.5636 77.1567 79.5636C77.7842 79.5636 78.295 79.0527 78.295 78.424C78.295 77.7966 77.7842 77.2857 77.1567 77.2857Z"
      fill="#472B29"
    />
    <path
      d="M67.5805 79.5497H64.5971C64.426 79.5497 64.2871 79.4108 64.2871 79.2397C64.2871 79.0686 64.426 78.9297 64.5971 78.9297H67.5805C67.7517 78.9297 67.8905 79.0686 67.8905 79.2397C67.8905 79.4108 67.7517 79.5497 67.5805 79.5497Z"
      fill="#472B29"
    />
    <path
      d="M90.3279 79.5497H87.4213C87.2502 79.5497 87.1113 79.4108 87.1113 79.2397C87.1113 79.0686 87.2502 78.9297 87.4213 78.9297H90.3279C90.499 78.9297 90.6379 79.0686 90.6379 79.2397C90.6379 79.4108 90.4978 79.5497 90.3279 79.5497Z"
      fill="#472B29"
    />
    <path
      d="M77.4623 91.175C77.2912 91.175 77.1523 91.0361 77.1523 90.865V87.9584C77.1523 87.7873 77.2912 87.6484 77.4623 87.6484C77.6335 87.6484 77.7723 87.7873 77.7723 87.9584V90.865C77.7723 91.0361 77.6322 91.175 77.4623 91.175Z"
      fill="#472B29"
    />
    <path
      d="M84.504 71.2681C84.4246 71.2681 84.3453 71.2383 84.2845 71.1776C84.163 71.056 84.163 70.8601 84.2845 70.7386L86.3392 68.6839C86.4607 68.5624 86.6566 68.5624 86.7781 68.6839C86.8997 68.8054 86.8997 69.0014 86.7781 69.1229L84.7235 71.1776C84.6627 71.2383 84.5846 71.2681 84.504 71.2681Z"
      fill="#472B29"
    />
    <path
      d="M70.4745 71.3226C70.3952 71.3226 70.3158 71.2929 70.2551 71.2321L68.1458 69.1229C68.0243 69.0014 68.0243 68.8054 68.1458 68.6839C68.2673 68.5624 68.4633 68.5624 68.5848 68.6839L70.694 70.7932C70.8155 70.9147 70.8155 71.1106 70.694 71.2321C70.6333 71.2929 70.5539 71.3226 70.4745 71.3226Z"
      fill="#472B29"
    />
    <path
      d="M86.5587 87.4067C86.4793 87.4067 86.3999 87.377 86.3392 87.3162L84.2845 85.2616C84.163 85.14 84.163 84.9441 84.2845 84.8226C84.406 84.7011 84.6019 84.7011 84.7235 84.8226L86.7781 86.8773C86.8997 86.9988 86.8997 87.1947 86.7781 87.3162C86.7174 87.377 86.638 87.4067 86.5587 87.4067Z"
      fill="#472B29"
    />
    <path
      d="M47.7405 37.39H41.5405C41.3693 37.39 41.2305 37.2511 41.2305 37.08C41.2305 36.9089 41.3693 36.77 41.5405 36.77H47.7405C47.9116 36.77 48.0505 36.9089 48.0505 37.08C48.0505 37.2511 47.9116 37.39 47.7405 37.39Z"
      fill="#472B29"
    />
    <path
      d="M45.2605 83.2699H41.5405C41.3693 83.2699 41.2305 83.131 41.2305 82.9599C41.2305 82.7888 41.3693 82.6499 41.5405 82.6499H45.2605C45.4316 82.6499 45.5705 82.7888 45.5705 82.9599C45.5705 83.131 45.4316 83.2699 45.2605 83.2699Z"
      fill="#472B29"
    />
    <path
      d="M60.1397 83.2699H47.7397C47.5686 83.2699 47.4297 83.131 47.4297 82.9599C47.4297 82.7888 47.5686 82.6499 47.7397 82.6499H60.1397C60.3108 82.6499 60.4497 82.7888 60.4497 82.9599C60.4497 83.131 60.3108 83.2699 60.1397 83.2699Z"
      fill="#472B29"
    />
    <path
      d="M67.5804 37.39H51.4604C51.2893 37.39 51.1504 37.2511 51.1504 37.08C51.1504 36.9089 51.2893 36.77 51.4604 36.77H67.5804C67.7515 36.77 67.8904 36.9089 67.8904 37.08C67.8904 37.2511 67.7515 37.39 67.5804 37.39Z"
      fill="#472B29"
    />
  </svg>
);

const ExpenditureIcon = BillsIcon;

export {
  CloseIconWhite,
  AnnouncementIcon,
  ReceiptIcon,
  CreateEstimateIcon,
  GotoInboxIcon,
  ArrowLeft,
  ArrowDown,
  CameraSvg,
  DeleteBtn,
  DownloadIcon,
  Ellipsis,
  SuccessSvg,
  ErrorSvg,
  StarFilled,
  StarEmpty,
  SearchIconSvg,
  CheckSvg,
  RoundedCheck,
  Calender,
  Phone,
  FilterSvg,
  SortSvg,
  Close,
  Feedback,
  GetApp,
  HamburgerIcon,
  ArrowBack,
  ArrowForward,
  ArrowRightInbox,
  SortDown,
  SortUp,
  ShippingTruck,
  CloseSvg,
  CalendarIcon,
  UpwardArrow,
  DownwardArrow,
  Poll,
  FilterIcon,
  RefreshIcon,
  RefreshSVG,
  Details,
  PrintIcon,
  PropertyHouse,
  PrimaryDownlaodIcon,
  InfoBannerIcon,
  ShareIcon,
  RupeeIcon,
  ComplaintIcon,
  DropIcon,
  Person,
  WhatsappIcon,
  EmailIcon,
  DocumentIcon,
  DocumentIconSolid,
  EventsIconSolid,
  SurveyIconSolid,
  PMBIconSolid,
  DustbinIcon,
  ExternalLinkIcon,
  DownloadImgIcon,
  ViewsIcon,
  PrevIcon,
  DocumentSVG,
  ArrowToFirst,
  ArrowToLast,
  DownloadPrefixIcon,
  CaseIcon,
  PersonIcon,
  PTIcon,
  OBPSIcon,
  OBPSIconSolidBg,
  CitizenTruck,
  FSMIcon,
  EDCRIcon,
  BPAIcon,
  BPAHomeIcon,
  HelpIcon,
  NotificationBell,
  MapMarker,
  Clock,
  EventCalendar,
  ImageIcon,
  TickMark,
  PDFSvg,
  EditIcon,
  SearchIcon,
  DeleteIcon,
  CreateLoiIcon,
  PMBIcon,
  GenericFileIcon,
  ArrowLeftWhite,
  WSICon,
  ArrowVectorDown,
  ArrowDirection,
  CameraIcon,
  RemoveIcon,
  GalleryIcon,
  EditPencilIcon,
  AddressBookIcon,
  LocationIcon,
  CollectionsBookmarIcons,
  FinanceChartIcon,
  CollectionIcon,
  MCollectIcon,
  PGRIcon,
  TLIcon,
  BillsIcon,
  ErrorIcon,
  DownloadBtnCommon,
  PrintBtnCommon,
  WhatsappIconGreen,
  HelpLineIcon,
  ServiceCenterIcon,
  TimerIcon,
  RupeeSymbol,
  ValidityTimeIcon,
  AddIcon,
  SubtractIcon,
  AddNewIcon,
  ViewReportIcon,
  InboxIcon,
  PrivacyMaskIcon,
  FirenocIcon,
  BirthIcon,
  DeathIcon,
  ArrowCollapseUp,
  ArrowCollapseDown,
  AddFilled,
  AddFileFilled,
  LocateIcon,
  /* Works Management  */
  NoResultsFoundIcon,
  WorksMgmtIcon,
  BioMetricIcon,
  MuktaHomeIcon,
  HRIcon,
  ProjectIcon,
  EstimateIcon,
  ContractIcon,
  AttendanceIcon,
  WageseekerIcon,
  OrganisationIcon,
  HelperIcon,
  DashboardIcon,
  ExpenditureIcon,
  DoubleTickIcon,
  InfoIcon,
  PaymentIcon,
  HistoryIcon,
  WarningIcon,
  AttentionListIcon,
  UploadIcon,
  FileIcon,
  DeleteIconv2,
  InfoIconOutline,
  EmblemLogo,
  HourGlass
};
