import { useState, memo } from "react";

import type { CheckboxGroupProps, CheckboxValue } from "./checkbox-group.types";

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  groupTitle = "",
  checkboxes = [],
  titleCustomClasses = "",
  containerCustomClasses = "",
  checkboxGroupCustomClasses = "",
  checkboxElementCustomClasses = "",
  checkboxLabelCustomClasses = "",
  onChange
}) => {
  const [selectedValues, setSelectedValues] = useState<CheckboxValue[]>([]);

  /**
   * Handles the change event of a checkbox.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event object.
   * @returns {void} - Returns nothing.
   */
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, checked } = event.target;

    const updatedValues = checked
      ? [...selectedValues, value]
      : selectedValues.filter((val) => val !== value);

    setSelectedValues(updatedValues);

    if (onChange) {
      onChange(updatedValues);
    }
  };

  return (
    <div className={containerCustomClasses}>
      {groupTitle && (
        <div className="mb-4">
          <h3
            className={`text-base font-semibold md:text-lg ${titleCustomClasses}`}
          >
            {groupTitle}
          </h3>
        </div>
      )}

      <div
        className={`form-control w-fit gap-y-2 ${checkboxGroupCustomClasses}`}
      >
        {checkboxes.map((checkbox) => (
          <label
            key={checkbox.value}
            className={`label w-fit cursor-pointer gap-x-4 p-0 ${checkboxElementCustomClasses}`}
          >
            <input
              id={String(checkbox.value)}
              type="checkbox"
              value={checkbox.value}
              checked={selectedValues.includes(checkbox.value)}
              className="checkbox"
              onChange={handleCheckboxChange}
            />
            <span className={`label-text ${checkboxLabelCustomClasses}`}>
              {checkbox.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default memo(CheckboxGroup);
