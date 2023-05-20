import { Archive, UserPlus, Delete } from "@pb/components/icons";
import { type ReactNode } from "react";

export const uuid = (): string =>
  new Date().getTime().toString(36) + Math.random().toString(36).slice(2);

type ActionItem = {
  label: string;
  icon?: ReactNode;
};

const actions: ActionItem[] = [
  {
    label: "Archive",
    icon: <Archive />,
  },
  {
    label: "Add User",
    icon: <UserPlus />,
  },
  {
    label: "Delete",
    icon: <Delete />,
  },
];

export const randomLabel = (): ActionItem => {
  return actions[~~(Math.random() * actions.length)] as ActionItem;
};
