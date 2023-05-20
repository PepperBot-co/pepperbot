import type { TwoColumnLayoutProps } from "@pb/types";

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  leftContent,
  rightContent,
}) => {
  return (
    <div className="row flex h-[calc(100vh-65px)] w-screen bg-base-200">
      <div className="h-full w-[50vw]">{leftContent}</div>
      <div className="h-full min-w-[50vw]">{rightContent}</div>
    </div>
  );
};

export default TwoColumnLayout;
