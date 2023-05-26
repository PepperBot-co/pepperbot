import { SVGProps } from "react";

const ResetChat: React.FC = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none">
    <path
      stroke={props.fill || "#8C8C8C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.52 14.56h-3.8a4.56 4.56 0 0 1-2.63-8.277"
    />
    <path
      stroke={props.fill || "#8C8C8C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m10 13.04 1.52 1.52L10 16.08M8.48 5.44h3.8a4.56 4.56 0 0 1 2.63 8.276"
    />
    <path
      stroke={props.fill || "#8C8C8C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6.96 8.48 5.44 10 3.92"
    />
  </svg>
);
export default ResetChat;
