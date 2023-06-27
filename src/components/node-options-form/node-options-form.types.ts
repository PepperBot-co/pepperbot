export type UpdateNodeConfig = (
  key: string
) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
