import useFlowStore, { flowSelector } from "@pb/store/flow-builder.store";
import React, { useCallback, useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

import BaseInput from "../base-input";
import type { PBNodeProps } from "../flow-builder/flow-builder.types";
import InfoCard from "../info-card";
import { type UpdateNodeConfig } from "./node-options-form.types";

const NodeOptionsForm = ({ id, data }: PBNodeProps) => {
  const { updateNodeConfigs } = useFlowStore(flowSelector, shallow);

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
        containerCustomClasses="pt-6 pb-3"
        id={`message-input-${id}`}
        inputType="textarea"
        key={`message-${id}`}
        label="Message"
        onChange={updateNodeConfig("message")}
        placeholder="Type in the question here..."
        value={nodeConfigs?.message}
      />
      <BaseInput
        containerCustomClasses="pt-6 pb-3"
        id={`answer-input-${id}`}
        inputType="textarea"
        key={`answer-${id}`}
        label="Expected Answer"
        onChange={updateNodeConfig("expectedAnswer")}
        placeholder="Leave it empty if nothing is expected from the user."
        value={nodeConfigs?.expectedAnswer}
      />
    </div>
  );
};

export default NodeOptionsForm;
