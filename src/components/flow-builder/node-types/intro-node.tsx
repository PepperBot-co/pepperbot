import { Handle, Position } from "reactflow";
import { memo } from "react";

import { type PBNodeProps } from "../flow-builder.types";

import InfoCard from "@pb/components/info-card";

const IntroNode = ({ data, selected }: PBNodeProps) => {
  return (
    <div className="row group mx-[3.75rem] flex items-center justify-center">
      <div
        className={`node-primary ${selected ? "border-2 border-primary" : ""}`}
        title="click to update intro"
      >
        <InfoCard
          description={data?.description}
          icon={data?.icon}
          title={data?.label}
        />
        <Handle
          className="invisible"
          type="target"
          position={Position.Top}
          isConnectable={false}
        />
        <Handle
          className="invisible"
          type="source"
          position={Position.Bottom}
          isConnectable={false}
        />
      </div>
    </div>
  );
};

export default memo(IntroNode);
