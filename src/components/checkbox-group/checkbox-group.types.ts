interface ComponentCustomClasses {
  titleCustomClasses?: string;
  containerCustomClasses?: string;
  checkboxGroupCustomClasses?: string;
  checkboxElementCustomClasses?: string;
  checkboxLabelCustomClasses?: string;
}

export type CheckboxValue = string | number;

type CheckboxData = {
  value: CheckboxValue;
  label: string;
};

export interface CheckboxGroupProps extends ComponentCustomClasses {
  groupTitle?: string;
  checkboxes: CheckboxData[];
  onChange?: (values: CheckboxValue[]) => void;
}
