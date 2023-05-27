// TODO(laithyounesy@gmail.com): Types should be moved to each component directory

export type CardData = {
  description: string;
  flowID: string;
  title: string;
};

export type TwoColumnLayoutProps = {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
};
