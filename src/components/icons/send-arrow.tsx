import { SVGProps } from "react";

const SendArrow: React.FC = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} fill="none">
    <path
      stroke={props.fill || "#8C56E8"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.061 8.945h4m-5.56-7.85 14.65 7a1 1 0 0 1 0 1.8l-14.65 7a1 1 0 0 1-1.34-1.41l2.72-6.13a1.06 1.06 0 0 0 0-.82l-2.72-6.13a1 1 0 0 1 1.34-1.31Z"
    />
  </svg>
);

export default SendArrow;
