import Chat from "@pb/components/chat";
import FlowBuilder from "@pb/components/flow-builder";
import type { PBNodeProps } from "@pb/components/flow-builder/flow-builder.types";
import HeadMeta from "@pb/components/head-meta";
import Header from "@pb/components/header";
import NodeOptionsForm from "@pb/components/node-options-form";
import useFlowStore, { flowSelector } from "@pb/store/flow-builder.store";
import { type NextPage } from "next";
import { shallow } from "zustand/shallow";

const Flow: NextPage = () => {
  const { flowMode, selectedNode } = useFlowStore(flowSelector, shallow);
  const showChat = flowMode === "Test";
  const showConfigs = !!selectedNode && !showChat;

  return (
    <>
      <HeadMeta title="PepperBot | Demo" />
      <main className="min-h-screen bg-base-100">
        <Header />
        <div className="row flex h-[calc(100vh-65px)] w-screen bg-base-200">
          <div className="h-full flex-1">
            <FlowBuilder />
          </div>
          {showConfigs ? (
            <NodeOptionsForm {...(selectedNode as unknown as PBNodeProps)} />
          ) : null}
          {showChat ? <Chat /> : null}
        </div>
      </main>
    </>
  );
};

export default Flow;
