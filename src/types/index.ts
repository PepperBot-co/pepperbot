// TODO(laithyounesy@gmail.com): Types should be moved to each component directory

export type CardData = {
  title: string;
  description: string;
  flowID: string;
};

export type TwoColumnLayoutProps = {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
};
