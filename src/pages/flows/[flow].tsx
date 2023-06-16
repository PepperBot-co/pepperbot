import Chat from "@pb/components/chat";
import FlowBuilder from "@pb/components/flow-builder";
import HeadMeta from "@pb/components/head-meta";
import Header from "@pb/components/header";
import TwoColumnLayout from "@pb/components/layout/two-column";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Flow: NextPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    void router.replace("/api/auth/signin");

    return <></>;
  }

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
