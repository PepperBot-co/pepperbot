import { Handle, Position } from "reactflow";
import { memo } from "react";
import Delete from "@pb/components/icons/delete";
import InfoCard from "@pb/components/info-card";

import { type PBNodeProps } from "../flow-builder.types";

import useDeleteClickHandler from "../hooks/useDeleteNode";

const WorkflowNode = ({
  id,
  data,
  selected,
}: PBNodeProps): React.ReactElement => {
  const onDelete = useDeleteClickHandler(id);
  const nodeClasses = `node-primary ${
    selected ? "border-2 border-primary" : ""
  }`;

  return (
    <div className="row group mr-14 flex items-center justify-center">
      <div onClick={onDelete} className="node-action">
        <Delete />
      </div>
      <div className={nodeClasses} title="click to update intro">
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

export default memo(WorkflowNode);
