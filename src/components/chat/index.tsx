import { shallow } from "zustand/shallow";
import useFlowStore, { flowSelector } from "@pb/components/flow-builder/store";

import { type PBNodeProps } from "../flow-builder/flow-builder.types";

import InfoCard from "../info-card";

// TODO(laithyounesy@gmail.com): This componenet is used to showcase the zustand data passing.
const Chat: React.FC = () => {
  const { nodes } = useFlowStore(flowSelector, shallow);
  const selectedNode = nodes.find((node) => node.selected) as
    | PBNodeProps
    | undefined;

  return (
    <div className="h-[calc(100vh-65px)] border-l border-base-300 bg-base-100 p-5">
      {selectedNode && (
        <InfoCard
          description={selectedNode?.data?.description}
          icon={selectedNode?.data?.icon}
          title={selectedNode?.data?.label}
        />
      )}
    </div>
  );
};

export default Chat;
