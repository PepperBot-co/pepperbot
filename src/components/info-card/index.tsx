import { memo } from "react";

import { type InfoCardData } from "./info-card.types";

// TODO(aliabudiab112@gmail.com): Investigate the issue with the CSS file import and resolve any related problems.
// TODO(aliabudiab112@gmail.com): Refactor the code to use class names instead of long classes for improved readability and maintainability.

const InfoCard: React.FC<InfoCardData> = ({
  icon,
  title,
  description = "",
  containerCustomClasses = "",
}) => {
  return (
    <div className={`flex items-center gap-x-4 ${containerCustomClasses}`}>
      <div className="rounded-badge inline-flex h-14 w-14 min-w-[3.5rem] items-center justify-center bg-base-200">
        {icon}
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="text-base font-semibold md:text-lg">{title}</h3>
        {description && <p className="text-xs md:text-sm">{description}</p>}
      </div>
    </div>
  );
};

export default memo(InfoCard);
