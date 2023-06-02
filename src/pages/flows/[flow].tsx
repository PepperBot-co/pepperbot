import Chat from "@pb/components/chat";
import FlowBuilder from "@pb/components/flow-builder";
import HeadMeta from "@pb/components/head-meta";
import Header from "@pb/components/header";
import TwoColumnLayout from "@pb/components/layout/two-column";
// import { api } from "@pb/utils/api";
import { type NextPage } from "next";

const Flow: NextPage = () => {
  // const flow = api.flow.getFlow.useQuery({
  //   flowId: "daily-standup",
  // });

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
