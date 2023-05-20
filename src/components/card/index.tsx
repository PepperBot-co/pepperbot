import Link from "next/link";
import { memo } from "react";

import { type CardData } from "@pb/types";

const Card: React.FC<CardData> = ({ title, description, flowID }) => {
  return (
    <Link
      href={`/flows/${flowID}`}
      className="card w-full border border-base-300 bg-base-100 shadow-md"
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default memo(Card);
