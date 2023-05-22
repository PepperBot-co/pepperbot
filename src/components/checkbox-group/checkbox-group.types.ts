export type CheckboxValue = string | number;

type CheckboxData = {
  value: CheckboxValue;
  label: string;
  checked?: boolean;
};

type ComponentPropsWithoutOnChange = Omit<React.HTMLProps<HTMLInputElement>, 'onChange'>;

interface ComponentCustomClasses extends ComponentPropsWithoutOnChange {
  titleCustomClasses?: string;
  containerCustomClasses?: string;
  checkboxGroupCustomClasses?: string;
  checkboxElementCustomClasses?: string;
  checkboxLabelCustomClasses?: string;
}

export interface CheckboxGroupProps extends ComponentCustomClasses {
  groupTitle?: string;
  checkboxes: CheckboxData[];
  onChange?: (values: CheckboxValue[]) => void;
}
