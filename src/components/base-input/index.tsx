import React, { memo } from "react";

import { type BaseInputData } from "./base-input.types";

const inputTypeDefaultClasses = {
  textarea: "textarea-bordered textarea h-20 placeholder-base-content/60",
  input: "input input-bordered placeholder-base-content/60",
};

const BaseInput: React.FC<BaseInputData> = ({
  label = "",
  inputType = "textarea",
  containerCustomClasses = "",
  labelCustomClasses = "",
  inputCustomClasses = "",
  ...restProps
}) => {
  const inputElement = inputType === "input" ? "input" : "textarea";

  return (
    <div className={`form-control ${containerCustomClasses}`}>
      {label && (
        <div className="mb-4">
          <label
            className={`label-text text-base md:text-lg ${labelCustomClasses}`}
          >
            {label}
          </label>
        </div>
      )}

      {React.createElement(inputElement, {
        className: `${inputTypeDefaultClasses[inputElement]} ${inputCustomClasses}`,
        ...restProps,
      })}
    </div>
  );
};

export default memo(BaseInput);
