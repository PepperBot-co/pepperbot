import HeadMeta from "@pb/components/head-meta";
import TwoColumnLayout from "@pb/components/layout/two-column";
import FlowBuilder from "@pb/components/flow-builder";
import Header from "@pb/components/header";
import Chat from "@pb/components/chat";

import { type NextPage } from "next";

const Flow: NextPage = () => {
  return (
    <>
      <HeadMeta title="PepperBot | Demo" />
      <main className="min-h-screen bg-base-100">
        <Header />
        <TwoColumnLayout
          leftContent={<FlowBuilder />}
          rightContent={<Chat />}
        />
      </main>
    </>
  );
};

export default Flow;
