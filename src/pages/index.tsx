import Card from "@pb/components/card";
import { type CardData } from "@pb/components/card/card.types";
import HeadMeta from "@pb/components/head-meta";
import Header from "@pb/components/header";
import { type NextPage } from "next";

const cardData: CardData[] = [
  {
    title: "Daily Standup",
    description: "Track daily updates and blockers on autopilot",
    flowID: "daily-standup",
  },
  {
    title: "Quick Check-in",
    description: "Keep teammates in the loop with a three-question survey",
    flowID: "quick-check-in",
  },
  {
    title: "Blockers Report",
    description: "Give your team an easy way to flag the blockers",
    flowID: "blockers-report",
  },
  // Add more card data here
];

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta title="PepperBot | Demo" />
      <main className="min-h-screen bg-base-100">
        <Header />
        <div className="m-auto grid grid-cols-1 gap-6 p-12 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card) => (
            <Card
              key={card.flowID}
              title={card.title}
              description={card.description}
              flowID={card.flowID}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
