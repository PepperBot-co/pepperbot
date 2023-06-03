import useFlowStore from "@pb/store/flow-builder.store";
import type { TwoColumnLayoutProps } from "@pb/types";

import type { SelectedNode } from "../flow-builder/flow-builder.types";
import NodeConfigurator from "./node-configurator";

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ leftContent }) => {
  const { nodes: initialNodes } = useFlowStore();
  const selectedNode = initialNodes.find(
    (node) => node.selected === true
  ) as SelectedNode;

  return (
    <div className="row flex h-[calc(100vh-65px)] w-screen bg-base-200">
      <div className="h-full flex-1">{leftContent}</div>
      {selectedNode ? <NodeConfigurator {...selectedNode} /> : null}
    </div>
  );
};

export default TwoColumnLayout;
