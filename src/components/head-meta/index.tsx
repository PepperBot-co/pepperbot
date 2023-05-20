import Head from "next/head";

type HeadMetaProps = {
  title: string;
  description?: string;
  keywords?: string;
  favicon?: string;
};

const HeadMeta: React.FC<HeadMetaProps> = ({
  title,
  description = "Welcome to PepperBot - your personal AI assistant, designed to make your life easier.",
  keywords = "AI, Artificial Intelligence, Personal Assistant, PepperBot, AI Assistant",
  favicon = "/favicon.ico",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href={favicon} />
    </Head>
  );
};

export default HeadMeta;
