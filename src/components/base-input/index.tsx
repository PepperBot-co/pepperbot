import React, { memo } from "react";

import { type BaseInputData } from "./base-input.types";

const inputTypeDefaultClasses = {
  textarea: "textarea-bordered textarea h-20",
  input: "input input-bordered"
};

// TODO(aliabudiab112@gmail.com): Add a "...restProps" parameter to handle properties for both input and textarea components.

const BaseInput: React.FC<BaseInputData> = ({
  label = "",
  placeholder = "",
  inputType = "textarea",
  containerCustomClasses = "",
  labelCustomClasses = "",
  inputCustomClasses = ""
}) => {
  const inputElement = inputType === "input" ? "input" : "textarea";

  return (
    <div className={`form-control ${containerCustomClasses}`}>
      {label && (
        <div className="mb-4">
          <label className={`label-text text-base md:text-lg ${labelCustomClasses}`}>
            {label}
          </label>
        </div>
      )}

      {React.createElement(inputElement, {
        className: `${inputTypeDefaultClasses[inputElement]} ${inputCustomClasses}`,
        placeholder
      })}
    </div>
  );
};

export default memo(BaseInput);
