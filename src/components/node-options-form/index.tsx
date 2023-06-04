import useFlowStore from "@pb/store/flow-builder.store";
import React, { useCallback, useEffect, useState } from "react";

import BaseInput from "../base-input";
import type { PBNodeProps } from "../flow-builder/flow-builder.types";
import InfoCard from "../info-card";

type UpdateNodeConfig = (
  key: string
) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

const NodeOptionsForm = ({ id, data }: PBNodeProps) => {
  const { updateNodeConfigs } = useFlowStore();

  const { description, icon, label, nodeConfigs: initialNodeConfigs } = data;
  const [nodeConfigs, setNodeConfigs] = useState(initialNodeConfigs);

  useEffect(() => {
    setNodeConfigs(initialNodeConfigs);
  }, [initialNodeConfigs]);

  const updateNodeConfig: UpdateNodeConfig = useCallback(
    (key) => (event) => {
      setNodeConfigs((prevNodeConfigs) => ({
        ...(prevNodeConfigs || {}),
        [key]: event.target.value,
      }));
      updateNodeConfigs(id, key, event.target.value || "");
    },
    [id, updateNodeConfigs]
  );

  return (
    <div className="h-full max-w-[32rem] flex-1 bg-base-100 px-4 py-9">
      <InfoCard
        containerCustomClasses="pb-6 items-start"
        description={description}
        icon={icon}
        title={label}
      />
      <BaseInput
        key={`message-${id}`}
        containerCustomClasses="pt-6 pb-3"
        inputType="textarea"
        value={nodeConfigs?.message}
        label="Message"
        placeholder="Type in the question here..."
        onChange={updateNodeConfig("message")}
      />
      <BaseInput
        key={`answer-${id}`}
        containerCustomClasses="pt-6 pb-3"
        inputType="textarea"
        label="Expected Answer"
        placeholder="Leave it empty if nothing is expected from the user."
        value={nodeConfigs?.expectedAnswer}
        onChange={updateNodeConfig("expectedAnswer")}
      />
    </div>
  );
};

export default NodeOptionsForm;
