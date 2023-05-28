import InfoCard from "@pb/components/info-card";
import { memo } from "react";
import { Handle, Position } from "reactflow";

import { type PBNodeProps } from "../flow-builder.types";

const OutroNode = ({ data, selected }: PBNodeProps): React.ReactElement => {
  const nodeClasses = `node-primary ${
    selected ? "border-2 border-primary" : ""
  }`;

  return (
    <div className="row group mx-[3.75rem] flex items-center justify-center">
      <div className={nodeClasses} title="click to update outro">
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

export default memo(OutroNode);
